function solution(rank, attendance) {
    const students = rank.map((r, index) => ({
        rank: r,
        attendance: attendance[index],
        studentNumber: index
    }));

    const eligibleStudents = students
        .filter(student => student.attendance)
        .sort((a, b) => a.rank - b.rank);

    const selectedStudents = eligibleStudents.slice(0, 3).map(student => student.studentNumber);

    return selectedStudents.length === 3 
        ? 10000 * selectedStudents[0] + 100 * selectedStudents[1] + selectedStudents[2] 
        : -1;
}

