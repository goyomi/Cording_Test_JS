function solution(arr) {
    const rows = arr.length; // 행
    const cols = arr[0].length; // 열
    
    if(rows > cols){
        arr.forEach(row => {
            while(row.length < rows){
                row.push(0);
            }
        });
    }else if(cols > rows){
        while(arr.length < cols){
            arr.push(new Array(cols).fill(0));
        }
    }

    return arr;
}