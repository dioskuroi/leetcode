module.exports = (ops) => {
  let i
  const handler = {
    '+' (arr, index) {
      arr[index] = arr[index - 1] + arr[index - 2]
    },
    'D' (arr, index) {
      arr[index] = arr[index - 1] * 2
    },
    'C' (arr, index) {
      arr.splice(index - 1, 2)
      i -= 2
    }
  }
  for (i = 0; i < ops.length; i++) {
    if (handler[ops[i]]) {
      handler[ops[i]](ops, i)
    } else {
      ops[i] = Number(ops[i])
    }
  }
  return ops.reduce((prev, curr) => prev + curr, 0)
}
