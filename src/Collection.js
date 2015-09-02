export class Collection {
  constructor(name) {
    if(!name || typeof name !== 'string' || name.length === 0) {
      throw new Error('Collection must be instantiated with a name');
    }
    this.name = name;
  }

  find() {
    throw new Error('find not implemented');
  }

  findOne() {
    throw new Error('findOne not implemented');
  }

  findById() {
    throw new Error('findById not implemented');
  }

  create() {
    throw new Error('create not implemented');
  }

  insertMany() {
    throw new Error('insertMany not implemented');
  }

  removeWhere() {
    throw new Error('removeWhere not implemented');
  }

  remove() {
    throw new Error('remove not implemented');
  }

  update() {
    throw new Error('update not implemented');
  }
}
