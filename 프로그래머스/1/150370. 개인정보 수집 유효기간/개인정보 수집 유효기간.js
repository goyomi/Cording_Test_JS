function solution(today, terms, privacies) {
    const termMap = terms.reduce((acc,term)=>{
        const [type, month] = term.split(' ');
        acc[type] = parseInt(month, 10);
        return acc;
    },{});
    
    const todayDate = new Date(today);
    const result = [];
    
    privacies.forEach((privacy, idx)=>{
        const [dateStr, type] = privacy.split(' ');
        const dateParts = dateStr.split('.').map(part=>parseInt(part),10);
        const expiryDate = new Date(dateParts[0], dateParts[1] - 1 + termMap[type], dateParts[2] - 1);
        
        if(expiryDate < todayDate){
            result.push(idx + 1);
        }
    });
    
    return result;
}