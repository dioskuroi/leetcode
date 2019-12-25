// ? 按奇偶排序数组 II

// * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
// * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
// * 你可以返回任何满足上述条件的数组作为答案。

// * 示例：
// * 输入：[4,2,5,7]
// * 输出：[4,5,2,7]
// * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// * 提示：
// * 2 <= A.length <= 20000
// * A.length % 2 == 0
// * 0 <= A[i] <= 1000

export default (arr) => {
  // * 思路：定义一个奇数指针和偶数指针来确定当前奇偶数插入数组的 index
  let oddPoint = 1
  let evenPoint = 0
  const result = []
  const handler = {
    0: (item) => {
      result[evenPoint] = item
      // * 每次插入偶数后指针+2
      evenPoint += 2
    },
    1: (item) => {
      result[oddPoint] = item
      oddPoint += 2
    }
  }
  arr.forEach(item => {
    handler[item % 2](item)
  })
  return result
}
