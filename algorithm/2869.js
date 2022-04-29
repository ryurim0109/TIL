let input = require('fs').readFileSync('/test.txt').toString().split(' ');


const a =input[0]
const b =input[1]
const c =input[2]

console.log(Math.ceil((c-b)/(a-b)))