import { splitStringToChunks, addURLParam } from '../src/string'

test('splitStringToChunks', () => {
  const str1 = 'lemon'
  const str2 = '123123'
  const str3 = '1234'
  const str4 = '0'
  const str5 = 45678
  const str6 = '456789'
  const str7 = '12312.45'
  const str8 = '12312.'
  const str9 = '0.1'
  const str10 = '1234567'

  expect(splitStringToChunks(str1, 4)).toBe('l,emon')
  expect(splitStringToChunks(str2)).toBe('12,3123')
  expect(splitStringToChunks(str3)).toBe('1234')
  expect(splitStringToChunks(str4)).toBe('0')
  expect(splitStringToChunks(str5)).toBe(45678)
  expect(splitStringToChunks(str6)).toBe('45,6789')
  expect(splitStringToChunks(str7)).toBe('1,2312.45')
  expect(splitStringToChunks(str8)).toBe('1,2312')
  expect(splitStringToChunks(str9)).toBe('0.1')
  expect(splitStringToChunks(str10, 3)).toBe('1,234,567')
})

test('addURLParam', () => {
  const URL_1 = 'www.github.com/login'
  const URL_2 = ''
  const eg1 = undefined
  const eg2 = null
  const eg3 = {}
  const eg4 = { name: '', age: 0, width: undefined, height: null, color: '0' }
  const eg5 = '1234567'

  expect(addURLParam(URL_1, eg1)).toBe(URL_1)
  expect(addURLParam(URL_2, eg1)).toBe(URL_2)
  expect(addURLParam(URL_1, eg2)).toBe(URL_1)
  expect(addURLParam(URL_1, eg3)).toBe(URL_1)
  expect(addURLParam(URL_1, eg4)).toBe('www.github.com/login?age=0&color=0')
  expect(addURLParam(URL_1, eg5)).toBe(URL_1)
})
