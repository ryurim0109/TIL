//숫자 문자열과 영단어

const solution=(s)=> {
    let answer ='';
    let temp ='';
    let numEnglish =["zero","one","two","three","four","five","six","seven","eight","nine"]
    for(let i=0; i<s.length; i++){
      if(!isNaN(s[i])){ //숫자일때
          answer += s[i];
      }else{ //문자일때
           temp += s[i];
          console.log(temp)
          for(let j=0; j<numEnglish.length; j++){
              if(temp == numEnglish[j]){
                  answer+=j
                  temp =""; //다시 초기화하지 않으면 1번째 값만..나온다.
              }
          }
      }
    };
    return Number(answer)
}

console.log(solution("one4seveneight"))