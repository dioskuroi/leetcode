import grayCode, { bestGrayCode } from '../../my-code/array/grayCode'

test('格雷编码', () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2])
  expect(grayCode(0)).toEqual([0])
  expect(bestGrayCode(2)).toEqual([0, 1, 3, 2])
})
