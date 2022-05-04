let input = require('fs').readFileSync('./test.txt').toString().split(' ');
//console.log(input)
//readFileSync('/dev/stdin')

let N =Number(input[0]);
let M =Number(input[1]);

let isTrue = Array(M + 1).fill(true);
// [true, true, true, true,
//   true, true, true, true,
//   true, true, true, true,
//   true, true, true, true,

isTrue[0] = isTrue[1] =false;
//   true]  0과 1은 소수가 아니므로 false값으로 바꿔준다.
// [
//     false, false, true, true,
//     true,  true,  true, true,
//     true,  true,  true, true,
//     true,  true,  true, true,
//     true
//   ]


    //2부터 시작, 주어진 값 N의 제곱근까지 i의 배수들을 모두 false로 만들어준다.
    for(let i =2; i<=Math.ceil(Math.sqrt(M));i++){
        if(isTrue[i]){
            let m =2;
            while(i * m <= M){
                isTrue[i*m]=false;
                m++;
            }
        }
}

const answer=[]
for(let n =N; n<= M; n++){
    if(isTrue[n]){
        answer.push(n)
    }
}
console.log(answer.join('\n'))
