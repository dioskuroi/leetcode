const { MyCircularQueue } = require('../../my-code/queue/loop-queue')

test('设计循环队列', () => {
  const queue = new MyCircularQueue(3)
  expect(queue.enQueue(1)).toBe(true)
  expect(queue.enQueue(2)).toBe(true)
  expect(queue.enQueue(3)).toBe(true)
  expect(queue.enQueue(4)).toBe(false)
  expect(queue.isFull()).toBe(true)
  expect(queue.deQueue()).toBe(true)
  expect(queue.Front()).toBe(2)
  expect(queue.Rear()).toBe(3)
  expect(queue.isEmpty()).toBe(false)
})
