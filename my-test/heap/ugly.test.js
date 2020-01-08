const { ugly, bestUgly } = require('../../my-code/heap/ugly')

test('超级丑数', () => {
  expect(ugly(12, [2, 7, 13, 19])).toBe(32)
  expect(bestUgly(12, [2, 7, 13, 19])).toBe(32)
})

// bestUgly(12, [2, 7, 13, 19])
