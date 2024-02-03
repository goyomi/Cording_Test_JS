function solution(friends, gifts) {
    const len = friends.length;
    const nameMap = new Map();
    const giftTable = new Array(len).fill(0).map(_ => new Array(len).fill(0));
    const rankInfo = new Array(len).fill(0);
    const nextMonth = new Array(len).fill(0);

    // 친구들 키 값 저장.
    friends.forEach((name, idx) => {
        nameMap.set(name, idx);
    })
    
    // 선물 주고받은 내역 기록
    gifts.forEach(info => {
        const [from, to] = info.split(" ");
        giftTable[nameMap.get(from)][nameMap.get(to)]++;
    })
    
    console.log(giftTable)

    // 기록을 바탕으로 선물 지수 계산
    for (let i=0; i<len; i++) {
        rankInfo[i] = giftTable[i].reduce((acc, cur) => acc += cur, 0)
        
        for (let j=0; j<len; j++) {
            rankInfo[i] -= giftTable[j][i];       
        }
    }
    
    // 다음 달 받을 선물 계산
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (i===j) continue;
            if (giftTable[i][j] > giftTable[j][i]) nextMonth[i]++;
            if (giftTable[i][j] < giftTable[j][i]) nextMonth[j]++;
            if (giftTable[i][j] === giftTable[j][i]) {
                if (rankInfo[i] > rankInfo[j]) nextMonth[i]++
                if (rankInfo[i] < rankInfo[j]) nextMonth[j]++
            }
        }
    }
    
    // 최댓값 반환
    return Math.max(...nextMonth)
}

// 코드출처 https://velog.io/@pmthk__/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EA%B0%80%EC%9E%A5-%EB%A7%8E%EC%9D%B4-%EB%B0%9B%EC%9D%80-%EC%84%A0%EB%AC%BC-Lv.1-JS
