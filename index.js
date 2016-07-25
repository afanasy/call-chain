var forEach = require('lodash.foreach')
var isFunction = require('lodash.isfunction')

module.exports = function (d, data) {
  var r = d
  forEach(data, function (value, key) {
    if (isFunction(d[key]))
      r = r[key](value)
  })
  return r
}
