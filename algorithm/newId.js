const solution=(new_id)=> {
    let answer =new_id;
    answer = answer.toLowerCase(); // 1단계 소문자로 바꾸어줍니다.
    let reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    answer = answer.replace(reg,'') //2단계 특수문자 제거
    answer = answer.replace(/\.+/gi,'.'); //3단계 '...' '..' => '.'로 변환
    answer = answer.replace(/^\.|\.$/gi,'') ; // 4단계 ^ 첫번째 글지기 .이고 마지막 글자가 $ .이면,
    
    if(answer ===""){ //4단계
        answer += "a";
    }
    if(answer.length >=16){ //5단계 0번째부터 15번째 전까지 자르겠다.
        answer = answer.substring(0,15); 
    }
     answer = answer.replace(/^\.|\.$/gi,'')
    if(answer.length <=2){
        answer = answer.padEnd(3,answer[answer.length-1])
    }
    
   return answer;
}