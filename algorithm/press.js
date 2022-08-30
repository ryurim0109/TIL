const solution = (numbers, hand) => {
  let answer = "";
  //키패드 좌표화
  let keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    "*": [4, 1],
    0: [4, 2],
    "#": [4, 3],
  };
  let currentLocationL = [4, 1];
  let currentLocationR = [4, 3];
  numbers.forEach((n) => {
    let numLocation = keypad[n];

    if (numLocation[1] === 1) {
      //왼손이라면,
      currentLocationL = numLocation;
      answer += "L";
    } else if (numLocation[1] === 3) {
      //오른손이라면,
      currentLocationR = numLocation;
      answer += "R";
    } else {
      let distanceL = getDistance(currentLocationL, numLocation);
      let distanceR = getDistance(currentLocationR, numLocation);

      if (distanceL === distanceR) {
        if (hand === "left") {
          currentLocationL = numLocation;
          answer += "L";
        } else {
          currentLocationR = numLocation;
          answer += "R";
        }
      } else if (distanceL < distanceR) {
        currentLocationL = numLocation;
        answer += "L";
      } else {
        currentLocationR = numLocation;
        answer += "R";
      }
    }
  });

  return answer;
};

//거리 구하는 함수
const getDistance = (arr1, arr2) => {
  let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
  return result;
};
const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";
console.log(solution(numbers, hand));
