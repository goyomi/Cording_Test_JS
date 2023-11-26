function solution(a, b, n) {
    let totalCokes = 0;

    while (n >= a) {
        let exchangedCokes = Math.floor(n / a) * b;
        totalCokes += exchangedCokes;
        n = (n % a) + exchangedCokes;
    }

    return totalCokes;
}
