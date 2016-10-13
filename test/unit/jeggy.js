import Jeggy from '../../src'

describe('Jeggy', function () {
  it('should throw an error if its instantiated without an adapter', function () {
    expect(() => {
      const jeggy = new Jeggy()
      jeggy.getCollection()
    }).to.throw(Error)
  })
})
