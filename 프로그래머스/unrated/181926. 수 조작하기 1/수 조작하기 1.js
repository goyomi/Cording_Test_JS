function solution(n, control) {
    const numberW = control.split('w').length;
    const numberS = control.split('s').length;
    const numberD = control.split('d').length;
    const numberA = control.split('a').length;
    
    return n+(numberW*1)-(numberS*1)+(numberD*10)-(numberA*10);
}