exports.coin = (bills) => {
  let handler = {
    5 (map) {
      map[5] += 1
      return false
    },
    10 (map) {
      if (!map[5]) return true
      map[5] -= 1
      map[10] += 1
      return false
    },
    20 (map) {
      if (map[10] && map[5]) {
        map[10] -= 1
        map[5] -= 1
      } else if (map[5] > 2) {
        map[5] -= 3
      } else {
        return true
      }
      return false
    }
  }
  let coin = {
    5: 0,
    10: 0
  }
  return !bills.some(item => handler[item](coin))
}
