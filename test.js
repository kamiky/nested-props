var nested = require('./index')

var object = {
  users: [{
    name: 'user1',
    geolocation: [55, 66]
  }, {
    name: 'user2',
    geolocation: [77, 88]
  }]
}

var complexArray = [
  [{
    name: 'user1',
    geolocation: [11, 22]
  }, {
    name: 'user2',
    geolocation: [33, 44]
  }],
  [{
    name: 'user3',
    geolocation: [55, 66]
  }, {
    name: 'user4',
    geolocation: [77, 88]
  }]
]

console.log('complexArray : ', complexArray)

var assert = require('chai').assert
var expect = require('chai').expect

describe('complexArray - GET', function() {

  describe('null object', function() {
    it('should return null', function() {
      assert.isNull(nested.get(null, 'test'), null)
    });
  });

  describe('undefined object', function() {
    it('should return null', function() {
      assert.isNull(nested.get(undefined, 'test'), null)
    });
  });

  describe('[0][1].name', function() {
    it('should return user2', function() {
      assert.equal(nested.get(complexArray, '[0][1].name'), 'user2')
    });
  });

  describe('[0][1].name[12]', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, '[0][1].name[12]'), null)
    });
  });

  describe('[0][1].name[0]', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, '[0][1].name[0]'), null)
    });
  });

  describe('[0][1].fake[-1]', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, '[0][1].fake[-1]'), null)
    });
  });

  describe('[0][1].name[-1]', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, '[0][1].name[-1]'), null)
    });
  });

  describe('[-4].name[-1]', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, '[-4].name[-1]'), null)
    });
  });

  describe('[0][1].geolocation[-4][1]', function() {
    it('should return null', function() {
      assert.isNull(nested.get(complexArray, '[0][1].geolocation[-4][1]'))
    });
  });

  describe('[0][1].geolocation[-1]', function() {
    it('should return null', function() {
      assert.isNull(nested.get(complexArray, '[0][1].geolocation[-1]'))
    });
  });

  describe('[0][1].geolocation[1]', function() {
    it('should return 44', function() {
      assert.equal(nested.get(complexArray, '[0][1].geolocation[1]'), 44)
    });
  });

  describe('[0][1].geolocation[1]', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, '[0][1].geolocation[1][7]'), null)
    });
  });

  describe('name', function() {
    it('should return null', function() {
      assert.equal(nested.get(complexArray, 'name'), null)
    });
  });

});

