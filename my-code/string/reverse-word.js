// ? 557.反转字符串中的单词

// * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
// * 示例1:
// * 输入: "Let's take LeetCode contest"
// * 输出: "s'teL ekat edoCteeL tsetnoc"
// * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
// ! 由于是用单个空格分割单词，所以可以用 split 来进行单词分割，如果没有注意这句话，这种写法是错误的

function reverseWord (str) {
  // * 这里还可以使用下列方法进行分割单词
  // * str.split(/\s/g) 数组的 split 方法可以接收正则表达式
  // * str.match(/[\w']+/g) 利用 match 方法匹配字母和单引号，返回的也是一个数组
  const wordArr = str.split(' ')
  const resverseWordArr = wordArr.map(word => {
    let reverseWord = ''
    for (let i = word.length - 1; i >= 0; i--) {
      const letter = word[i]
      reverseWord += letter
    }
    return reverseWord
  })

  return resverseWordArr.join(' ')
}

module.exports = reverseWord
