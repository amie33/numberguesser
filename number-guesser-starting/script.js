/*
This is where my code starts, all the code in script.js is code i have written for this project
Amie Jensen 4/15/2020
*/

//initalize humanscore and computer score at 1 to start off, current round always starts at 1 
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//this function is called at the begining of each round and will return a random integer bewtween 0 and 9 
function generateTarget()
{
    return Math.floor(Math.random()*10);
};

/*
this function will be called to determine which guess is closest to the target number, takes in 3 parameters
the humans guess, the computers guess, and lastly the target number we are trying to guess 
*/
function compareGuesses(humanGuess, puterGuess, targetGuess)
{
    //figure out the difference between the humanGuess and targetGuess, puterGuess and targetGuess and if it's a tie 
    if(Math.abs(humanGuess - targetGuess) < Math.abs(puterGuess - targetGuess))
    {
        return true; 
    }else if(Math.abs(puterGuess - targetGuess) < Math.abs(humanGuess - targetGuess)){
        return false;
    }else{
        return true; //it was a tie I win
    }
};

/* 
This function updates the winners score every round, contains one parameter
*/
const updateScore = winner => 
{
    if(winner === 'human')
    {
        humanScore ++;
    }else if(winner === 'computer'){
        computerScore ++;
    }
};

//This function has no parameters and just increments the round by 1 after each game 
const advanceRound = () => currentRoundNumber ++; 