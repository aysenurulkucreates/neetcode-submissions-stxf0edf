class Solution {
    islandsAndTreasure(grid) {
        if (grid === null || grid.length === 0) return;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647; 
        
        const queue = []; 

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) { 
                    queue.push([r, c]);
                }
            }
        }

        const directions = [ [-1, 0], [1, 0], [0, 1], [0, -1] ];

        while (queue.length > 0) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                let newRow = r + dr;
                let newCol = c + dc;

                if (newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS || grid[newRow][newCol] !== INF) {
                    continue; 
                }

                grid[newRow][newCol] = grid[r][c] + 1;

                queue.push([newRow, newCol]);
            }
        }
    }
}
