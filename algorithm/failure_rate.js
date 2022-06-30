function solution(N, stages) {
    let answer = [];
    for(let i=1; i<=N; i++){
        ////Array.filter() : 조건을 만족하는 원소만 추출
        const stage = stages.filter((v)=> v >= i).length;
        const current =stages.filter((v)=> v===i).length;
        answer.push([i,current/stage]);
    };
    //answer의 2번째 원소기준으로 내림차순으로 정렬
    answer.sort((a,b)=>b[1]-a[1]);
    //Array.map() : 배열을 조건에 맞게 변환
    return answer.map((x)=>x[0]);
};
const N=5;
const stages=[2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N,stages))