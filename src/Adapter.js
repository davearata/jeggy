export class Adapter {
  getCollection() {
    throw new Error('getCollection not implemented');
  }

  getCollections() {
    throw new Error('getCollections not implemented');
  }
}

export default Adapter;
