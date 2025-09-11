function maxPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  dp[0][0] = grid[0][0];

  // hàng đầu tiên (chỉ đi từ trái qua)
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // cột đầu tiên (chỉ đi từ trên xuống)
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // các ô còn lại
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}

const grid = [
  [1, 2, 5, 5],
  [5, 3, 10, 5],
  [3, 5, 3, 1],
  [2, 3, 4, 2],
  [0, 0, 5, 0],
];

console.log(maxPathSum(grid));
