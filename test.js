var _ = require('underscore')
var cc = require('./')
var stooges = [{name: 'curly', age: 25}, {name: 'moe', age: 21}, {name: 'larry', age: 23}]

describe('#callChain', () => {
  it('calls object methods', done => {
    done(cc(_.chain(stooges), {
      sortBy: 'age',
      map: stooge => stooge.name + ' is ' + stooge.age,
      first: undefined,
      value: undefined
    }) != 'moe is 21')
  })
})
