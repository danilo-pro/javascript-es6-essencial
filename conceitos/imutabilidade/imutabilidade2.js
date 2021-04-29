const students = [
    {
        name: 'Adriele',
        grade: 7
    },
    {
        name: 'Karina',
        grade: 8
    },
    {
        name: 'Juliana',
        grade: 6
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);