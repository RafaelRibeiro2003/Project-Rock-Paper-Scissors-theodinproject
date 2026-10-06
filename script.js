let humanScore = 0;
let computerScore = 0;
let round = 0;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];

    let random = Math.floor(Math.random() * choices.length);

    let computerChoice = choices[random];

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        return "It's a tie!";
    }else if((humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')){
                humanScore++;
                return `You Win! ${humanChoice} beats ${computerChoice}`
            }
    else{
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}`
    }

}


const button_choices = document.querySelectorAll('.choice');

const images = {
    rock: "./images/rock.png",
    paper: "./images/paper.png",
    scissors: "./images/scissor.png"
};

const round_number = document.querySelector('.round-number');
const computer_score_number = document.querySelector('.computer-score-number');
const player_score_number = document.querySelector('.player-score-number');

const result_text = document.querySelector('.result');

const humanChoiceImg = document.querySelector('.human-choice-img');
const computerChoiceImg = document.querySelector('.computer-choice-img');

const choicesResult = document.querySelector('.choices-result');

button_choices.forEach((choice) => {
    choice.addEventListener("click", () => {

        if (round >= 5) {
            return;
        }

        const playerChoice = choice.dataset.choice;
        round++;

        round_number.textContent = round;

        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        choicesResult.classList.add('show');

        computer_score_number.textContent = computerScore;
        player_score_number.textContent = humanScore;
        result_text.textContent = result;

        humanChoiceImg.src = images[playerChoice];
        computerChoiceImg.src = images[computerChoice];
        
        if (round === 5) {
            showFinalResult();
        }
    });
});


const finalResult = document.querySelector('.final_result');

const text_final_result = document.querySelector('.text_final_result');

const finalPlayerScore = document.querySelector('.final-player-score');
const finalComputerScore = document.querySelector('.final-computer-score');

function showFinalResult(){
        finalResult.classList.add('show');

        finalPlayerScore.textContent = humanScore;
        finalComputerScore.textContent = computerScore;

        let text_result_final = "";

        
        if(humanScore > computerScore){
            text_result_final = "Congratulations, you won against the computer!";
        }else if(computerScore > humanScore){
            text_result_final = "Unfortunately you lost against the computer!";
        }else {
            text_result_final = "The game ended in a tie!"
        }

        text_final_result.textContent = text_result_final;

}

const resetButton = document.querySelector('.button_reset');

resetButton.addEventListener("click", () => {
    round = 0;
    humanScore = 0;
    computerScore = 0;

    player_score_number.textContent = 0;
    computer_score_number.textContent = 0;
    round_number.textContent = 0;

    result_text.textContent = "Choose your move!";

    finalPlayerScore.textContent = 0;
    finalComputerScore.textContent = 0;

    finalResult.classList.remove('show');
    choicesResult.classList.remove('show');
});