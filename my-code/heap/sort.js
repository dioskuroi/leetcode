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
    let n = Math.floor(Math.log2(this.size))
    let lastFather = -1
    for (let i = 0; i < n; i++) {
      lastFather += 2 ** i
    }
    for (let i = lastFather; i >= 0; i--) {
      this.recur(i, this.heap.length)
    }
    this.swap(0, this.heap.length - 1)
  }

  recur (i, size) {
    let large = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < size && this.heap[left] > this.heap[large]) {
      large = left
    }
    if (right < size && this.heap[right] > this.heap[large]) {
      large = right
    }
    if (large !== i) {
      this.swap(large, i)
      this.recur(large, size)
    }
  }

  swap (i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  sort () {
    this.buildMaxHeap()

    for (let i = this.heap.length - 1; i > 0; i--) {
      this.recur(0, i)
      this.swap(0, i - 1)
    }

    return this.heap
  }
}

exports.Heap = Heap
