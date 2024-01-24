function solution(participant, completion) {
    const participantMap = new Map();
    
    for(const person of participant){
        if(participantMap.has(person)){
            participantMap.set(person, participantMap.get(person) + 1);
        }else{
            participantMap.set(person, 1);
        }
    }
    
    for(const person of completion){
        if(participantMap.get(person) === 1){
            participantMap.delete(person);
        }else{
            participantMap.set(person, participantMap.get(person) - 1);
        }
    }
    
    for(const [person, count] of participantMap){
        if(count > 0) return person;
    }
}