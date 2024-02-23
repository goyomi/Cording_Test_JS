function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const parkingTime = new Map();
    
    function timeToMinutes(time){
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }
    
    records.forEach((record) => {
        const [time, number, inOut] = record.split(' ');
        const minutes = timeToMinutes(time)        
        if(inOut === 'IN'){
            parkingTime.set(number, (parkingTime.get(number) || []).concat(-minutes));
        }else {
            parkingTime.set(number, parkingTime.get(number).concat(minutes));
        }
    });
    
    const feesMap = new Map([...parkingTime].map(([carNumber, times]) => {
        const totalMinutes = times.reduce((acc, cur) => acc + cur, 0) + (times.length % 2 ? timeToMinutes('23:59') : 0);
        const extraTime = Math.max(totalMinutes - basicTime, 0);
        const totalFee = basicFee + Math.ceil(extraTime / unitTime) * unitFee;
        return [carNumber, totalFee];
    }));

    return [...feesMap].sort(([a], [b]) => a - b).map(([_, fee]) => fee);
}
