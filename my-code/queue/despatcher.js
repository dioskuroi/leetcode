/**
 * @param {string[]} tasks
 * @param {number} n
 */
exports.despatcher = (tasks, n) => {
  if (tasks.length === 1) return 1
  let taskMap = {}
  tasks.forEach(task => {
    if (taskMap[task]) {
      taskMap[task] += 1
    } else {
      taskMap[task] = 1
    }
  })
  let max = 0
  let maxStr = 1
  let keys = Object.keys(taskMap)
  keys.forEach(key => {
    if (max < taskMap[key]) {
      max = taskMap[key]
      maxStr = 1
    } else if (max === taskMap[key]) {
      maxStr++
    }
  })

  return Math.max((max - 1) * (n + 1) + maxStr, tasks.length)
}
