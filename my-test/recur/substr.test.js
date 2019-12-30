const substr = require('../../my-code/recur/substr')

// substr('barfoothefoobarman', ['foo', 'bar'])

test('串联所有单词的子串', () => {
  expect(substr('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])).toEqual([9, 6, 12])
  expect(substr('barfoothefoobarman', ['foo', 'bar'])).toEqual([9, 0])
  expect(substr('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})
