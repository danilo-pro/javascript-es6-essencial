const arr = [1, 2, 3, 4, 5];

console.log(arr.splice(2));
console.log((arr));
console.log(arr.splice(0, 0, 'first'));
console.log(arr.splice(arr));

// [ 3, 4, 5 ]
// [ 1, 2 ]
// []
// [ 'first', 1, 2 ]