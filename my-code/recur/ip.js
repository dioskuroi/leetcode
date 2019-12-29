// * 93. 复原IP地址
// * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// * 示例:
// * 输入: "25525511135"
// * 输出: ["255.255.11.135", "255.255.111.35"]

module.exports = (str) => {
  const result = []
  const recur = (substr, arr = []) => {
    if ((substr.length / 3) > (4 - arr.length)) {
      arr.pop()
      return
    }
    if (arr.length === 4) {
      result.push(arr.join('.'))
    } else {
      let temp
      for (let i = 1; i <= Math.min(3, substr.length); i++) {
        temp = substr.slice(0, i)
        if (temp > 255 || /^0.+/.test(temp)) {
          arr.pop()
          return
        }
        recur(substr.slice(i), arr.concat([temp]))
      }
    }
  }

  recur(str)

  return result
}
