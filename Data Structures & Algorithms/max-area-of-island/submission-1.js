class Solution {
    maxAreaOfIsland(grid) {
        if(grid === null || grid.length === 0) return 0;

        let ROWS = grid.length;
        let COLS = grid[0].length;
        let maxArea = 0;

        const dfs = (r,c) => {
            const edges = r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0;
            if(edges) return 0;

            grid[r][c] = 0;

            return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === 1) {
                    let currentArea = dfs(r, c);
                    maxArea = Math.max(currentArea, maxArea);
                }
            }
        }
        return maxArea;
    }
}
