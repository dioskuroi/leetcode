// * 787. K 站中转内最便宜的航班

// * 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。
// * 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。 如果没有这样的路线，则输出 -1。

// * 示例 1:
// * 输入:
// * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// * src = 0, dst = 2, k = 1
// * 输出: 200
// * 解释:
// * 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200。

// * 示例 2:
// * 输入:
// * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
// * src = 0, dst = 2, k = 0
// * 输出: 500
// * 解释:
// * 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500。

// * 提示：
// * n 范围是 [1, 100]，城市标签从 0 到 n - 1.
// * 航班数量范围是 [0, n * (n - 1) / 2].
// * 每个航班的格式 (src, dst, price).
// * 每个航班的价格范围是 [1, 10000].
// * k 范围是 [0, n - 1].
// * 航班没有重复，且不存在环路

// * 思路1：建立每个终点的 hash 表，
// *       然后利用递归，找出每个能从 src 到达 dst 的航线
// *       这里主要递归思路是：如果有从 src 直达目标地点的则直接将钱记录到结果集，
// *       否则将航线的起始点作为下一次递归的目标点，中转次数 - 1，费用 + 该段航线的费用，进行下一次递归
// *       边界：如果中转次数超过了规定或者该目标点没有航线，则跳出
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
// * 思路2：和不同路径相似，用两个数组存储到达每个点的费用，
// * 动态规划表达式：到达当前点的费用 = （直达当前点的费用） 和 （中转到当前点的费用 + 到达中转点的费用） 取最小值
// * 这里用了一个技巧，由于初始化结果集时，所有元素都为 Infinity，只有起始点才为 0
// * 所以最后得出的结果集其实只包含从起始点出发到达各点的金额，因为从其他点起始都是 Infinity
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
