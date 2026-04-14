class Solution {
    exist(board, word) {
        const ROWS = board.length;
        const COL = board[0].length;

        const dfs = (r, c, index) => {
            if(index === word.length) return true;

            if(r < 0 || c < 0 || r >= ROWS || c >= COL || board[r][c] !== word[index]) return false;

            let temp = board[r][c];
            board[r][c] = '#';

            const found = dfs(r - 1, c, index + 1) || dfs(r + 1, c, index + 1) || dfs(r, c - 1, index + 1) || dfs(r, c + 1, index + 1);

            if(found === true) return true;

            board[r][c] = temp;

            return found;
        }
        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COL; c++){
                if(dfs(r, c, 0)) return true;
            }
        }
        return false;
    }
}
