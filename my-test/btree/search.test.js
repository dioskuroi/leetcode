const { Node, SearchTree } = require('../../my-code/btree/search')

// test('验证二叉搜索树', () => {
//   let root = new SearchTree([2, 1, 3])
//   expect(SearchTree.validate(root)).toBeTruthy()
// })

// test('验证二叉搜索树2', () => {
//   let root = new Node(0)
//   root.right = new Node(-1)
//   expect(SearchTree.validate(root)).toBeFalsy()
// })

let root = new Node(0)
root.right = new Node(-1)
SearchTree.validate(root)
