const { stock } = require('../../my-code/greed/stock')

test('买卖股票的最佳时机', () => {
  expect(stock([7, 1, 5, 3, 6, 4])).toBe(7)
  expect(stock([1, 2, 3, 4, 5])).toBe(4)
  expect(stock([7, 6, 4, 3, 1])).toBe(0)
})
