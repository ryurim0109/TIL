let fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");

//맨마지막 0은 미포함이므로 pop으로 빼줌
input.pop(); //[ '121', '1231', '12421' ]

for (let i = 0; i < input.length; i++) {
  let temp_num = input[i];
  let reverse_num = input[i].split("").reverse().join("");

  console.log(+temp_num === +reverse_num ? "yes" : "no");
}
