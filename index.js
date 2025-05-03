
const numbers=[1, 2, -1, 3, 4];

const items =numbers
    .filter(n => n >= 0)
    .map(n => ({ a: n}));


console.log(items)
