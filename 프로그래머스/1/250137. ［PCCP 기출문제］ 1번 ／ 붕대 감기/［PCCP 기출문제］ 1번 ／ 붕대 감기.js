function solution(bandage, health, attacks) {
    let currentHealth = health;
    const [t, x, y] = bandage;
    let continuousSuccess = 0;
    let lastTime = attacks[attacks.length - 1][0];
    
    let status = Array.from({length: lastTime + 1}, () => ({attack: 0, recover: x}));
    
    attacks.forEach(([attackTime, damage]) => {
        status[attackTime].attack = damage;
    });
    console.log(status)
    
    
    for(let i=1; i<=lastTime; i++){
        if(status[i].attack > 0){
            currentHealth -= status[i].attack;
            continuousSuccess = 0;
        }else{
            continuousSuccess++;
            currentHealth = Math.min(health, currentHealth + status[i].recover);
            if(continuousSuccess === t){
                currentHealth = Math.min(health, currentHealth + y);
                continuousSuccess = 0;
            }
        }
        if(currentHealth <= 0) return -1;
    }
    return currentHealth;
}