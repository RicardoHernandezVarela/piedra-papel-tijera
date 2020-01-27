/* DOM ELEMENTS */
const playerOptions = document.querySelector('#player-options');
const playerSelection = document.querySelector('#player-selection');
const computerSelection = document.querySelector('#computer-selection');

/* GAME OPTIONS */
const gameOptions = [
    {
        choice: "papel"
    },
    {
        choice: "piedra"
    },
    {
        choice: "tijeras"
    }
]

/* TURNS */
let playerCanPlay = true;

/* GAME CONDITIONS */


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
    computerSelection.innerHTML = generateMove(computerMove);
}


/* USER CHOICE */
playerOptions.addEventListener('click', (event) => {
    let playerChoice = event.target.id;
    
    /* PLAYER MOVE */
    playerSelection.innerHTML = generateMove(playerChoice);
    playerCanPlay = false;

    /* COMPUTER MOVE */
    if(!playerCanPlay) {
        computerChoice();
    }
})