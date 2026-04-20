class Solution {
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        let row = grid.length;
        let col = grid[0].length;

        let visited = new Set();
        let islands = 0;

        function bfs(r, c) {
            let queue = [];
            queue.push([r, c]);
            visited.add([r, c].toString());

            let directions = [
                [0, 1],
                [0, -1],
                [1, 0],
                [-1, 0],
            ];

            while (queue.length > 0) {
                let [curR, curC] = queue.shift();

                for (let [dr, dc] of directions) {
                    let newRow = curR + dr;
                    let newCol = curC + dc;

                    if (
                        newRow >= 0 &&
                        newRow < row &&
                        newCol >= 0 &&
                        newCol < col &&
                        grid[newRow][newCol] === "1" &&
                        !visited.has([newRow, newCol].toString())
                    ) {
                        queue.push([newRow, newCol]);
                        visited.add([newRow, newCol].toString());
                    }
                }
            }
        }

        for (let r = 0; r < row; r++) {
            for (let c = 0; c < col; c++) {
                if (
                    grid[r][c] === "1" &&
                    !visited.has([r, c].toString())
                ) {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}