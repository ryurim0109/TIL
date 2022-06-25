function solution(d, budget) {
    let sum =0; 
    let answer=0; 

    d.sort((a,b)=>a-b); //우선 정렬을 해줍니다.
    for(let i=0; i<d.length; i++){
        answer++; // 답을 우선 올려줍니다.
        sum += d[i] // sum 에 d의 합을 구합니다.

        if(sum > budget){
            answer--;
        }; //더하다가 만약에 합이 예산보다 크게 된다면, 답을 -1해라 !!
    }
    return answer;
    
}

const d=[1,3,2,5,4]
const budget=9;
console.log(solution(d, budget))