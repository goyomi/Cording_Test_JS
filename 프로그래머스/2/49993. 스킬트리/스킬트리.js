function solution(skill, skill_trees) {
    let count = 0;
    
    for(const tree of skill_trees){
        let skillOrder = tree.split('').filter(char => skill.includes(char)).join('');
        if(skill.startsWith(skillOrder)){
            count++;
        }
    }
    
    return count;
}