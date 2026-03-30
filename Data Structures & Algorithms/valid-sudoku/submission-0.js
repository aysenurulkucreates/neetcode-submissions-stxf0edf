class Solution {
    isValidSudoku(board) {
        const set = new Set();

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                let number = board[i][j];

                if(number === '.') continue;

                let lineReport = `digit ${number} in line ${i}`;
                let columnReport = `digit ${number} in column ${j}`;
                let boxReport = `digit ${number} in box ${Math.floor(i / 3)}-${Math.floor(j / 3)}`;

                if (set.has(lineReport) || set.has(columnReport) || set.has(boxReport)) return false;

                set.add(lineReport);
                set.add(columnReport);
                set.add(boxReport);
            }

        }
        return true;
    }
}
