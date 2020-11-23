const chalk = require ('chalk')
var score =0;
var readlineSync = require('readline-sync')
var name = readlineSync.question("What's your name ? ")

 console.log(chalk.red(" ***HELLO " + name + ",WELCOME TO DO YOU KNOW ME QUIZ *** "))
console.log(chalk.yellow("First letter should be a capital letter always eg: Hello"))

function play(question,answer)
{ //Function defined
  var userAns = readlineSync.question(question)
  if(userAns === answer)
  {
    console.log(chalk.green("PERFECT!! IT'S THE RIGHT ANSWER.."))
  score = score + 1
  }
  else
   {
     console.log(chalk.red("SORRY! BETTER LUCK NEXT TIME .."))
     score = score - 1
  }

console.log("YOUR CURRENT SCORE IS " + score)
console.log(".................................")
}
 //Array
var nextQuest = [
  {
  question :  " What's my fav hobby ? " ,
  answer   :  "Reading" //Key :Value
  } ,

  {
    question :  " What is my fav Dish ? ",
    answer   :  "Idli"
  } ,

  {
    question :  " My best friend ? ",
    answer   :  "Rajas"
  } ,

  {
    question :  " My Fav pet ? ",
    answer   :  "Cat"
  } ,

  {
    question :  " What is my fav colour ? ",
    answer   :  "Black"
  }]

for (var i = 0 ; i < nextQuest.length ; i++) //for loop
{
  var curQuest = nextQuest[i];
  play(curQuest.question,curQuest.answer) //function called
}

console.log("YOUR FINAL SCORE IS " + score)

