class Solution {
    orangesRotting(grid) {
        if(grid === null || grid.length === 0) return -1;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        
        let minutes = 0;
        let freshCount = 0;
        const queue = [];

        for(let r = 0; r < ROWS; r++) {
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 2) {
                    queue.push([r, c]);
                } else if(grid[r][c] === 1){
                    freshCount += 1;
                }
            }
        }

        if(freshCount === 0) return 0;

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while(queue.length > 0 && freshCount > 0) {
          let qLength = queue.length;

          for(let i = 0; i < qLength; i++ ) {
            const [r, c] = queue.shift();

            for(const [dr, dc] of directions) {
               let newRow = r + dr;
               let newCol = c + dc;

                if(newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS || grid[newRow][newCol] !== 1){
                    continue;
                }

                grid[newRow][newCol] = 2;
                freshCount -= 1;
                queue.push([newRow, newCol]);
            }
          }
          minutes += 1;
        }
        return freshCount === 0 ? minutes : -1;
    }
}
