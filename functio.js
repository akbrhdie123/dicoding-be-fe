function minimal(a, b) {
    return a === b ? a : Math.min(a, b);
}

function findIndex(array, number) {
    const Index = array.indexOf(number);
    return Index !== -1 ? Index : -1;
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));

console.log(findIndex([1, 2, 3, 4, 5], 3));
console.log(findIndex([1, 2, 3, 4, 5], 6));
console.log(findIndex([1, 2, 3, 4, 5], 5));