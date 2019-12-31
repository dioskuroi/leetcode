const { maxRect2, bestMaxRect2 } = require('../../my-code/stack/max-rect-2')

test('柱状图中最大的矩形', () => {
  expect(maxRect2([2, 1, 5, 6, 2, 3])).toBe(10)
  expect(bestMaxRect2([2, 1, 5, 6, 2, 3])).toBe(10)
})
