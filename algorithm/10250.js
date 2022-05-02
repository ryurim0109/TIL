let input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
//console.log(input)
//[ '2', '6 12 10', '30 50 72' ]
const A =parseInt(input.shift())
//console.log(A)
//2 첫번째 값 제거 , 2가지 케이스

for(let i=0; i<A; i++){
    const arr =input[i].split(' ');
    const H = parseInt(arr[0]) // 호텔 층수,
    const N = parseInt(arr[2]) //몇번째 손님
    if(N%H===0){ //꼭대기 층이라면
        fl=H; //층을 꼭대기 층으로 해주고,
        ho=N/H; //호수는 1호로 해줘라
    }else if(N%H!==0){
        fl=N%H;
        ho=Math.floor(N/H)+1;
    }
    //console.log(fl,ho)
    //4 2
    //12 3

    if(ho<10){ho=`0${ho}`}
    console.log(`${fl}${ho}`)
}