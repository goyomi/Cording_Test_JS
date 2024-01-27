function solution(survey, choices) {
    let score = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0};
    const scoreMap = {1:3, 2:2, 3:1, 5:1, 6:2, 7:3};
    
    for(let i=0; i<survey.length; i++){
        const [disagree, agree] = survey[i];
        const choice = choices[i];
        
        if(choice < 4){
            score[disagree] += scoreMap[choice];
        }else if(choice > 4){
            score[agree] += scoreMap[choice];
        }
    }
    
    let result = '';
    result += score['R'] >= score['T'] ? 'R' : 'T';
    result += score['C'] >= score['F'] ? 'C' : 'F';
    result += score['J'] >= score['M'] ? 'J' : 'M';
    result += score['A'] >= score['N'] ? 'A' : 'N';
    
    return result;
}