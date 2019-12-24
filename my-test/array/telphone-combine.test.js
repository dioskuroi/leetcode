import telComb from '../../my-code/array/telphone-combine'

test('电话号码的字母组合(\'23\')', () => {
  expect(telComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})

test('电话号码的字母组合(\'\')', () => {
  expect(telComb('')).toEqual([])
})

test('电话号码的字母组合(\'2\')', () => {
  expect(telComb('2')).toEqual(['a', 'b', 'c'])
})
