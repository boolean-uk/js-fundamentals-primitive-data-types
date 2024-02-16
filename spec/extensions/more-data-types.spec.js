const {
  a,
  b,
  c,
  d,
  e,
  f,
  g
} = require('../../src/extensions/more-data-types.js')

describe('Example [Extensions]', () => {
  it('Check null', () => {
    expect(a).toBe(null)
  })
  it('Check true', () => {
    expect(b).toBe(true)
  })
  it('Check false', () => {
    expect(c).toBe(false)
  })
  it('Check undefined', () => {
    expect(d).toBe(undefined)
  })
  it('Check boolean', () => {
    expect(e).toBe('boolean')
  })
  it('Check boolean', () => {
    expect(f).toBe('boolean')
  })
  it('Check undefined', () => {
    expect(g).toBe('undefined')
  })
})
