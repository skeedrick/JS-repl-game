let readlineSync = require('readline-sync')

const choices = ["Spend", "Invest", "Pay Bills"]

function startGame() {
console.log("__________________________________________________________________________");
console.log( "Welcome to 'What to do with that money.' what will you do with that money?" );
console.log("__________________________________________________________________________");

    console.log('')
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes','No'], 'Would you like to play?');

    if (wouldLikeToPlay === 0) {
    firstQuestion();
    }else {
    process.exit();
    }
    console.log('')
}
function gameOver() {
    console.log('Would you like to play again?')
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes', 'No']);
    if (wouldLikeToPlay === 0) {
        firstQuestion();
      } else {
        console.log('Thanks for playing, see you again soon');
        process.exit();
}
}
function firstQuestion() {
    console.log( "You have $10,000. What would you like to do with your money?" );
    console.log('')
    console.log("Would you like to Go shopping?, Invest?, or Pay Bills?")
    console.log('')
    console.log("Hint! you still have responsibilities.")
    console.log("")
    console.log("Your choices.")
    console.log ('')
    console.log("Spend: Hit the Mall and level up!")
    console.log("Invest: Secure a few stocks affected by COVID19.")
    console.log("Pay Bills: Cover the bills and wait for more money.")
    console.log("__________________________________________________________________________");

    const questionOne = readlineSync.keyInSelect(choices, 'What did you decide?');

    console.log('')
        if(questionOne === 0){
        console.log('You only have $2,000 left it only covers rent, your lights are out. Game over!')
        gameOver();
    }else if(questionOne === 1){
        console.log('An Investor I see!')
         sidebar1();
    }else if(questionOne === 2){
        console.log('Bills are paid, thats responsible!')
         sidebar2();
    }else{
        process.exit();
    return 
    }

}

function sidebar1() {
        console.log('')
        console.log('Great choice you made $4,000 in returns, after bills you still have $10,000, $4,000 went to savings, you ended the week with $6,000.');
        secondQuestion();
}

 

function sidebar2() {
        console.log('You have $6,000 to do as you will. Great job.');
        secondQuestion()
}

function secondQuestion() { if (sidebar1 === 'An Investor I see') {
  return secondQuestionA();
}
    console.log('')
    console.log('')
    console.log("So, the bills are paid and pay day is next week. What do you want to do?")
    console.log('')
    console.log("Spend: Hit the Mall and level up!")
    console.log("Invest: a risky stock is expected to make a major move bet it all or dont bet at all!")
    console.log("Pay Bills: No bills this week. Treat yourself but dont go crazy.")
    console.log("__________________________________________________________________________");
    const questionTwo = readlineSync.keyInSelect(choices, 'Who should take action?');
    console.log('')

    if(questionTwo === 2){
    console.log('Still making good choices, you only spent $1,000 this week, with your paycheck you now have $15,000 to your name.')
    console.log('Great decisions lead to better outcomes. Apply these quick lessons to life and you will be fine.')
     
    thirdQuestion();
    }else if(questionTwo === 1){
    console.log('that was not worth the risk you lost $10,000, you now have 10,000 with your new paycheck')
    console.log('You are broke!')
     
    gameOver();
    }else if(questionTwo === 0){
    console.log('You went crazy! They know your a boss now, you have 10,000 left.')
    console.log('Back at square one.')
    
    firstQuestion();
    }else{
    process.exit();
    return 
}
}

function thirdQuestion() {
    console.log('')
    console.log('')
    console.log("you have made it this far, it seems like you understand that investing is not where you bet it all, and being responsible is always the way to go.")
    console.log('Now the month is over and you have an extra 15,000. what would you like to do?')
    console.log('')
    console.log("Spend: REALLY level up!")
    console.log("Invest: Transfer your extra money into your stock portfolio it raised 20% for the last 3 years and dont look back.")
    console.log("Pay Bills: Pay your bills, put the rest in savings, and do it all again.")
    console.log("__________________________________________________________________________");
    const questionThree = readlineSync.keyInSelect(choices, 'What will you do?');
    console.log('');

    if(questionThree === 2){
    console.log('You have this under wraps, lets keep the ball rolling');
    firstQuestion();
        }else if(questionThree === 1){
    console.log('You have set yourself up for the future, lets keep the ball rolling.');
    firstQuestion();
    }else if(questionThree === 0){
    console.log('you relly messed up! you went broke over a Bentley.');
    console.log('Learned your lesson? Wanna try again?');
    gameOver();
    }else{
    process.exit();
    return 
}
}

startGame()