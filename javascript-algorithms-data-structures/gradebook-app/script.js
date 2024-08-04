function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
        sum += score;
    }
  
    return sum / scores.length;
}
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score < 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));