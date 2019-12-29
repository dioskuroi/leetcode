import findMaxDistance, { linearSpeed } from '../../my-code/sort/find-max-distance'

test('最大间距', () => {
  expect(findMaxDistance([3, 6, 9, 1])).toBe(3)
  expect(findMaxDistance([10])).toBe(0)
  expect(findMaxDistance([1, 10000000])).toBe(9999999)
  expect(findMaxDistance([100, 3, 2, 1])).toBe(97)
  expect(linearSpeed([1, 10000000])).toBe(9999999)
})
