import { Adapter } from '../../src';

describe('Adapter', function() {

  var myAdapter = new Adapter();

  it('should throw an error if getCollection is not implemented', () => {
    expect(() => { myAdapter.getCollection(); }).to.throw(Error);
  });

  it('should throw an error if getCollections is not implemented', () => {
    expect(() => { myAdapter.getCollections(); }).to.throw(Error);
  });
});
