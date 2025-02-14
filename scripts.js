let winnerIsKnown = false;

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

function generateGameBoard() {
	let playerTurn = player1.name;
	
	const turnContainer = document.querySelector('.player-turn');
	turnContainer.textContent = `Player ${player1.symbol}'s turn`
	
	const gameContainer = document.querySelector('.game-container');
	gameContainer.innerHTML = '';
	
	for (let i = 0; i < 9; i++) {
		const containerItem = document.createElement('div');
		containerItem.classList.add('container-item');
		gameContainer.appendChild(containerItem);
		
		containerItem.addEventListener('click', () => {
			if (containerItem.textContent != '' || winnerIsKnown === true) {
				return;
			}
			
			if (playerTurn === 'player1') {
				turnContainer.textContent = `Player ${player2.symbol}'s turn`
				containerItem.textContent = player1.symbol;
				gameBoard[i] = player1.symbol;
				playerTurn = 'player2';
			} else {
				turnContainer.textContent = `Player ${player1.symbol}'s turn`
				containerItem.textContent = player2.symbol;
				gameBoard[i] = player2.symbol;
				playerTurn = 'player1';
			}

			const winner = checkWinner();
			
			if (winner != undefined) {
				turnContainer.textContent = `Player ${winner} is a winner!`;
			}
		})
	}

	const restartButton = document.querySelector('.restart-button');

	restartButton.addEventListener('click', () => {
		location.reload();
	})
};

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
			winnerIsKnown = true;
			return gameBoard[a];
		}
	}
};

generateGameBoard();