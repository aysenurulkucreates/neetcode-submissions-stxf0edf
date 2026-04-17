class Solution {
    pacificAtlantic(heights) {
        if(!heights || heights.length === 0) return [];

        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pacVisited = new Set();
        const atlVisited = new Set();

        const dfs = (r, c, visited, prevHeight) => {
            if(r < 0 || c < 0 || r >= ROWS || c >= COLS || visited.has(`${r}, ${c}`) || heights[r][c] < prevHeight){
                return;
            }

            visited.add(`${r}, ${c}`);

            dfs(r + 1, c, visited, heights[r][c]);
            dfs(r - 1, c, visited, heights[r][c]);
            dfs(r, c + 1, visited, heights[r][c]);
            dfs(r, c - 1, visited, heights[r][c]);
        }

        for(let r = 0; r < ROWS; r++){
            dfs(r, 0, pacVisited, heights[r][0]);
            dfs(r, COLS - 1, atlVisited, heights[r][COLS - 1]);
        }

        for(let c = 0; c < COLS; c++){
            dfs(0, c, pacVisited, heights[0][c]);
            dfs(ROWS - 1, c, atlVisited, heights[ROWS - 1][c]);
        }

        const result = [];
        for(let r = 0; r < ROWS; r++){
            for(let c = 0; c < COLS; c++){
                if(pacVisited.has(`${r}, ${c}`) && atlVisited.has(`${r}, ${c}`)) {
                    result.push([r, c]);
                }
            }
        }
       return result;
    }
}
