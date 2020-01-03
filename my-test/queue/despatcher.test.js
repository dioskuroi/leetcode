const { despatcher } = require('../../my-code/queue/despatcher')

test('任务调度器', () => {
  expect(despatcher(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8)
})
