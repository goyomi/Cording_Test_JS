function solution(a, b) {
    const txtPlus = String(a)+String(b);
    const numMul = 2*a*b;
    
    let num1 = parseInt(a+""+b+"");
    
    return Math.max(Number(txtPlus),numMul)
}