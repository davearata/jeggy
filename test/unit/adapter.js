import { Adapter } from '../../src'

describe('Adapter', function () {
  const myAdapter = new Adapter()

  it('should throw an error if getCollection is not implemented', function () {
    expect(() => { myAdapter.getCollection() }).to.throw(Error)
  })

  it('should throw an error if getCollections is not implemented', function () {
    expect(() => { myAdapter.getCollections() }).to.throw(Error)
  })

  it('should throw an error if populate is not implemented', function () {
    expect(() => { myAdapter.populate() }).to.throw(Error)
  })
})
