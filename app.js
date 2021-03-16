let currentPlayer = 'X';
let turns = 0;
let board = ['', '', '', '', '', '', '', '', ''];

for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).addEventListener('click', function(e) {
        if (e.target.innerText === '') {
            const id = parseInt(e.target.id);
            e.target.innerText = currentPlayer;
            board[id] = currentPlayer;
            turns++;
            
            if (checkWin(currentPlayer, id)) {
                setTimeout(alert(`${currentPlayer} win`), 60000);
                clearBoard();
            } else {
                if (turns < 9) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                } else {
                    alert('Draw');
                    clearBoard();
                }
            }
            console.log(board, turns)
        }
    });
}

function checkWin (currentPlayer, id) {
    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    const possibleCombination = winCombination.filter(combi => combi.includes(id));
    return possibleCombination.some(combi => combi.every(index => board[index] === currentPlayer));
}

function clearBoard () {
    currentPlayer = 'X'
    turns = 0;
    board = board.map(function () { return ''; });
    for (let i = 0; i < 9; i++) { document.getElementById(`${i}`).innerText = ''; }
}

