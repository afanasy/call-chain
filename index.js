var _ = require('underscore')

module.exports = function (d, data) {
  var r = d
  _.each(data, function (value, key) {
    if (_.isFunction(d[key]))
      r = r[key](value)
  })
  return r
}
