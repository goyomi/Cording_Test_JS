function solution(phone_number) {
    const numLen = phone_number.length;
    const number = phone_number.slice(-4);
    return Array(numLen-4).fill('*').join('')+number;
}