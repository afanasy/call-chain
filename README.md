Method chain as an object

## What it does?
It calls object methods and arguments represented as another object, with keys being methods names and values - methods arguments, replacing js native [method chaining](https://en.wikipedia.org/wiki/Method_chaining).

## When is this useful?
This is useful when you want to put method chain in the db or transmit it using JSON.

## Example
### Init
```js
var cc = require('call-chain')
```
### Jquery
```js
//original chain
$('<a>').
  attr('href', '#').
  addClass('btn btn-default')
//using cc
cc($('<a>'), {
  attr: {href: '#'},
  addClass: 'btn btn-default'
})
```
### Underscore
```js
var stooges = [
  {name: 'curly', age: 25},
  {name: 'moe', age: 21},
  {name: 'larry', age: 23}
]
//original chain
_.chain(stooges).
  sortBy(stooge, 'age').
  map(stooge => stooge.name + ' is ' + stooge.age).
  first().
  value()
//using cc
cc(_.chain(stooges), {
  sortBy: 'age',
  map: stooge => stooge.name + ' is ' + stooge.age,
  first: undefined,
  value: undefined
})
```
### Moment
```js
//original chain
moment().
  add({days: 1}).
  format('YYYY-MM-DD hh:mm:ss')
//using cc
cc(moment(), {
  add: {days: 1},
  format: 'YYYY-MM-DD hh:mm:ss'
})
```
