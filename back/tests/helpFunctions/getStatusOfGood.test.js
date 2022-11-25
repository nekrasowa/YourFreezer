const getStatusOfGood = require('../../helpFunc/getStatusOfGood')

test('getting number of days from creation', () => {
  const date = '2022-10-20T01:29:05.146Z'
  expect(getStatusOfGood(date)).toBe(34) 
})
