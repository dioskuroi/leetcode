module.exports = (matrix) => {
  let arr
  let str
  let reg = /1{1,}/g
  let matrixArr = matrix.map(item => {
    arr = []
    str = item.join('')
    let r
    while ((r = reg.exec(str))) {
      arr.push([r.index, r.index + r[0].length - 1])
    }
    return arr
  })

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
          if ((tt[0] === tt[1] && start !== end) || (nn[0] === nn[1] && start !== end)) continue
          width = end - start + 1
          if (width > 0) {
            result.push(n * width)
            if (start !== undefined && end !== undefined) {
              temp.push([start, end])
            }
          }
        }
      }
    }
    if (!arr.length) return
    if (temp.length) {
      arr.push(temp)
      recur(arr, result, n++)
    } else {
      arr.push(next)
      recur(arr, result)
    }
  }

  let result = []
  while (matrixArr.length > 0) {
    recur([...matrixArr], result)
    matrixArr.pop()
  }

  let max = 0

  result.forEach(item => {
    if (item > max) max = item
  })

  return max
}
