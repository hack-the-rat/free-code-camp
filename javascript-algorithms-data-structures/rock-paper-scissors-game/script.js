function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(options.length * Math.random());
    return options[randomIndex];
}
console.log(getRandomComputerResult());