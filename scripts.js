const gameContainer = document.querySelector('.game-container');

let gameBoard = [
	[],[],[],
	[],[],[],
	[],[],[]
];

const player1 = {
	name: 'player1',
	symbol: 'X'
};

const player2 = {
	name: 'player2',
	symbol: 'O'
};

let playerTurn = 'player1';

function generateGameBoard() {
	gameContainer.innerHTML = '';

	for (let i = 0; i < 9; i++) {
		const containerItem = document.createElement('div');
		containerItem.classList.add('container-item');
		gameContainer.appendChild(containerItem);

		containerItem.addEventListener('click', () => {
			if (containerItem.textContent != '') {
				return;
			}
			
			if (playerTurn === 'player1') {
				containerItem.textContent = player1.symbol;
				playerTurn = 'player2'
			} else {
				containerItem.textContent = player2.symbol;
				playerTurn = 'player1';
			}
		})
	}
}

generateGameBoard();