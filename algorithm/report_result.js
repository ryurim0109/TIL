
const solution=(id_list, report, k)=> {
    const newreport = [...new Set(report)]; //2번 예시처럼 중복값이 있으면 안되니까 중복값을 제거한 신고한 배열을 만들어줍니다.
    //console.log(newreport)
    let stopId=[]; // 정지당한 유저 아이디
    let reportCount=Array(id_list.length).fill(0); //신고 당한 수
    let mail = Array(id_list.length).fill(0); //메일 배열
     
    for(let i=0; i<newreport.length;i++){
        let userID=newreport[i].split(" ")[0];
        let reportID=newreport[i].split(" ")[1];
        let indexReport =id_list.indexOf(reportID); //일반 유저 리스트에서 신고받은 유저의 인덱스를 찾아줍니다.
        reportCount[indexReport]+=1; //신고당한 유저에게 신고수 누적시키기
        
        if(reportCount[indexReport]>=k){ //신고 수가 k이상인 경우
            stopId.push(id_list[indexReport]);
        }
    }
    //mail에 
      newreport.map((v)=>{
            let userID=v.split(" ")[0];
            let reportID=v.split(" ")[1];
          
            if(stopId.indexOf(reportID)>=0){
                //신고한 유저 아이디에 정지당한 유저 아이디가 있다면,
                let idx=id_list.indexOf(userID); //해당 유저의 id_list에서의 순번을 구하고,
                mail[idx]+=1; //그 해당 메일의 순번에 1씩 증가시켜주어라
            }
      });
        return mail;
    
}