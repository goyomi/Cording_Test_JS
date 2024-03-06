function solution(x, y, n) {
    let currentDepth = new Set([x]); // 현재 깊이에서의 값들
    let depth = 0; // 연산 횟수

    while (currentDepth.size > 0) {
        if (currentDepth.has(y)) {
            return depth; // 현재 깊이에서 y를 찾은 경우, 현재까지의 연산 횟수 반환
        }

        let nextDepth = new Set(); // 다음 깊이의 값들을 저장할 Set

        for (let current of currentDepth) {
            // 가능한 모든 연산 적용
            let operations = [current + n, current * 2, current * 3];

            for (let next of operations) {
                if (next <= y) {
                    nextDepth.add(next); // 다음 깊이의 값으로 추가
                }
            }
        }

        currentDepth = nextDepth; // 다음 깊이로 이동
        depth++; // 연산 횟수 증가
    }

    return -1; // y에 도달할 수 없는 경우
}