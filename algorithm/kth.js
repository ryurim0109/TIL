function solution(array, commands) {
    const answer =[]
    commands.map((v)=>{
        const range = array.slice(v[0] - 1 ,v[1]); //0번째와 첫번째 사이로 배열을 자릅니다. slice (처음시작, end까지) 그런데 end는 미포함으로 -1해주지 않아도 됩니다.
        range.sort((a,b)=>a-b); // 오름차순으로 정렬해줍니다.
        answer.push(range[v[2]-1]) //3번째 수를 배열에 넣어줍니다.
        
    });
    return answer
}
const array=[1, 5, 2, 6, 3, 7, 4];
const commands=[[2, 5, 3], [4, 4, 1], [1, 7, 3]];
console.log(solution(array, commands));