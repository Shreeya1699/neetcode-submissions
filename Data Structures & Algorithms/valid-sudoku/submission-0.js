class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
        let colSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[j][i] === '.') continue;
            if (colSet.has(board[j][i])) {
                console.log("here in 3");
                return false;
            }
            colSet.add(board[j][i]);
        }

        let rowSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') continue;
            if (rowSet.has(board[i][j])) {
                console.log("here in 2");
                return false;
            }
            rowSet.add(board[i][j]);
        }

        let seen = new Set();
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                let row = Math.floor(i / 3) * 3 + j;
                let col = (i % 3) * 3 + k;
                if (board[row][col] === '.') continue;
                if (seen.has(board[row][col])) {
                    console.log("here in 1");
                    return false;
                }
                seen.add(board[row][col]);
            }
        }


    };

    return true;
    }
}
