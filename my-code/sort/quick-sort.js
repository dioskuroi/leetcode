export default (arr) => {
  // * 交换数组两项函数
  let swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  // * 查找标尺的定位
  let findCenter = (arr, left, right) => {
    // * 将数组的最左边一个数字定位标尺元素
    const flag = arr[left]
    // * 交换位置的游标是标尺下标 + 1
    let idx = left + 1
    // * 循环遍历数组，如果发现元素比标尺元素小，则和游标位置的元素进行交换，游标向右移动一位
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, i, idx)
        idx++
      }
    }
    // * 最后，需要将游标的左侧一位和标尺元素进行交换，保证标尺元素的左边都小于标尺元素，右边都大于标尺元素
    swap(arr, left, idx - 1)
    // * 返回游标的位置
    return idx
  }

  // * 建立递归函数
  let quickSort = (arr, left, right) => {
    // * 如果 left 小于 right，说明需要排序的元素大于1个，则继续进行排序
    if (left < right) {
      // * 找出中间游标
      const center = findCenter(arr, left, right)
      // * 左边部分递归排序
      // * 注意：这里的 center 需要减一，因为这个元素属于右排序
      quickSort(arr, left, center - 1)
      // * 右边部分递归排序
      quickSort(arr, center, right)
    }
  }

  // * 调用快排函数，传入下标最小值和最大值
  quickSort(arr, 0, arr.length - 1)

  // * 最后返回原数组
  return arr
}

export const quickSort = (arr) => {
  const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  const findCenter = (arr, left, right) => {
    const flag = arr[left]
    let idx = left + 1
    for (let i = idx; i <= right; i++) {
      if (arr[i] < flag) {
        swap(arr, idx, i)
        idx++
      }
    }
    swap(arr, left, idx - 1)
    return idx
  }

  const recur = (arr, left, right) => {
    if (left >= right) return
    const center = findCenter(arr, left, right)
    recur(arr, left, center - 1)
    recur(arr, center, right)
  }

  recur(arr, 0, arr.length - 1)

  return arr
}
