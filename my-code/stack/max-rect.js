// * 85. 最大矩形

// * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

// * 示例:
// * 输入:
// * [
// *   ["1","0","1","0","0"],
// *   ["1","0","1","1","1"],
// *   ["1","1","1","1","1"],
// *   ["1","0","0","1","0"]
// * ]
// * 输出: 6

// * 思路1: 横向合并，把每一行连着的 1 进行合并，只记录开始的 index 和结束的 index
// * 然后循环遍历，利用栈的思想，每次弹出最上两层的数据，进行平方计算(n * (end - start + 1))，然后合并两项数据，取两项数据的最小区间（相交区间），然后塞回栈中，用作下一次计算
// * 其中每次循环 深度 n 都会 ++，直到上一次循环后没有得出相交区间，则重制 深度 n
// * 由于每次计算的相交区间都是依据上一次的结果，所以矩阵中的每一行都要独立进行一次递归运算，性能消耗很大
exports.maxRect = (matrix) => {
  let arr
  let str
  let reg = /1{1,}/g
  // * 将矩阵转换中的每一行转换为 index 区间表示
  let matrixArr = matrix.map(item => {
    arr = []
    str = item.join('')
    let r
    while ((r = reg.exec(str))) {
      arr.push([r.index, r.index + r[0].length - 1])
    }
    return arr
  })

  // * 递归函数，每次都弹出数组的最上两项，计算面积，合并两项数据，找出相交区间并塞回数组中进行下次递归运算
  let recur = (arr, result, n = 1) => {
    let top = arr.pop()
    let next = arr.pop()
    let tt
    let nn
    let width
    let start
    let end
    let temp = []
    n++
    for (let i = 0; i < top.length; i++) {
      width = 0
      tt = top[i]
      result.push((n - 1) * (tt[1] - tt[0] + 1))
      if (next) {
        for (let j = 0; j < next.length; j++) {
          nn = next[j]
          result.push(nn[1] - nn[0] + 1)
          start = Math.max(tt[0], nn[0])
          end = Math.min(tt[1], nn[1])
          // * 这里处理 一行只有一个 1 且与下一行数据不相交的情况
          if ((tt[0] === tt[1] && start !== end) || (nn[0] === nn[1] && start !== end)) continue
          width = end - start + 1
          if (width > 0) {
            result.push(n * width)
            // * 这里记录相交区间
            if (start !== undefined && end !== undefined) {
              temp.push([start, end])
            }
          }
        }
      }
    }
    // * 如果数组没有多余项，那说明已经求值完毕
    if (!arr.length) return
    // * 判断是否有相交区间，有则将数据塞回数组中，并且深度 + 1 进行递归计算
    if (temp.length) {
      arr.push(temp)
      recur(arr, result, n++)
    } else {
      // * 没有则将原本弹出的第二行塞回数组中，重制 n ，进行递归计算
      arr.push(next)
      recur(arr, result)
    }
  }

  let result = []
  // * 以矩阵中的每一行作为起始行进行递归运算
  while (matrixArr.length > 0) {
    recur([...matrixArr], result)
    matrixArr.pop()
  }

  let max = 0
  // * 将结果集取最大值
  result.forEach(item => {
    if (item > max) max = item
  })

  return max
}

// * 思路2：将矩阵数据进行纵向叠加，如果上一行的该列的值不为 0，则在上一行的基础上 + 1
// * 这样就能计算出，每一列的数据在该行的高度值，然后利用 84 的方法，相当于矩阵的每一行进行柱状图最大矩形面积求值，
// * 这里利用，找边界的方法求柱状图的最大矩形面积，当高度一定时，矩形的最大面积就看左右两边延伸的宽度，如果当前柱状图高度 < 周围柱状图，那说明没有到最大边界
// * 当遇到当前柱状图高度 > 周围柱状图，即找到边界。这样找到每根柱子的左边界和有边界后就得出宽度，再乘以当前柱状图高度就是当前柱子的能组成的最大矩形。
// * 循环每根柱子求出最大值即为该行矩阵的最大矩形面积，求出每一行矩阵的最大矩形面积后得出的最大值就是本题结果
// ! 注意：这里求柱状图最大面积时用了优化，无需每次都遍历每一行数据，求出每一根柱子的左右边界，这里利用前一根柱子求出的边界，如果当前柱子大于前一根柱子，那么前一根柱子的边界就是当前柱子的边界，
// * 那么从前一根柱子的边界继续找当前柱子的边界即可，跳过中间项，优化性能。这样最后得出的每根柱子的左边界数组 leftI 和右边界数组 rightI
// * 循环矩阵的整行数据，利用 (rightI[i] - leftI[i] - 1) * arr[i] 就可以得出每根柱子的最大矩形面积。
// ! 注意：这里的 leftI 的第 0 项 要默认为 -1 rightI 的第 rightI.length - 1 项 要为 arr.length，保证找柱子的左右边界时，能遍历到整个数组
// ! 所以在求柱子的最大面积时的宽度是要 - 1 而不是 + 1，因为数组本身被扩大了两项
/**
 * @param { Array<number[]> } matrix
 */
exports.bestMaxRect = (matrix) => {
  // * 将矩阵中的每一列数据进行累加处理
  let curr
  let prev = matrix[0]
  for (let i = 1; i < matrix.length; i++) {
    curr = matrix[i]
    for (let j = 0; j < curr.length; j++) {
      curr[j] = Number(curr[j])
      if (curr[j] === 1) {
        curr[j] += Number(prev[j])
      }
    }
    prev = curr
  }

  // * 84 题求柱状图最大值函数
  /**
   * @param {number[]} arr
   */
  let barMaxRect = (arr) => {
    let len = arr.length
    let leftI = new Array(len)
    let rightI = new Array(len)
    // * 左边界数组最小 index 为 -1
    leftI[0] = -1
    // * 有边界数组最大 index 为 arr.length
    rightI[len - 1] = len
    let temp
    // * 循环遍历数组，找出当前索引的左边界
    for (let i = 1; i < len; i++) {
      temp = i - 1
      // * 如果当前索引 没有前一项索引大，则继承他的 index 值，以他的 index 值往前继续寻找左边界，直到找到小于当前值的索引 或者 index 已经为 0 了
      while (temp >= 0 && arr[temp] >= arr[i]) {
        temp = leftI[temp]
      }
      // * 将找到的左边界保存在左边界数组中
      leftI[i] = temp
    }

    // * 同理得出右边界索引数据
    for (let i = len - 2; i >= 0; i--) {
      temp = i + 1
      while (temp < len && arr[temp] >= arr[i]) {
        temp = rightI[temp]
      }
      rightI[i] = temp
    }
    let max = 0
    // * 循环遍历得出每根柱子的最大面积，然后取最大值
    for (let i = 0; i < len; i++) {
      max = Math.max(max, (rightI[i] - leftI[i] - 1) * arr[i])
    }
    return max
  }

  let result = 0

  // * 循环遍历矩阵每一行，得出每一行的最大矩形面积，最大值即为结果
  for (let i = 0; i < matrix.length; i++) {
    result = Math.max(result, barMaxRect(matrix[i]))
  }
  return result
}
