const { Tree } = require('../../my-code/btree/symmetric')

test('对称二叉树', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5])
  expect(Tree.isSymmetric(root)).toBeTruthy()
})

test('对称二叉树2', () => {
  let root = new Tree([1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 4])
  expect(Tree.isSymmetric(root)).toBeFalsy()
})
