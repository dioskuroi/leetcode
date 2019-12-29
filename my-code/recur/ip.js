// * 93. 复原IP地址
// * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

// * 示例:
// * 输入: "25525511135"
// * 输出: ["255.255.11.135", "255.255.111.35"]

module.exports = (str) => {
  // * 定义结果集
  const result = []
  // * 定义递归函数
  const recur = (substr, arr = []) => {
    // * 判断，如果传入的字符串的长度除以 3 的个数是否超过，剩余还未补充的 ip 地址长度
    // * 如果超出，则说明当前分配方法不满足 IP 地址的规则要求，将最后一个 ip 位弹出，回溯到上一级递归，继续递归尝试
    if ((substr.length / 3) > (4 - arr.length)) {
      arr.pop()
      return
    }
    // * 如果保存 ip 的数组已经满 4 个了， 那说明 ip 地址已经获取到，将结果保存在结果集中
    if (arr.length === 4) {
      result.push(arr.join('.'))
    } else {
      let temp
      // * 遍历当前剩余的字符串前三位
      // * 因为 ip 地址的每一项，最大只有 255，所以只需遍历 3 位即可
      // ! 注意：这里要和剩余字符串长度取最小值，有可能剩余字符串长度不到 3 位
      for (let i = 1; i <= Math.min(3, substr.length); i++) {
        // * 截取字符串，如果字符串数字大于 255，那则不符合 ip 地址规则，弹出上一位地址，回溯到上一层递归
        temp = substr.slice(0, i)
        if (temp > 255 || /^0.+/.test(temp)) {
          arr.pop()
          return
        }
        // * 将截取后的剩余字符串和合并后的 ip 地址数组传入下一次递归，继续补足 ip 地址
        recur(substr.slice(i), arr.concat([temp]))
      }
    }
  }

  recur(str)

  return result
}
