function solution(n) {
    for(let i=2; i<n; i++){
        //2부터 n까지 시작
        if(n % i===1){
            return i;
        };
    }
};

const n = 10;
console.log(solution(n))