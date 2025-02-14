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

let playerTurn = player1.name;

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
				gameBoard[i] = player1.symbol;
				playerTurn = 'player2';
				console.log(gameBoard);
			} else {
				containerItem.textContent = player2.symbol;
				gameBoard[i] = player2.symbol;
				playerTurn = 'player1';
				console.log(gameBoard);
			}

			checkWinner();
			
		})
	}
}

function checkWinner() {
	const winningConditions = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]

	for (let i = 0; i < winningConditions.length; i++) {
		let [a,b,c] = winningConditions[i];

		if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
			console.log('Winner is: ', gameBoard[a])
			return gameBoard[a];
		}
	}
}

generateGameBoard();