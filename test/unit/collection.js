import { Collection } from '../../src';

describe('Collection', function() {

  var myCollection = new Collection('myCollection');

  it('should throw an error if collection is instantiated without a name', () => {
    expect(() => {
      const collection = new Collection();
      collection.getName();
    }).to.throw(Error);
  });

  it('should throw an error if find is not implemented', () => {
    expect(() => { myCollection.find(); }).to.throw(Error);
  });

  it('should throw an error if findOne is not implemented', () => {
    expect(() => { myCollection.findOne(); }).to.throw(Error);
  });

  it('should throw an error if findById is not implemented', () => {
    expect(() => { myCollection.findById(); }).to.throw(Error);
  });

  it('should throw an error if create is not implemented', () => {
    expect(() => { myCollection.create(); }).to.throw(Error);
  });

  it('should throw an error if removeWhere is not implemented', () => {
    expect(() => { myCollection.removeWhere(); }).to.throw(Error);
  });

  it('should throw an error if remove is not implemented', () => {
    expect(() => { myCollection.remove(); }).to.throw(Error);
  });

  it('should throw an error if update is not implemented', () => {
    expect(() => { myCollection.update(); }).to.throw(Error);
  });
});
