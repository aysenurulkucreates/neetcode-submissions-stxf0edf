class Solution {
    numIslands(grid) {
        if(grid === null || grid.length === 0) return 0;

        let islandCount = 0;
        let ROWS = grid.length;
        let COLS = grid[0].length;

        const dfs = (r, c) => {
            const edges = r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0';
            if(edges) return;

            grid[r][c] = '0';

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);


        }

        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(grid[r][c] === '1'){
                    islandCount += 1;
                    dfs(r, c);
                }
            }
        }
       return islandCount; 
    }
}
