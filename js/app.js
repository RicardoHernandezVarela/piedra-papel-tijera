/* DOM ELEMENTS */
const playerOptions = document.querySelector('#player-options');
const playerSelection = document.querySelector('#player-selection');
const computerSelection = document.querySelector('#computer-selection');

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
]

/* TURNS */
let playerCanPlay = true;

/* GENERATE MOVE */
const generateMove = (choice) => {
    let move = `
        <span class="sprite ${choice}"></span>
        <h5>${choice}</h5>
    `;
    return move;
}

/* COMPUTER CHOICE*/
const computerChoice = () => {
    selected = Math.floor(Math.random()*3);
    computerMove = gameOptions[selected].choice;

    return computerMove;
}

/* DISPLAY WINNER */
const displayWinner = (winner) => {
    playerSelection.style.display = 'none';
    computerSelection.style.display = 'none';
    gameWinner.style.display = 'block';
    gameWinner.innerText = winner;
}

const displayMove = () => {
    playerSelection.style.display = 'block';
    computerSelection.style.display = 'block';
    gameWinner.style.display = 'none';
}

/* GAME CONDITIONS - check FOR WINNER */
const checkArrayForWinner = (player, computer) => {
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
        setTimeout(() => displayWinner('Ganaste'), 800);
        displayMove();
        playerWins += 1;

        playerScore.innerText = playerWins
    } else if (computer === winningChoice) {
        setTimeout(() => displayWinner('Perdiste'), 800);
        displayMove();
        computerWins += 1;

        computerScore.innerText = computerWins;
    } else {
        setTimeout(() => displayWinner(winningChoice), 800);
        displayMove();
    }
}

/* GAME FLOW */
playerOptions.addEventListener('click', (event) => {

    let playerMove = event.target.id;
    let computerMove;

    /* PLAYER MOVE */
    playerSelection.innerHTML = generateMove(playerMove);
    playerCanPlay = false;

    /* COMPUTER MOVE */
    if(!playerCanPlay && playerMove !== '') {
        computerMove = computerChoice();
        computerSelection.innerHTML = generateMove(computerMove);
    } else {
        computerSelection.innerHTML = "<span></span>";
    }

    /* SELECT WINNER */
    checkArrayForWinner(playerMove, computerMove)
})