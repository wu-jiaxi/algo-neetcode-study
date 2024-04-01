function determineWinner(votes) {
  let voteCount = {};

  votes.forEach((vote) => {
    if (voteCount[vote]) {
      voteCount[vote]++;
    } else {
      voteCount[vote] = 1;
    }
  });

  let voteCountsArray = Object.entries(voteCount).map(([candidate, count]) => ({
    candidate,
    count,
  }));

  voteCountsArray.sort((a, b) => b.count - a.count);

  const winners = [];
  let highestVoteCount = 0;

  for (const candidate of voteCountsArray) {
    if (candidate.count >= highestVoteCount) {
      highestVoteCount = candidate.count;
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
