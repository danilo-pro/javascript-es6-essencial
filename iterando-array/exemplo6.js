const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

// { value: [ 0, 1 ], done: false }
// { value: [ 1, 2 ], done: false }
// { value: [ 2, 3 ], done: false }
// { value: [ 3, 4 ], done: false }
// { value: undefined, done: true }