// * 给定一个二叉树，检查它是否是镜像对称的。

// * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
// *     1
// *    / \
// *   2   2
// *  / \ / \
// * 3  4 4  3

// * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
// *     1
// *    / \
// *   2   2
// *    \   \
// *    3    3

// * 说明:
// * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
/**
 * @class 二叉树节点
 * @property {number} value
 * @property {Node} left
 * @property {Node} right
 */
class Node {
  /**
   * @param {number} val
   */
  constructor (val) {
    this.value = val
    this.left = this.right = undefined
  }
}

// * 创建二叉树逻辑：
// *  1. 先将数组中的每一项转化为 Node 节点
// *  2. 遍历 nodeList，每个 node 节点的 左子节点为 (2 * 当前索引 + 1)的元素，右子节点为 (2 * 当前索引 + 2)的元素
/**
 * @class 二叉树
 */
class Tree {
  /**
   * @param {number[]} data
   * @returns {Node}
   */
  constructor (data) {
    let root
    let nodeList = []
    // * 生成节点数组
    for (let i = 0; i < data.length; i++) {
      nodeList.push(new Node(data[i]))
    }
    // * 对每个节点的左子节点和右子节点进行赋值
    nodeList.forEach((item, index) => {
      item.left = nodeList[2 * index + 1]
      item.right = nodeList[2 * index + 2]
    })
    root = nodeList[0]
    nodeList = null
    return root
  }

  // * 判断是否为对称二叉树思路：
  // *  分解为最小任务就是看 左右对称的两个值是否相同
  // *  递归时，只要传入对称元素即可

  /**
   * @param {Node} root
   * @returns {boolean}
   */
  static isSymmetric (root) {
    // * 没有节点，默认为 true
    if (!root) return true
    // * 默认结果为 true
    let result = true
    /**
     * @param {Node} left
     * @param {Node} right
     */
    const recur = (left, right) => {
      // * 如果左节点和右节点都不存在，则结束递归
      if (!left && !right) return
      // * 如果左节点和右节点不相同，则说明不是对称二叉树
      if ((!left && right) || (left && !right) || (left.value !== right.value)) {
        result = false
        return
      }
      // * 将左节点的左子节点，右节点的右子节点进行递归判断
      recur(left.left, right.right)
      // * 将左节点的右子节点，右节点的左子节点进行递归判断
      recur(left.right, right.left)
    }

    recur(root.left, root.right)
    return result
  }
}

exports.Tree = Tree
