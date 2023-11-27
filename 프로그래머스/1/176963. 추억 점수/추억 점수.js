function solution(name, yearning, photo) {
    
    const missingScore = name.reduce((obj, key, index) => {
        obj[key] = yearning[index];
        return obj
    }, {});
    
    return photo.map(picture => {
        return picture.reduce((score, person) => {
            return score + (missingScore[person] || 0);
        }, 0)
    });
}