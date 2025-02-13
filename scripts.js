const gameContainer = document.querySelector('.game-container');

let gameBoard = [
	[],[],[],
	[],[],[],
	[],[],[]
];

function generateGameBoard() {
	gameContainer.innerHTML = '';

	for (let i = 0; i < 9; i++) {
		const containerItem = document.createElement('div');
		containerItem.classList.add('container-item');
		gameContainer.appendChild(containerItem);
	}
}

generateGameBoard();