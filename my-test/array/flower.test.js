import flower from '../../my-code/array/flower'

test('种花问题', () => {
  expect(flower([1, 0, 0, 0, 1], 1)).toBe(true)
  expect(flower([1, 0, 0, 0, 1], 2)).toBe(false)
})
