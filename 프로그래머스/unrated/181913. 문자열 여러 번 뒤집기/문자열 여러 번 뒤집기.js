function solution(my_string, queries) {
    queries.forEach(query =>{
        const start = query[0];
        const end = query[1];
        let reversePart = my_string.slice(start, end + 1)
                        .split('').reverse().join('');
        my_string = my_string.slice(0, start) 
                    + reversePart + my_string.slice(end + 1);
    });
    
    return my_string;
}