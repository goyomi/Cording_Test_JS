function solution(k, dungeons) {
    let answer = 0;
    
    function dfs(k, count, dungeons){
        answer = Math.max(answer, count);
        for(let i=0; i<dungeons.length; i++){
            const [minPh, usedPh] = dungeons[i];
            if(k >= minPh){
                const nextDungeons = dungeons.slice();
                nextDungeons.splice(i, 1);
                dfs(k - usedPh, count + 1, nextDungeons);
            }
        }
    }
    
    dfs(k, 0, dungeons);
    return answer;
}