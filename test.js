var
  _ = require('underscore'),
  expect = require('expect.js'),
  cc = require('./'),
  stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}]

describe('#callChain', function () {
  it('calls object methods', function () {
    expect(cc(_.chain(stooges), {
      sortBy: function(stooge) {return stooge.age},
      map: function(stooge) {return stooge.name + ' is ' + stooge.age},
      first: null,
      value: null
    })).to.equal('moe is 21')
  })
})
