let fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split("\n");

let N = Number(input[0]); // 0번째에는 test case의 개수가 담겨있다. =>숫자로 형변환
let inputArr = [];

for (let i = 1; i <= N; i++) {
  inputArr.push(input[i]); // ['c.user.mike.programs','c.user.nike.programs', 'c.user.rice.programs']
}

let answer = [];
for (let i = 0; i < inputArr[0].length; i++) {
  let temp_1 = inputArr[0][i]; // inputArr의 0번째 순번 하나하나를 담은 temp
  let num = 0;

  for (let j = 0; j < inputArr.length; j++) {
    if (temp_1 !== inputArr[j][i]) {
      answer.push("?");
      break; // if문 탈출
    }
    num++; //arr의 길이와 같아지면, answer에 push해주기 위함
  }
  if (num === inputArr.length) answer.push(temp_1);
}
console.log(answer.join(""));
