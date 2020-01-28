/* DOM ELEMENTS */
const playerOptions = document.querySelector('#player-options');
const playerSelection = document.querySelector('#player-selection');
const computerSelection = document.querySelector('#computer-selection');

const selectMessage = document.querySelector('#select-message');
const playerSection = document.querySelector('.player-choice');

const gameWinner = document.querySelector('#winner');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

let playerWins = 0;
let computerWins = 0;

const PAPEL = "papel";
const PIEDRA = "piedra";
const TIJERAS = "tijeras";

/* GAME OPTIONS */
const gameOptions = [
    {
        choice: PAPEL
    },
    {
        choice: PIEDRA
    },
    {
        choice: TIJERAS
    }
];

/* GENERATE MOVE */
const generateMove = (choice) => {
    playerSelection.style.display = 'block';
    computerSelection.style.display = 'block';

    let move = `
        <span class="sprite ${choice}"></span>
        <h5>${choice}</h5>
    `;
    return move;
};

/* COMPUTER CHOICE*/
const computerChoice = () => {
    selected = Math.floor(Math.random()*3);
    computerMove = gameOptions[selected].choice;

    return computerMove;
};

/* DISPLAY WINNER */
const displayWinner = (winner, playerPoints, computerPoints) => {

    setTimeout(() => {
        playerSection.style.borderRight = "1px solid #FFF";
        playerSelection.style.display = 'none';
        computerSelection.style.display = 'none';
        
        gameWinner.style.display = 'block';
        gameWinner.innerText = winner;

        playerScore.innerText = playerPoints;
        computerScore.innerText = computerPoints;

    }, 1000);
    
};

const resetBoard = () => {
    setTimeout(() => {
        gameWinner.style.display = 'none';
        playerSection.style.borderRight = "1px solid #000";
        selectMessage.style.color = '#000';
    }, 2000);
};

/* GAME CONDITIONS - check FOR WINNER */
const checkForWinner = (player, computer) => {

    let checkArray = [player, computer];
    let winningChoice = '';

    if (checkArray.indexOf(PAPEL) !== -1 && checkArray.indexOf(PIEDRA) !== -1) {
        winningChoice = PAPEL;
    } else if (checkArray.indexOf(PAPEL) !== -1 && checkArray.indexOf(TIJERAS) !== -1) {
        winningChoice = TIJERAS;
    } else if (checkArray.indexOf(PIEDRA) !== -1 && checkArray.indexOf(TIJERAS) !== -1) {
        winningChoice = PIEDRA;
    } else {
        winningChoice = 'Empate';
    }

    /* CHOOSE WINNER */
    if (player === winningChoice) {
        playerWins += 1;
        displayWinner('Ganaste', playerWins, computerWins);

    } else if (computer === winningChoice) {
        computerWins += 1;
        displayWinner('Perdiste', playerWins, computerWins);

    } else {
        displayWinner(winningChoice, playerWins, computerWins);
    }

    resetBoard();
};

/* GAME FLOW */
playerOptions.addEventListener('click', (event) => {

    if (event.target.tagName === 'SPAN') {

        selectMessage.style.color = '#FFF';

        let playerMove = event.target.id;
        let computerMove;

        /* PLAYER MOVE */
        playerSelection.innerHTML = generateMove(playerMove);

        /* COMPUTER MOVE */
        computerMove = computerChoice();
        computerSelection.innerHTML = generateMove(computerMove);

        /* SELECT WINNER */
        checkForWinner(playerMove, computerMove);
    }
});
