// ? 696.计数二进制子串

// * 给定一个字符串s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
// * 重复出现的子串要计算它们出现的次数。

// * 示例 1 :
// * 输入: "00110011"
// * 输出: 6
// * 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// * 请注意，一些重复出现的子串要计算它们出现的次数。
// * 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

// * 示例 2 :
// * 输入: "10101"
// * 输出: 4
// * 解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。

// * 注意：
// * s.length在1到50,000之间。
// * s只包含“0”或“1”字符。

export default s => {
  let result = 0
  const match = str => {
    // * 在传入的字符串起始位置找到连续的 0 或者 1
    const leftPart = str.match(/^(0+|1+)/)[0]
    // * 讲找到的连续的 0  或者 1 生成对应的 1 或者 0
    const rightPart = (leftPart[0] ^ 1).toString().repeat(leftPart.length)
    // * 两者拼接，生成校验字符串
    const validStr = leftPart + rightPart
    // * 利用校验字符串比较传入的字符串的相同位数是否相等
    return str.slice(0, validStr.length) === validStr
  }
  for (let i = 0; i < s.length - 1; i++) {
    if (match(s.slice(i))) {
      result += 1
    }
  }
  return result
}

// * 方法2
// * 记录前一个数字出现的次数，和当前数字出现的次数，如果前一个次数大于当前次数，那么就表示存在匹配项
// * pre记录之前连续0或1，cur记录现在的连续1或0，
// * pre>=cur,比如现在有1个1，那么之前有1个或者2个、3个0，01、001、0001、都包含一个符合条件的解01，即满足条件。
export const speedSubstr = str => {
  let pre = 0
  let cur = 1
  let result = 0
  for (let i = 1, len = str.length; i < len; i++) {
    // * 比较当前字符和前一个字符是否相同，
    if (str[i] === str[i - 1]) {
      // * 相同那么当前字符的次数加一
      cur++
    } else {
      // * 不相同，当前数字出现的次数变为上一个数字出现的次数，当前数字出现的次数为 1
      pre = cur
      cur = 1
    }
    // * 如果上一次的次数大于当前次数，则必定有匹配的字符串
    if (pre >= cur) {
      result++
    }
  }
  return result
}
