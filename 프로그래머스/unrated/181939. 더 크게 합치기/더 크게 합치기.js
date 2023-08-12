function solution(a, b) {
    const ab = parseInt(String(a)+String(b));
    const ba = parseInt(String(b)+String(a));

    if(ab!==ba){
        return Math.max(ab,ba);
    }else return ab;
}