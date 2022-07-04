const solution =(n,lost,reserve)=>{
    let answer =0; //전체 학생 수 - 옷을 빌리지 못한 학생 수
   
    const noReserve = lost.sort((a,b)=> a-b).filter((v)=>!reserve.includes(v));
    //여벌의 옷이 없는 사람
    let hasReserve =reserve.sort((a,b)=>a-b).filter((v)=>!lost.includes(v));
    //여벌의 옷이 있는 사람


    //옷을 빌리지 못한 학생 수
    const finalStudent = noReserve.filter((l)=>{ //체육복을 도난당했으면서 여벌이 없는 학생 배열을 돌면서
        //체육복을 안도난당했고 여벌이 있는 사람들 중에 번호 차이가 1인 학생 번호를 찾는다. 
        const extraClothes = hasReserve.find((r)=> Math.abs(r-l)===1);
        if(!extraClothes) return lost;
        hasReserve = hasReserve.filter(r => r !==extraClothes); //여벌의 옷이 있는 학생이 옷을 빌려준 학생이면 제거시킨다.
    });
    answer = n - finalStudent.length;
    return answer;
};

/* **`Math.abs()`**함수는 주어진 숫자의 절대값을 반환합니다.

**`find()`** 메서드는 주어진 판별 함수를 만족하는 **첫 번째 요소**의 **값**을 반환합니다.

filter는 참 같은 값(Truthy)만 반환해준다.

거짓같은 값 ⇒ 예: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`와 `NaN` 등 빼고 다 Truthy한 값이다.

lost 와 reserve 배열이 오름차순으로 주어지지 않을 케이스가 있기 때문에, sort 메서드로 오름차순 시켜줘야함. */

const n=5;
const lost =[2, 4];
const reserve=[1, 3, 5];
console.log(solution(n,lost,reserve))