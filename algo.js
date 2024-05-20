function determineWinner(votes) {
  let voteCount = {};

  votes.forEach((vote) => {});
}

const votes = ["A", "B", "C", "D", "A", "B", "C", "A", "D"];
const winners = determineWinner(votes);
console.log("Winner(s):", winners);

// 1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function (candies, extraCandies) {
  let greatestCandy = 0;
  let newArray = [];
  let largestNum = 0;
  let trueFalseArray = [];

  for (let i = 0; i < candies.length; i++) {
    let sum = candies[i] + extraCandies;
    newArray.push(sum);
    largestNum = Math.max(...newArray);

    if (newArray[i] === largestNum) {
      trueFalseArray.push(false);
    } else if (newArray[i] < largestNum) {
      trueFalseArray.push(true);
    } else {
      trueFalseArray.push(false);
    }
  }

  return trueFalseArray;
};

var kidsWithCandies = function (candies, extraCandies) {
  let greatestCandy = 0;
  let newArray = [];
  let largestNum = 0;
  let trueFalseArray = [];

  for (let i = 0; i < candies.length; i++) {
    let sum = candies[i] + extraCandies;
    newArray.push(sum);
    largestNum = Math.max(...newArray);

    if (newArray[i] === largestNum) {
      trueFalseArray.push(false);
    } else if (newArray[i] < largestNum) {
      trueFalseArray.push(true);
    } else {
      trueFalseArray.push(false);
    }
  }

  return trueFalseArray;
};
