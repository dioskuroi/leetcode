import substr, { bestSubstr } from '../../my-code/regexp'

test('重复的子字符串', () => {
  expect(substr('abab')).toBe(true)
  expect(substr('aba')).toBe(false)
  expect(substr('abcabcabcabc')).toBe(true)
  expect(bestSubstr('abcabcabc')).toBe(true)
})
