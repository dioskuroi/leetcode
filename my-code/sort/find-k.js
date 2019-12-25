// ? 215. 数组中的第K个最大元素
// * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// * 示例 1:
// * 输入: [3,2,1,5,6,4] 和 k = 2
// * 输出: 5

// * 示例 2:
// * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// * 输出: 4

// * 说明:
// * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

export default (nums, k) => {
  let len = nums.length - 1
  let isMove = true
  let temp
  // * 外层只需遍历k次就可以了
  for (let i = len; i > len - k; i--) {
    if (!isMove) break
    isMove = false
    for (let j = 0; j <= i; j++) {
      if (nums[j] > nums[j + 1]) {
        temp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = temp
        isMove = true
      }
    }
  }
  return nums[len + 1 - k]
}
