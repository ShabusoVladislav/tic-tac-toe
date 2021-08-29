class TicTacToe {
    currentPlayerSymbol = 'x';
    field = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = this.currentPlayerSymbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        let testField = this.field.slice();
        testField = testField.flat();
        if ((testField[0] === testField[1] && testField[0] === testField[2] && testField[0] !== null) || 
            (testField[3] === testField[4] && testField[3] === testField[5] && testField[3] !== null) ||
            (testField[6] === testField[7] && testField[6] === testField[8] && testField[6] !== null) ||
            (testField[0] === testField[3] && testField[0] === testField[6] && testField[0] !== null) ||
            (testField[1] === testField[4] && testField[1] === testField[7] && testField[1] !== null) ||
            (testField[2] === testField[5] && testField[2] === testField[8] && testField[2] !== null) ||
            (testField[0] === testField[4] && testField[0] === testField[8] && testField[0] !== null) ||
            (testField[2] === testField[4] && testField[2] === testField[6] && testField[2] !== null)) return true;  //если есть победитель
        if (testField.includes(null)) return false;     
        return true;    //если нет ходов
    }

    getWinner() {
        let testField = this.field.slice();
        testField = testField.flat();
        if (testField[0] === testField[1] && testField[0] === testField[2]) return testField[0];
        else if (testField[3] === testField[4] && testField[3] === testField[5]) return testField[3];
        else if (testField[6] === testField[7] && testField[6] === testField[8]) return testField[6];
        else if (testField[0] === testField[3] && testField[0] === testField[6]) return testField[0];
        else if (testField[1] === testField[4] && testField[1] === testField[7]) return testField[1];
        else if (testField[2] === testField[5] && testField[2] === testField[8]) return testField[2];
        else if (testField[0] === testField[4] && testField[0] === testField[8]) return testField[0];
        else if (testField[2] === testField[4] && testField[2] === testField[6]) return testField[2];
        return null; 
    }

    noMoreTurns() {
        if (this.field.flat().includes(null)) return false;
        return true;
    }

    isDraw() {
        let testField = this.field.slice();
        testField = testField.flat();
        if (this.field.flat().includes(null)) return false;     //если игра не закончена
        if ((testField[0] === testField[1] && testField[0] === testField[2]) ||
            (testField[3] === testField[4] && testField[3] === testField[5]) ||
            (testField[6] === testField[7] && testField[6] === testField[8]) ||
            (testField[0] === testField[3] && testField[0] === testField[6]) ||
            (testField[1] === testField[4] && testField[1] === testField[7]) ||
            (testField[2] === testField[5] && testField[2] === testField[8]) ||
            (testField[0] === testField[4] && testField[0] === testField[8]) ||
            (testField[2] === testField[4] && testField[2] === testField[6])) return false;     //если есть победитель
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
