var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What's Your name? ");

console.log("Welcome " + userName + " to DO YOU KNOW shubham ");
console.log("Type the appropriate option i.e a or b or c");
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
{
  console.log("You Are Right..!");
  score = score + 1;
}
else
{
  console.log("You Are Wrong..!");
}
console.log("Current score : ", score)
console.log("-------------------");
}
var questions =
[
    {
        question:"1. Whats shubham's favourite color ? a. Black b. White c. Blue ",
        answer : "c"
      },
      {
        question : "2. What's shubham's favourite food ?  a. Sandwich b. Panner c. Noodels ",
        answer : "b"
      },
      {
        question : "3. Which type of game shubham's play a lot ? a. Pubg b. Freefire c. Card Games ",
        answer : "a"
      },
      {
        question : "4. Which is shubham's favourite subject ? a. physics b. Computer c. Sanskrit ",
        answer : "b"
      },
      {
        question : "5. shubham's favourite hero would be ? a. Superman b. IronMan c. Spiderman ",
        answer : "b"
      },
     
      {
        question : "6. Which would shubham prefer to do among this ?, a. Coding b. Work-Out c. Gaming ",
        answer : "a"
      },
      {
        question : "7. Do shubham believe in god ?, a. Yes b. No c. Depend's on the situation ",
        answer : "a"
      },
      {
        question : "8. Among this movie's which movie does shubham hate the most ? a. bharat b.baagi c. Love aaj kal-2 ",
        answer : "a"
      }
     
    ];
    for (var i = 0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("There You go , You have scored : ", score);
console.log("Send a screen-shot of your score");