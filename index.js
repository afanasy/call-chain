module.exports = function (d, data) {
  var r = d
  for (key in data)
    if (typeof d[key] == 'function')
      r = r[key](data[key])
  return r
}
