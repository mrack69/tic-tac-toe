class TicTacToe {
    constructor() {
        this.currentPlayer = 'x';
        this.winner = null;
        this.result = null;
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null && this.result === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x' ? 'o' : 'x');
            this.checkMatrix();
            console.log(this.matrix, 'RESULT:' + this.result);
            return true;
        }
        return false
    }

    isFinished() {
        if(this.result) return true;
        else return false;
    }

    getWinner() {
        return this.winner;
    }

    noMoreTurns() {
        for(let row of this.matrix) {
            if(row.includes(null)) return false;
        }
        return true;
    }

    isDraw() {
        return  this.result === 'draw';
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }

    checkMatrix() {
        this.winningCombos.forEach(combo => {
            const lineMatrix = this.matrix.flat();
            if(combo.every(el => lineMatrix[el] === 'x')) {
                this.winner = 'x';
                this.result = 'win';
            }
            else if(combo.every(el => lineMatrix[el] === 'o')) {
                this.winner = 'o';
                this.result = 'win';
            }
        })
        if(this.result === null && this.noMoreTurns()) this.result = 'draw';
    }
}

module.exports = TicTacToe;
