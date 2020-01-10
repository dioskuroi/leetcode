exports.transit = (n, flights, src, dst, K) => {
  let flight
  let result = []
  let map = {}
  for (let i = 0; i < flights.length; i++) {
    flight = flights[i]
    if (map[flight[1]]) {
      map[flight[1]].push(flight)
    } else {
      map[flight[1]] = [flight]
    }
  }

  const recur = (dst, k, money = 0) => {
    if (k < 0 || !map[dst]) return
    for (let i = 0; i < map[dst].length; i++) {
      flight = map[dst][i]
      if (flight[0] === src) {
        result.push(money + flight[2])
      } else {
        recur(flight[0], k - 1, money + flight[2])
      }
    }
  }
  recur(dst, K)
  return result.length ? Math.min.apply(null, result) : -1
}

exports.bestTransit = (n, flights, src, dst, K) => {
  let arr = new Array(n).fill(Infinity)
  let tempArr
  arr[src] = 0
  for (let i = 0; i <= K; i++) {
    tempArr = [].concat(arr)
    for (let j = 0; j < flights.length; j++) {
      const [start, end, money] = flights[j]
      tempArr[end] = Math.min(tempArr[end], arr[start] + money)
    }
    arr = tempArr
  }
  return arr[dst] === Infinity ? -1 : arr[dst]
}
