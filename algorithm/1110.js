//let input = Number(require('fs').readFileSync('/dev/stdin').toString());
let input = Number(require('fs').readFileSync('./test.txt').toString());

let num = input;
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    //10으로 나눈 후 버림 한 수 + 1의자리 수
    num = (num % 10) * 10 + sum % 10; 

    if (input === num) {
	break;
    } 
}

console.log(i);