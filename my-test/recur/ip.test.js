const ip = require('../../my-code/recur/ip')

// ip('25525511135')

test('复原IP地址', () => {
  expect(ip('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(ip('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
})
