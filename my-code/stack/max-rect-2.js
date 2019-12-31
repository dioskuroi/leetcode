// * 84. 柱状图中最大的矩形

// * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
// *求在该柱状图中，能够勾勒出来的矩形的最大面积。

// * 示例:
// * 输入: [2,1,5,6,2,3]
// * 输出: 10

/**
 * @param {number[]} heights
 * @return {number}
 */
exports.maxRect2 = (heights) => {
  if (!heights.length) return 0
  if (heights.length === 1) return heights[0]
  if ([...new Set(heights)].length === 1) return heights[0] * heights.length
  let result = 0
  let recur = (arr) => {
    if (!arr.length) return
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    if (min !== 0) {
      result = Math.max(result, min * arr.length)
    }
    if (min === arr[0]) return

    arr.pop()
    recur(arr)
  }

  heights.forEach((item, index) => {
    recur(heights.slice(index))
  })

  return result
}

/**
 * @param {number[]} heights
 * @return {number}
 */
exports.bestMaxRect2 = (heights) => {
  const len = heights.length
  const leftI = new Array(len)
  const rightI = new Array(len)
  leftI[0] = -1
  rightI[len - 1] = len
  let temp
  for (let i = 1; i < len; i++) {
    temp = i - 1
    while (temp >= 0 && heights[temp] >= heights[i]) {
      temp = leftI[temp]
    }
    leftI[i] = temp
  }
  for (let i = len - 2; i >= 0; i--) {
    temp = i + 1
    while (temp < len && heights[temp] >= heights[i]) {
      temp = rightI[temp]
    }
    rightI[i] = temp
  }
  let max = 0
  for (let i = 0; i < len; i++) {
    max = Math.max(max, (rightI[i] - leftI[i] - 1) * heights[i])
  }
  return max
}
