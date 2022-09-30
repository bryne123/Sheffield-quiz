// create function that shows panel after clicking "let's get started"

function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("q1").style.display = "inline-block";
}

function nextQuestion() {
  document.getElementById("q1").style.display = "none";
  document.getElementById("q2").style.display = "inline-block";
}
function nextQuestion2() {
  document.getElementById("q2").style.display = "none";
  document.getElementById("q3").style.display = "inline-block";
}
function nextQuestion3() {
  document.getElementById("q3").style.display = "none";
  document.getElementById("q4").style.display = "inline-block";
}
function nextQuestion4() {
  document.getElementById("q4").style.display = "none";
  document.getElementById("q5").style.display = "inline-block";
}
function nextQuestion5() {
  document.getElementById("q5").style.display = "none";
  document.getElementById("q6").style.display = "inline-block";
}
function nextQuestion6() {
  document.getElementById("q6").style.display = "none";
  document.getElementById("q7").style.display = "inline-block";
}
function nextQuestion7() {
  document.getElementById("q7").style.display = "none";
  document.getElementById("q8").style.display = "inline-block";
}
function nextQuestion8() {
  document.getElementById("q8").style.display = "none";
  document.getElementById("q9").style.display = "inline-block";
}
function nextQuestion9() {
  document.getElementById("q9").style.display = "none";
  document.getElementById("q10").style.display = "inline-block";
}
function nextQuestion10() {
  document.getElementById("q10").style.display = "none";
  document.getElementById("Score").style.display = "inline-block";
}
// create function that counts how many correct answers are clickeed, and displays a message according to score.
let score = 0;
function question1() {
  scoreq1 = score + 1;
  console.log(scoreq1);
}
function question2() {
  scoreq2 = scoreq1 + 1;
  console.log(scoreq2);
}
function question3() {
  scoreq3 = scoreq2 + 1;
  console.log(scoreq3);
}
function question4() {
  scoreq4 = scoreq3 + 1;
  console.log(scoreq14);
}
function question5() {
  scoreq5 = scoreq4 + 1;
  console.log(scoreq5);
}
function question6() {
  scoreq6 = scoreq5 + 1;
  console.log(scoreq6);
}
function question7() {
  scoreq7 = scoreq6 + 1;
  console.log(scoreq7);
}
function question8() {
  scoreq8 = scoreq7 + 1;
  console.log(scoreq8);
}
function question9() {
  scoreq9 = scoreq8 + 1;
  console.log(scoreq1);
}
function total() {
  total = scoreq9 + 1;
  console.log(scoreq1);
}
function showScore() {
  alert("You scored [total] ");
}
