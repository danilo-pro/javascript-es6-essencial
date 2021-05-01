const arr = [1, 2, 3, 4];

console.log(arr.flatMap(value => [value * 2]));

console.log(arr.flatMap(value => [[value * 2]]));

// [ 2, 4, 6, 8 ]
// [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]