const { coin } = require('../../my-code/greed/coin')

test('柠檬水找零', () => {
  expect(coin([5, 5, 5, 10, 20])).toBeTruthy()
})
