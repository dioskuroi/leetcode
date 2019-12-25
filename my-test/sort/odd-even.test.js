import oddEven from '../../my-code/sort/odd-even'

test('按奇偶排序数组', () => {
  expect(oddEven([4, 2, 5, 7])).toEqual([4, 5, 2, 7])
})
