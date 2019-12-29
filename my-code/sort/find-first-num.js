// * 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

// * 示例 1:
// * 输入: [1,2,0]
// * 输出: 3

// * 示例 2:
// * 输入: [3,4,-1,1]
// * 输出: 2

// * 示例 3:
// * 输入: [7,8,9,11,12]
// * 输出: 1

// * 说明:
// * 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的空间。

export default (nums) => {
  // * 判断是否有 1， 如果没有 1 直接返回 1
  let hasOne = false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      hasOne = true
    } else if (nums[i] <= 0 || nums[i] > nums.length) {
      // * 将所有小于等于0，或者大于数组长度的越界数字置为1
      nums[i] = 1
    }
  }
  // * 如果找不到 1，则直接返回 1
  if (!hasOne) {
    return 1
  }
  let temp
  // * 遍历数组，将数组中每一项数字对应到数组到下标上的数字置为负数
  // * 注意：不管出现过多少次，都要保证下标对应的数字为负数
  for (let i = 0; i < nums.length; i++) {
    temp = Math.abs(nums[i])
    // * 由于没有数组长度对应的数组下标项，所以将 nums[0] 置为负数
    if (temp === nums.length) {
      nums[0] = -Math.abs(nums[0])
    } else {
      // * 确保一定要置为负数，不管出现过多少次
      nums[temp] = -Math.abs(nums[temp])
    }
  }

  // * 再次遍历，找出第一个正数对应的下标，就是缺失的第一个正数
  // * 注意：需要从下标 1 开始遍历，因为0是代表 nums.length 这个数组中最大的数
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) return i
  }
  // * 如果遍历完之后没有得到结果，则检查数组第0项是否为正数，如果是则返回 muns.length
  if (nums[0] > 0) return nums.length
  // * 如果都为负数，那么说明缺失都第一个正整数不在数组中，而是数组长度 + 1
  return nums.length + 1
}
