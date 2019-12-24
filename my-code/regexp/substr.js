// ? 459.重复的子字符串

// * 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

// * 示例 1:
// * 输入: "abab"
// * 输出: True
// * 解释: 可由子字符串 "ab" 重复两次构成。

// * 示例 2:
// * 输入: "aba"
// * 输出: False

// * 示例 3:
// * 输入: "abcabcabcabc"
// * 输出: True
// * 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)

export default (str) => {
  // * 利用 \1 进行模式匹配括号捕获的值，也就是说整个字符串是由多个(\w+)匹配到的字符组成的
  return /^(\w+)\1+$/.test(str)
}

export const bestSubstr = (str) => {
  // * 获取两倍的输入字符串
  const doubleStr = str + str
  // * 去头 去尾后还能匹配到输入项，那说明str本身就是重复到子串结合的
  return doubleStr.slice(1, doubleStr.length - 1).indexOf(str) >= 0
}
