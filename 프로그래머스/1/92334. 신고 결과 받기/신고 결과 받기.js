function solution(id_list, report, k) {
    const reportMap = {};
    const reportedCount = {};
    const resultMailCount = new Array(id_list.length).fill(0);
    
    id_list.forEach(id => {
        reportMap[id] = new Set();
        reportedCount[id] = 0;
    });
    
    report.forEach(r => {
        const [reporter, reported] = r.split(' ');
        if (!reportMap[reporter].has(reported)) {
            reportMap[reporter].add(reported);
            reportedCount[reported]++;
        }
    });
    
    id_list.forEach((id, index) => {
        reportMap[id].forEach(reported => {
            if (reportedCount[reported] >= k) {
                resultMailCount[index]++;
            }
        });
    });

    return resultMailCount;
}
