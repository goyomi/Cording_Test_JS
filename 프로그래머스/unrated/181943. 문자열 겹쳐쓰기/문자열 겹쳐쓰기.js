function solution(my_string, overwrite_string, s) {
    const start_string = my_string.slice(0, s);
    const end_string = my_string.slice(overwrite_string.length + s);
    return start_string + overwrite_string + end_string;
}

