// ? 电话号码的字母组合

// * 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。
// * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// * 示例:
// * 输入："23"
// * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// * 说明:
// * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

export default (digits) => {
  // * 如果输入为空，则返回空数组
  if (!digits) return []
  // * 建立字母映射表
  const phomeNumMap = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // * 如果只输入了一个数字，返回该数字对应的字母数组
  // ! 注意：需要 split 一下
  if (digits.length === 1) {
    return phomeNumMap[digits].split('')
  }
  // * 将输入转换为对应的字母数组
  const letterArr = digits.split('').map(num => phomeNumMap[num])
  // * 遍历该数组，将前后两项进行笛卡尔积处理，将结果保存在数组中返回，作为下一次循环的前一项数据
  const result = letterArr.reduce((prev, curr) => {
    const tempArr = []
    for (let i = 0; i < prev.length; i++) {
      for (let j = 0; j < curr.length; j++) {
        tempArr.push(`${prev[i]}${curr[j]}`)
      }
    }
    return tempArr
  })

  return result
}
