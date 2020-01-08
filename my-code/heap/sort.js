// * 堆排序

// * 思路：
// *  1. 先找出最后一个父节点的索引
// * 然后从该索引开始遍历，将该节点的值和左右子节点进行对比，将最大值的值和该父节点的值进行交换，
// * 随后以被交换的点为父节点继续寻找最大值进行交换（父节点的左子节点为 2 * i + 1，右子节点为 2 * i + 2）
// * 遍历至索引0，则建立了大顶堆，将堆顶也就是 数组第一个元素 与最后一个元素进行交换，
// * 随后再次遍历数组以 索引 0 ，数组长度为 length - i 建立大顶堆，找到最大值，将索引 0 与 length - i - 1 进行交换
class Heap {
  /**
   * @param {number[]} data
   */
  constructor (data) {
    this.heap = data
    this.size = this.heap.length
  }
  // * 建立堆
  buildMaxHeap () {
    // * 找到堆的最后一个非叶子节点
    let lastFather = Math.floor(this.size / 2 - 1)
    // * 建立初始的最大堆
    for (let i = lastFather; i >= 0; i--) {
      this.recur(i, this.heap.length)
    }
    // * 取出第一个最大值放在数组尾部
    this.swap(0, this.heap.length - 1)
  }

  recur (i, size) {
    // * 判断当前节点、左子节点和右子节点中的最大值
    let large = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < size && this.heap[left] > this.heap[large]) {
      large = left
    }
    if (right < size && this.heap[right] > this.heap[large]) {
      large = right
    }
    // * 将最大值和当前节点的值互换
    if (large !== i) {
      this.swap(large, i)
      // * 依据被交换的子节点进行递归
      this.recur(large, size)
    }
  }

  swap (i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
  // * 堆排序
  sort () {
    // * 先建立一次最大堆
    this.buildMaxHeap()
    // * 然后循环递归建立最大堆，将最大值放在数组尾部
    for (let i = this.heap.length - 1; i > 0; i--) {
      this.recur(0, i)
      this.swap(0, i - 1)
    }

    return this.heap
  }
}

exports.Heap = Heap
