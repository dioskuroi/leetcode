import substr, { speedSubstr } from '../../my-code/string/substr'

test('计数二进制子串（00110011）', () => {
  expect(substr('00110011')).toEqual(6)
})

test('计数二进制子串（10101）', () => {
  expect(substr('10101')).toEqual(4)
})

test('计数二进制子串最优方法（00110011）', () => {
  expect(speedSubstr('00110011')).toEqual(6)
})

test('计数二进制子串最优方法（10101）', () => {
  expect(speedSubstr('10101')).toEqual(4)
})
