module.exports = function solveSudoku(matrix) {

  function serachZeroInMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                return {i: i, j: j};
            }
        }
    }
}

function variationSolutions(matrix, i, j, x) {
    if (findInRow(matrix, i, x) === x) {
        return false;
    } else if (findInColumn(matrix, j, x) === x) {
        return false;
    } else return findInBox(matrix, i, j, x) !== x;
}

function findInRow(matrix, i, x) {
    for (let j of matrix[i]) {
        if (j === x) {
            return x;
        }
    }
}

function findInColumn(matrix, j, x) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j] === x) return x;
    }
}

function findInBox(matrix, i, j, findNumber) {
    let row = (parseInt(i/3))*3;
    let column = (parseInt(j/3))*3;
    for (let x = row; x < row + 3; x++) {
        for (let y = column; y < column + 3; y++) {
            if (matrix[x][y] === findNumber) {
                return findNumber;
            }
        }
    }
}

function findSudokuSolution(matrix, i, j) {
    let needNumberInStack = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let position = serachZeroInMatrix(matrix);
    if (position == null) {
        return true;
    } else {
        i = position.i;
        j = position.j;
    }
    for (let number of needNumberInStack) {
        if (variationSolutions(matrix, i, j, number)) {
            matrix[i][j] = number;
            if (findSudokuSolution(matrix, i, j)) {
                return true;
            } else {
                matrix[i][j] = 0;
            }
        }
    }
    return false;
}
  if (findSudokuSolution(matrix)){
      return matrix;
}
};
