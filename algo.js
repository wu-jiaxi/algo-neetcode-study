function determineWinner(votes) {
  let voteCount = {};

  votes.forEach((vote) => {
    if (voteCount[vote]) {
      voteCount[vote]++;
    } else {
      voteCount[vote] = 1;
    }
  });

  const voteCountArray = Object.entries(voteCount).map(
    ([candidate, count]) => ({ candidate, count })
  );

  voteCountArray.sort((a, b) => b.count - a.count);

  let winners = [];
  let highestCount = 0;

  for (const candidate of voteCountArray) {
    if (candidate.count >= highestCount) {
      highestCount = candidate.count;
      winners.push(candidate.candidate);
    } else {
      break;
    }
  }
  return winners;
}

const votes = ["A", "B", "C", "D", "A", "B", "C", "A", "D"];
const winners = determineWinner(votes);
console.log("Winner(s):", winners);
