function solution(progresses, speeds) {
    let answer = [];
    let daysNeeded = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index]));
    let maxDay = daysNeeded[0];    
    let featuresCount = 1;
    
    for(let i = 1; i<daysNeeded.length; i++){
        if(daysNeeded[i] <= maxDay){
            featuresCount++
        }else{
            answer.push(featuresCount);
            featuresCount = 1;
            maxDay = daysNeeded[i];
        }
    }
    
    answer.push(featuresCount);
    return answer;
}
