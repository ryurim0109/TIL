const solution=(dartResult)=>{
    let answer=[];
    let dartScore=0; //다트 점수

    for(let i=0; i<dartResult.length; i++){
        if(!isNaN(dartResult[i])){ //다트결과의 i번째가 숫자라면,
            if(dartResult[i]==1 && dartResult[i+1]==0){ //예외처리 10은 두자리 수니까 만일 10이라면
                dartScore=10; //다트 점수는 10이 되고
                i++;
            }
                dartScore=Number(dartResult[i]); // 다트 점수는 다트 결과 숫자 i번째로 변경해줘라
          
        }else if(dartResult[i]==="S"){
            answer.push(dartScore); //배열에 넣어줍니다.
        }else if(dartResult[i]==="D"){
            answer.push(Math.pow(dartScore,2)); //배열에 다트 점수의 2제곱을 넣어주고,
        }else if(dartResult[i]==="T"){
            answer.push(Math.pow(dartScore,3)); //배열에 다트 점수의 3제곱을 넣어주고,
        }else if(dartResult[i]==="*"){
            answer[answer.length - 1] *=2; //*전에 있는 숫자 두배를 해주고,
            answer[answer.length - 2] *=2; //*전전에 숫자가 있다면 그 숫자도 두배를 해줍니다.
        }else if(dartResult[i]==="#"){
            answer[answer.length -1] *= -1;
        }
    }

    return answer.reduce((a,b)=>a+b,0);
};

const dartResult="1S2D*3T"
//answer 37;
console.log(solution(dartResult));
