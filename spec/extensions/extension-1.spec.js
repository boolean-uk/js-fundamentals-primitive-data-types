const { a, b, c, d } = require('../../src/extensions/example.js')

describe('Example [Extensions]', () => {
  it('Check null', () => {
    expect(a).toBe('null')
  })

  it('Check undefined', () => {
    expect(b).toBe('undefined')
  })

  it('Check true', () => {
    expect(c).toBe('boolean')
  })

  it('Check false', () => {
    expect(d).toBe('boolean')
  })
})
