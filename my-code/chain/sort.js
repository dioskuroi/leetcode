// * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

// * 示例 1:

// * 输入: 4->2->1->3
// * 输出: 1->2->3->4
// * 示例 2:

// * 输入: -1->5->3->4->0
// * 输出: -1->0->3->4->5

// * 思路1：利用快排思想 时间复杂度 nlogn， 空间复杂度 nlogn
class Node {
  /**
   * @param {number} value
   */
  constructor (value) {
    this.val = value
    this.next = undefined
  }
}

class NodeList {
  /**
   * @param {number[]} arr
   */
  constructor (arr) {
    const head = new Node(arr[0])
    let curr = head
    for (let i = 1; i < arr.length; i++) {
      curr.next = new Node(arr[i])
      curr = curr.next
    }

    return head
  }
}

exports.NodeList = NodeList

/**
 * @param {Node} head
 */
exports.sort = (head) => {
  /**
   * 交换节点
   * @param {Node} a
   * @param {Node} b
   */
  const swap = (a, b) => {
    const temp = a.val
    a.val = b.val
    b.val = temp
  }

  /**
   * 查找中间值
   * @param {Node} start
   * @param {Node} end
   */
  const findCenter = (start, end) => {
    let target = start
    let curr = start
    let point = start
    while (curr !== end) {
      if (curr.next && target.val > curr.next.val) {
        swap(point.next, curr.next)
        point = point.next
      }
      curr = curr.next
    }
    swap(start, point)
    return point
  }
  /**
   * 递归排序
   * @param {Node} start
   * @param {Node} end
   */
  const recur = (start, end) => {
    if (start !== end) {
      const center = findCenter(start, end)
      recur(start, center)
      recur(center.next, end)
    }
  }

  recur(head)

  const result = []
  let curr = head

  while (curr) {
    result.push(curr.val)
    curr = curr.next
  }

  return result
}
