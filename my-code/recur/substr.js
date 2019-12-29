module.exports = (s, words) => {
  if (words.length === 0 || s.length === 0) return []
  let length = words.length
  const substrList = []
  let genorateSubstr = (words, arr) => {
    if (arr.length === length) {
      substrList.push(arr.join(''))
      return
    }
    let temp
    words.forEach((word, index) => {
      temp = [...words]
      temp.splice(index, 1)
      genorateSubstr(temp, arr.concat(word))
    })
  }
  genorateSubstr(words, [])
  let result = []
  substrList.forEach(item => {
    let index = 0
    while (index !== -1) {
      index = s.indexOf(item, index)
      if (index > -1) {
        result.push(index)
        index++
      }
    }
  })
  return [...new Set(result)]
}
