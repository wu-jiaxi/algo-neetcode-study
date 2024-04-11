function determineWinner(votes) {
  let voteCount = {};

  votes.forEach((vote) => {
    if (voteCount[vote]) {
      voteCount[vote]++;
    } else {
      voteCount[vote] = 1;
    }
  });

  
  

  let winners = [];
  let highestCount = 0;
}

const votes = ["A", "B", "C", "D", "A", "B", "C", "A", "D"];
const winners = determineWinner(votes);
console.log("Winner(s):", winners);
