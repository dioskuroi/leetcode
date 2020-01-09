exports.distance = (obstacleGrid) => {
  if (obstacleGrid[0][0] === 1) return 0
  let recur = (m, n) => {
    if (m === 0 && n === 0) {
      return 1
    }
    if (m === 0) {
      for (let i = 0; i <= n; i++) {
        if (obstacleGrid[0][i] === 1) {
          return 0
        }
      }
      return 1
    }
    if (n === 0) {
      for (let i = 0; i <= m; i++) {
        if (obstacleGrid[i][0] === 1) {
          return 0
        }
      }
      return 1
    }
    if (obstacleGrid[m] && obstacleGrid[m][n] === 0) {
      return recur(m - 1, n) + recur(m, n - 1)
    }
    return 0
  }

  return recur(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
}
