const reverseWord = require('../../my-code/string/reverse-word')

test('反转单词', () => {
  expect(reverseWord("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc"
  )
})
