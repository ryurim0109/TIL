const solution =(left,right)=>{
    let answer =0;
    let divisorLength =0;

    for(let i= left; i<=right; i++){
        for (let j=1; j<=i; j++){
            if( i % j ===0) divisorLength++;
        }
        if(divisorLength % 2 ===0) answer +=i; //짝수라면 i를 더하고
        else answer -=i //홀수라면 i를 빼라
        divisorLength = 0; //다시 약수의 개수 0으로 초기화
    };
    return answer;
};

const left =13;
const right = 17; 
console.log(solution(left,right));