const { NodeList, sort } = require('../../my-code/chain/sort')

// const head = new NodeList([4, 2, 1, 3])
// sort(head)

test('排序链表', () => {
  const head = new NodeList([4, 2, 1, 3])
  expect(sort(head)).toEqual([1, 2, 3, 4])
  const head2 = new NodeList([-1, 5, 3, 4, 0])
  expect(sort(head2)).toEqual([-1, 0, 3, 4, 5])
})
