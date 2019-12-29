export default (arr) => {
  if (arr.length < 2) return 0
  let max = 0
  let diff
  let temp
  let len = arr.length - 1
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if (i !== len) {
      diff = arr[i + 1] - arr[i]
      if (max < diff) {
        max = diff
      }
    }
  }

  return Math.max(max, arr[1] - arr[0])
}

export const linearSpeed = (nums) => {
  if (nums.length < 2) return 0
  if (nums.length === 2) {
    return Math.abs(nums[0] - nums[1])
  }
  let max = 0
  let min = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i])
    min = Math.min(min, nums[i])
  }
  let minGap = Math.ceil((max - min) / (nums.length - 1))
  let index
  const bucket = []
  for (let i = 0; i < nums.length; i++) {
    index = Math.ceil(nums[i] / minGap)
    if (bucket[index]) {
      bucket[index].max = Math.max(nums[i], bucket[index].max)
      bucket[index].min = Math.min(nums[i], bucket[index].min)
    } else {
      bucket[index] = {
        max: nums[i],
        min: nums[i]
      }
    }
  }
  max = 0
  let prev

  for (let i = 0; i < bucket.length; i++) {
    if (!bucket[i]) continue
    if ((bucket[i].min - prev) > max) {
      max = bucket[i].min - prev
    }
    prev = bucket[i].max
  }
  return max
}
