const solution = (name, yearning, photo) => {
  let result = [];
  const scoreObj = name.reduce((acc, curr, idx) => {
    acc[curr] = yearning[idx];
    return acc;
  }, new Object());

  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    const image = photo[i];
    for (let j = 0; j < image.length; j++) {
      if (scoreObj[image[j]]) {
        score += scoreObj[image[j]];
      }
    }
    result.push(score);
  }

  return result;
};

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(name, yearning, photo));
