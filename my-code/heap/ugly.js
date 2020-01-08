// * 313. 超级丑数
// * 编写一段程序来查找第 n 个超级丑数。

// * 超级丑数是指其所有质因数都是长度为 k 的质数列表 primes 中的正整数。

// * 示例:

// * 输入: n = 12, primes = [2,7,13,19]
// * 输出: 32
// * 解释: 给定长度为 4 的质数列表 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32] 。
// * 说明:

// * 1 是任何给定 primes 的超级丑数。
// *  给定 primes 中的数字以升序排列。
// * 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000 。
// * 第 n 个超级丑数确保在 32 位有符整数范围内。

// * 思路1：暴力破解法
// *  将质因数数组中的数字一个个的去除以递增数字 i，当除不尽时换下一个质因数除，如果结果为1，那说明该数字是需要的数字，
// *  如果除到最后一个数都不能被整除，那么说明该数字不是超级丑数
exports.ugly = (n, primes) => {
  let temp
  let result = 1
  let count = 2
  let first = primes[0]
  let ignore = []
  for (let i = 2; i < first; i++) {
    ignore.push(i)
  }
  let step = first === 2 ? 1 : 2
  let i = first + 1
  while (count !== n) {
    if (ignore.some(num => i % num === 0)) {
      i += step
      continue
    }
    temp = i
    primes.some((prime, index) => {
      if (i < prime) return true
      while ((temp / prime) % 1 === 0) {
        temp = temp / prime
        if (temp === 1) {
          count++
          if (count === n) {
            result = i
          }
          return true
        }
      }
      if (temp < primes[index]) return true
      return false
    })
    i += step
  }

  return result
}

// * 思路2：利用多指针
// *  其实丑数就是 pirmes 中的质因数的幂次方相乘的结果，例：2**1 * 3**0 * 5**0
// *  定义初始结果集，包含 1 这个固定的丑数
// *  给每个质因数定义一个指针，保存在指针数组 temp 中，指针初始值都为 0
// *  遍历质因数数组，每个质因数和每个质因数指针指向的结果集元素相乘，得出最小的一个丑数，
// *  将丑数保存在结果集中，而那个得出该丑数的质因数的指针 + 1，下一次就会依据下一个丑数进行乘积得出丑数
exports.bestUgly = (n, primes) => {
  // * 结果集，第一个丑数为 1
  let result = [1]
  let size = primes.length
  // * 质因数指针集，初始值都为 0
  let temp = new Array(size).fill(0)
  let min
  // * 循环找出 n 个超级丑数
  while (result.length < n) {
    min = Infinity
    // * 找出 质因数 * 质因数指针指向的结果集元素 的最小值
    for (let i = 0; i < size; i++) {
      min = Math.min(min, primes[i] * result[temp[i]])
    }
    // * 将最小值塞入结果集
    result.push(min)
    // * 找出结果集中可以得出该超级丑数的质因数，他们的指针都需要 + 1
    // * 比如 2 * 5 那么质因数 2 和 5 的指针都需要 + 1
    for (let j = 0; j < size; j++) {
      if (min === primes[j] * result[temp[j]]) temp[j]++
    }
  }
  // * 返回结果集中最后一个值
  return result[n - 1]
}
