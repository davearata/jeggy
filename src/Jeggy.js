export class Jeggy {
  constructor(adapter) {
    if(!adapter) {
      throw new Error('jeggy must be instantiated with an adapter');
    }
    this.adapter = adapter;
  }

  getCollection(name) {
    return this.adapter.getCollection(name);
  }

  getCollections() {
    return this.adapter.getCollections();
  }

  populate(docs, fieldKey, collectionName) {
    return this.adapter.populate(docs, fieldKey, collectionName);
  }
}
