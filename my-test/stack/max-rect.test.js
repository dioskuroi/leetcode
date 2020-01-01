const { maxRect, bestMaxRect } = require('../../my-code/stack/max-rect')

test('最大矩形', () => {
  let input = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
  ]
  expect(maxRect(JSON.parse(JSON.stringify(input)))).toBe(6)
  expect(bestMaxRect(JSON.parse(JSON.stringify(input)))).toBe(6)
})
