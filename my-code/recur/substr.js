// * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
// * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

// * 示例 1：
// * 输入：
// *   s = "barfoothefoobarman",
// *   words = ["foo","bar"]
// * 输出：[0,9]

// * 解释：
// * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
// * 输出的顺序不重要, [9,0] 也是有效答案。

// * 示例 2：
// * 输入：
// *   s = "wordgoodgoodgoodbestword",
// *   words = ["word","good","best","word"]
// * 输出：[]

// * 思路：
// *    1. 先遍历传入都 words, pos 记录字符串中所有与每个单词匹配的 index
// *    2. 遍历 pos 数组取出下标对应的子串放入substrList中，子串长度等于 words.length * words[0].length（单词个数 * 单词长度）
// *    3. 把 substrList 中的每一项，按单词长度进行分割，然后排序再 join 成一个子串（这里为了保证字符串中的单词出现顺序都是相同的）
// *    4. 将 words 中的单词也排序然后 join 成一个字符串 targetStr
// *    5. 遍历 substrList 判断有无和 targetStr 相同的项，有则将该项下标对应的 pos 中的值放入结果集中
// *      （这里的pos[index]就是需要找的 s 中的索引）
module.exports = (s, words) => {
  // * 如果传入的参数长度为0，则不可能匹配
  if (!words.length || !s.length) return []
  const length = words.length * words[0].length
  // * 如果字符串长度小于单词总长度，则不可能匹配
  if (length > s.length) return []

  // * 查找所有单词在字符串中出现的位置
  const findIndex = (str, target) => {
    const postion = []
    let index = -1
    // * 注意：需要找出所有的匹配项，当 index != -1 时，就继续寻找
    do {
      index = str.indexOf(target, index + 1)
      if (index > -1) {
        postion.push(index)
      }
    } while (index > -1)
    return postion
  }
  const substrList = []
  let pos = []
  // * 这里先去重单词，因为相同的单词只需要寻找一次
  new Set(words).forEach(word => {
    pos = pos.concat(findIndex(s, word))
  })
  // pos = [...new Set(pos)]
  // * 遍历位置信息，找出所有对应的子串
  pos.forEach(index => {
    const arr = []
    for (let i = 0; i < words.length; i++) {
      let left = index + i * words[0].length
      let right = index + (i + 1) * words[0].length
      if (right <= s.length && left >= 0) {
        arr.push(s.slice(left, right))
      }
    }
    // * 子串需要按单词分割，进行排序后再合并
    substrList.push(arr.sort().join(''))
  })
  // * 所有单词进行排序合并形成目标字符串用于匹配
  const targetStr = words.sort().join('')
  const result = []
  // * 遍历子串集，找出与目标字符串相同的子串下标，利用该下标从 pos 位置信息中映射出该子串所在主串中的位置，存入结果集
  substrList.forEach((item, index) => {
    if (item === targetStr) {
      result.push(pos[index])
    }
  })
  return result
}

export const bestSubstr = (s, words) => {
  const findIndexs = (str, p) => {
    const positions = []
    let pos = str.indexOf(p)

    while (pos > -1) {
      positions.push(pos)
      pos = str.indexOf(p, pos + 1)
    }
    return positions
  }

  const getValues = (s, word, sliceLength) => {
    let arr = []
    let indexs = findIndexs(s, word)

    indexs.forEach(index => {
      if (index !== -1) {
        let leftStrEnd = index + word.length
        let leftStrStart = leftStrEnd - sliceLength
        if (leftStrStart >= 0 && leftStrEnd <= s.length) {
          let leftStr = s.substring(leftStrStart, leftStrEnd)
          arr.push(leftStr)
        }
      }
    })
    return arr
  }

  const getAllValues = (s, words) => {
    let values = []
    let wordSets = [...new Set(words)]
    for (let i = 0; i < wordSets.length; i++) {
      values = values.concat(
        getValues(s, wordSets[i], words.length * words[0].length)
      )
    }
    return [...new Set(values)]
  }

  const isMatch = (value, words) => {
    let arr = []
    let v = value.slice()
    let len = words[0].length

    while (v) {
      arr.push(v.substring(0, len))
      v = v.substring(len)
    }
    return arr.sort().join('') === words.sort().join('')
  }

  if (!s || words.length === 0 || s.length < words.length * words[0].length) { return [] }

  let arr = []
  const values = getAllValues(s, words)

  values.forEach(item => {
    if (isMatch(item, words)) {
      arr = arr.concat(findIndexs(s, item))
    }
  })
  return arr
}
