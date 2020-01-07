const { spiral } = require('../../my-code/matrix/spiral')

test('螺旋链表', () => {
  expect(spiral([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5])
})
