const { duplicatedSort } = require('../../my-code/heap/duplicated-sort')

test('根据字符出现频率排序', () => {
  expect(duplicatedSort('tree')).toBe('eetr')
  expect(duplicatedSort('cccaaa')).toBe('cccaaa')
})
