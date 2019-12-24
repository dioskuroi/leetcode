// * ? 914.卡牌分组

// * 给定一副牌，每张牌上都写着一个整数。
// * 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
// * 每组都有X张牌。
// * 组内所有的牌上都写着相同的整数。
// * 仅当你可选的X >= 2时返回true。

// * 提示：
// * 1 <= deck.length <= 10000
// * 0 <= deck[i] < 10000

// *该题主要是考最大公约数的概念，需要我们找到每张牌个数的最大公约数，如果最大公约数大于 1，则表示可以分组

// * 我的方法
export default (deck) => {
  // * 如果当前卡组只有一张，则不能分组
  if (deck.length === 1) return false
  // * 求公约数函数
  let gcd = (a, b) => {
    if (b === 0) return a
    return gcd(b, a % b)
  }
  const hash = deck.reduce((pre, num) => { // * 统计出每种数字的数目
    if (!pre[num]) {
      pre[num] = 1
    } else {
      pre[num]++
    }
    return pre
  }, {})
  const group = Object.values(hash) // * 将hash中的每项数值存入数组，便于后续遍历
  // * 如果 group 只有一项，则可以分组，因为已经排除了 deck 只有一张的情况，此时 group[0] 必定大于1
  if (group.length < 2) return true
  // * 这里利用 reduce 来计算最大公约数, 只要 最大公因数为 1，就抛出异常返回 false，如果 reduce 完毕，那说明能分组，返回 true
  try {
    group.reduce((prev, curr) => {
      const res = gcd(prev, curr)
      if (res === 1) throw new Error('不能分组')
      return res
    })
  } catch (error) {
    return false
  }
  return true
}
