import findFristNum from '../../my-code/sort/find-first-num'

test('缺失的第一个正数', () => {
  expect(findFristNum([0, -1, 3, 1])).toBe(2)
})
