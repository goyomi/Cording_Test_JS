function solution(myStr) {
    const splitStr = myStr.split(/[abc]/);
    const filterStr = splitStr.filter(str => str !== "");   
    
    return filterStr.length > 0 ? filterStr : ["EMPTY"];
}