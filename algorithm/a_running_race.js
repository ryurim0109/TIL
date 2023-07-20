const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

const solution = (players, callings) => {
  let playersOrderMap = {};

  players.forEach((el, i) => {
    playersOrderMap[el] = i;
  });

  callings.forEach((el) => {
    const curPlayerIdx = playersOrderMap[el];
    // 앞선수
    const nextPlayer = players[curPlayerIdx - 1];
    // 자리교체
    players[curPlayerIdx - 1] = el;
    players[curPlayerIdx] = nextPlayer;

    // 객체 인덱스 순서도 변경
    playersOrderMap[el] -= 1;
    playersOrderMap[nextPlayer] += 1;
  });
  return players;
};

console.log(solution(players, callings));
