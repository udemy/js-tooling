import '@babel/polyfill';

const array = new Array(1e3).fill(1);
let counter = 0;

for (const [i, val] of array.entries()) counter += i + val;

export default counter;
