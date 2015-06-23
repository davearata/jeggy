var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.Jeggy = {});
})(this, function (exports) {
  'use strict';

  var Jeggy = (function () {
    function Jeggy(adapter) {
      _classCallCheck(this, Jeggy);

      if (!adapter) {
        throw new Error('jeggy must be instantiated with an adapter');
      }
      this.adapter = adapter;
    }

    _createClass(Jeggy, [{
      key: 'getCollection',
      value: function getCollection(name) {
        return this.adapter.getCollection(name);
      }
    }, {
      key: 'getCollections',
      value: function getCollections() {
        return this.adapter.getCollections();
      }
    }]);

    return Jeggy;
  })();

  exports.Jeggy = Jeggy;

  var Collection = (function () {
    function Collection(name) {
      _classCallCheck(this, Collection);

      if (!name || typeof name !== 'string' || name.length === 0) {
        throw new Error('Collection must be instantiated with a name');
      }
      this.name = name;
    }

    _createClass(Collection, [{
      key: 'find',
      value: function find() {
        throw new Error('find not implemented');
      }
    }, {
      key: 'findOne',
      value: function findOne() {
        throw new Error('findOne not implemented');
      }
    }, {
      key: 'findById',
      value: function findById() {
        throw new Error('findById not implemented');
      }
    }, {
      key: 'create',
      value: function create() {
        throw new Error('create not implemented');
      }
    }, {
      key: 'removeWhere',
      value: function removeWhere() {
        throw new Error('removeWhere not implemented');
      }
    }, {
      key: 'remove',
      value: function remove() {
        throw new Error('remove not implemented');
      }
    }, {
      key: 'update',
      value: function update() {
        throw new Error('update not implemented');
      }
    }]);

    return Collection;
  })();

  exports.Collection = Collection;

  var Adapter = (function () {
    function Adapter() {
      _classCallCheck(this, Adapter);
    }

    _createClass(Adapter, [{
      key: 'getCollection',
      value: function getCollection() {
        throw new Error('getCollection not implemented');
      }
    }, {
      key: 'getCollections',
      value: function getCollections() {
        throw new Error('getCollections not implemented');
      }
    }]);

    return Adapter;
  })();

  exports.Adapter = Adapter;
});
//# sourceMappingURL=./Jeggy.js.map