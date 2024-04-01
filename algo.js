determineWinner = (votes) => {
  let voteCounts = {};

  votes.forEach((vote) => {
    if (voteCounts[vote]) {
      voteCounts[vote]++;
    } else {
      voteCounts[vote] = 1;
    }
  });

  const votesCountArray = Object.entries().map(([candidate, count]) => ({
    candidate,
    count,
  }));

  votesCountArray.sort((a, b) => b.count - a.count);

  const winners = [];
  let highestVoteCount = 0;

  for (const candidate of votesCountArray) {
    if (candidate.count >= highestVoteCount) {
      highestVoteCount = candidate.count;
      winners.push(candidate.candidate);
    } else {
      break;
    }
  }
  return winners;
};

const votes = ["A", "B", "C", "D", "A", "B", "C", "A", "D"];
const winners = determineWinner(votes);
console.log("Winner(s):", winners);
