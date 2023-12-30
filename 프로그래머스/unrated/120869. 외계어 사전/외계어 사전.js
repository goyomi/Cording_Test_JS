function solution(spell, dic) {
    const sameExist = dic.filter(word => word.length === spell.length)
    .some(str => {
        const allSame = spell.every(char => str.includes(char));
        return allSame;   
    });
    
    return sameExist ? 1 : 2;
}

