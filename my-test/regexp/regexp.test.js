import regexp from '../../my-code/regexp/regexp'

test('正则表达式匹配', () => {
  expect(regexp('aa', 'a')).toBe(false)
  expect(regexp('aa', 'a*')).toBe(true)
  expect(regexp('ab', '.*')).toBe(true)
  expect(regexp('aab', 'c*a*b')).toBe(true)
  expect(regexp('mississippi', 'mis*is*p*.')).toBe(false)
})
