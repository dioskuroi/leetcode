// * 98. 验证二叉搜索树

// * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// * 假设一个二叉搜索树具有如下特征：
// * 节点的左子树只包含小于当前节点的数。
// * 节点的右子树只包含大于当前节点的数。
// * 所有左子树和右子树自身必须也是二叉搜索树。

// * 示例 1:
// * 输入:
// *     2
// *    / \
// *   1   3
// * 输出: true

// * 示例 2:
// * 输入:
// *     5
// *    / \
// *   1   4
// *      / \
// *     3   6
// * 输出: false
// * 解释: 输入为: [5,1,4,null,null,3,6]。
// *      根节点的值为 5 ，但是其右子节点值为 4 。

/**
 * @class 节点
 * @property {number} val
 * @property {Node} left
 * @property {Node} right
 */
class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = undefined
  }
}

// * 创建二叉搜索树
// * 思路：每次都从根节点开始，比根节点小的都在根节点左边，比根节点大的都在根节点右边，
// *    如果根节点的子节点已经有 node 了，那么递归查找有空位的子节点
class SearchTree {
  /**
   * @param {number[]} data
   */
  constructor (data) {
    // * 取数组第一个节点为根节点
    const root = new Node(data[0])
    // * 循环插入子节点
    for (let i = 1; i < data.length; i++) {
      this.insert(root, new Node(data[i]))
    }
    return root
  }
  /**
   * @param {Node} root
   * @param {Node} node
   */
  insert (root, node) {
    // * 如果父节点的值大于要插入的节点的值，则需要将该节点插入到左子节点上
    // * 如果此时父节点的左子节点已经有节点存在，那么将该左子节点当作父节点，递归寻找可插入的子节点
    if (root.val > node.val) {
      if (root.left === undefined) {
        root.left = node
      } else {
        this.insert(root.left, node)
      }
    // * 同理右子树
    } else {
      if (root.right === undefined) {
        root.right = node
      } else {
        this.insert(root.right, node)
      }
    }
  }
  // * 验证是否为二叉搜索树，这里用到了中序遍历（左，根，右）
  // * 利用了二叉搜索树的中序遍历后的结果为从小到大排序后的数组
  // * 所以中序遍历的前一个值一定小于后一个值这个特征来判断是否为二叉搜索树
  /**
   * @param {Node} root
   */
  static validate (root) {
    // * 记录前一个值
    let prev
    // * 默认结果为 true
    let result = true

    const recur = (root) => {
      // * 如果节点为空，或者判定结果已经为 false 了，则无需再递归遍历了
      if (!root || !result) return
      // * 优先遍历左子树
      recur(root.left)
      // * 如果左子树没有节点，则判定当前节点的值是否大于前一个值
      // * 如果小于或者等于，则说明不是二叉搜索树，直接终止递归，返回结果 false
      if (prev !== undefined && prev >= root.val) {
        result = false
        return
      }
      // * 判断完毕后，将当前值作为下一次判断的前一个值
      prev = root.val
      // * 最后遍历右子树
      recur(root.right)
    }
    // * 将根节点传入验证
    recur(root)
    return result
  }
}

exports.Node = Node
exports.SearchTree = SearchTree
