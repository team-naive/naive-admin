export const splitStringToChunks = (str: string, len = 4): string => {
  if (Object.prototype.toString.call(str) !== '[object String]') {
    return str
  }

  const [num, decimal] = str.split('.')
  const reg = new RegExp(`.{1,${len}}(?=(.{${len}})*$)`, 'g')
  let fs = (num.match(reg) || '').toString()

  if (decimal) {
    fs = fs + '.' + decimal
  }

  return fs
}

export const addURLParam = (url: string, body: object | null | undefined): string => {
  if (!url || !body || Object.prototype.toString.call(body) !== '[object Object]') {
    return url
  }

  return Object.entries(body).reduce((acc, [key, value]): string => {
    if (value !== '' && typeof value !== 'undefined' && value !== null) {
      acc += acc.indexOf('?') == -1 ? '?' : '&'
      acc += encodeURIComponent(key) + '=' + encodeURIComponent(value)
    }
    return acc
  }, url)
}
