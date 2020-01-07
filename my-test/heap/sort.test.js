const { Heap } = require('../../my-code/heap/sort')

test('堆排序', () => {
  const heap = new Heap([6, 3, 1, 7, 2, 8, 9])
  expect(heap.sort()).toEqual([1, 2, 3, 6, 7, 8, 9])
})
