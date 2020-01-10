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

// * 思路2: 我们知道，当前点的路径数等于左边加上上边格子的路径数
// *       也就是 result[i][j] = result[i-1][j] + result[i][j-1]
// *       所以也就是说，我们只要知道当前行的前一个元素和上一行的当前元素的路径数就可以了
// *       那也就是 result 记录当前行的数据， prev 记录上一行的数据，result[i] = result[i-1] + prev[i]
// *       进一步简化，prev[i] 其实就等于 result[i] 也就是当前元素的值，
// *       所以最后得出 result[i] = result[i-1] + result[i] ====> result[i] += result[i-1]
// *       该思想主要是扁平化了整个结果集，让结果集只包含一个数组，重复利用先前存储数据的空间。
// *       所以最后空间复杂度变为了 o(n) 时间复杂度为
/**
 * @param {number[][]} obstacleGrid
 */
exports.bestDistance = (obstacleGrid) => {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  // * 结果集的长度只需跟每一行数组的长度即可
  const result = new Array(n).fill(0)
  // * 默认初始第一个结果为1，如果第一个起始点就为 1，那么会在循环中将 result[0] 更新为0
  result[0] = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // * 如果碰到当前路径为 1，则将当前索引对应的结果集中的元素设置为0
      if (obstacleGrid[i][j] === 1) {
        result[j] = 0
        // * 否则，如果不是每一行的第一个元素，则将当前元素的值 叠加 前一个元素的值
        // * 也就是 当前元素 =  当前行前一个元素 + 上一行当前元素
      } else if (j > 0) {
        result[j] += result[j - 1]
      }
    }
  }
  return result[n - 1]
}
