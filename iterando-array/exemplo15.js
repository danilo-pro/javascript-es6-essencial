const students = [
    {
        name: 'Danilo',
        grade: 10
    },
    {
        name: 'Gabriela',
        grade: 8
    },
    {
        name: 'Giovanna',
        grade: 5
    },
];

const ordenStudents = students.sort((current, next) => current.grade - next.grade);
const ordenStudents2 = students.sort((current, next) => next.grade - current.grade);

console.log(ordenStudents);
console.log(ordenStudents2);

// [
//   { name: 'Danilo', grade: 10 },
//   { name: 'Gabriela', grade: 8 },
//   { name: 'Giovanna', grade: 5 }
// ]
// [
//   { name: 'Danilo', grade: 10 },
//   { name: 'Gabriela', grade: 8 },
//   { name: 'Giovanna', grade: 5 }
// ]