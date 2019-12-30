const baseball = require('../../my-code/stack/baseball')

test('棒球比赛', () => {
  expect(baseball(['5', '2', 'C', 'D', '+'])).toBe(30)
})
