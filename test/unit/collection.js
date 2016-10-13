import { Collection } from '../../src'

describe('Collection', function () {
  const myCollection = new Collection('myCollection')

  it('should throw an error if collection is instantiated without a name', function () {
    expect(() => {
      const collection = new Collection()
      collection.getName()
    }).to.throw(Error)
  })

  it('should throw an error if find is not implemented', function () {
    expect(() => { myCollection.find() }).to.throw(Error)
  })

  it('should throw an error if findOne is not implemented', function () {
    expect(() => { myCollection.findOne() }).to.throw(Error)
  })

  it('should throw an error if findById is not implemented', () => {
    expect(() => { myCollection.findById() }).to.throw(Error)
  })

  it('should throw an error if create is not implemented', () => {
    expect(() => { myCollection.create() }).to.throw(Error)
  })

  it('should throw an error if count is not implemented', function () {
    expect(() => { myCollection.count() }).to.throw(Error)
  })

  it('should throw an error if insertMany is not implemented', function () {
    expect(() => { myCollection.insertMany() }).to.throw(Error)
  })

  it('should throw an error if removeWhere is not implemented', function () {
    expect(() => { myCollection.removeWhere() }).to.throw(Error)
  })

  it('should throw an error if remove is not implemented', function () {
    expect(() => { myCollection.remove() }).to.throw(Error)
  })

  it('should throw an error if update is not implemented', function () {
    expect(() => { myCollection.update() }).to.throw(Error)
  })

  it('should throw an error if updateMany is not implemented', function () {
    expect(() => { myCollection.updateMany() }).to.throw(Error)
  })
})
