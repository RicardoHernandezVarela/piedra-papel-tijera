const playerOptions = document.querySelector('#player-options');
const playerSelection = document.querySelector('#player-selection');

playerOptions.addEventListener('click', (event) => {
    let playerChoice = event.target.id;
    
    let move = `
        <span class="sprite ${playerChoice}"></span>
        <h5>${playerChoice}</h5>
    `;

    playerSelection.innerHTML = move;
})