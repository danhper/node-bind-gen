# node-bind-gen [![Build Status](https://travis-ci.org/tuvistavie/node-bind-gen.svg)](https://travis-ci.org/tuvistavie/node-bind-gen)

A simple helper function to use `bind` with generator functions.
It works like [lodash](http://lodash.com) `bind` function, or the
built-in `bind`, but takes and returns a generator function
instead of a normal one.

## Installation

```sh
$ npm install bind-gen
```

## Example

```javascript
var co      = require('co');
var bindGen = require('bind-gen');

var myGenerator = function *(myArg, myOtherArg) {
  console.log(this.v);
  console.log(myArg);
  console.log(myOtherArg);
};

var context = {v: 'the-context'};
var boundGenerator = bindGen(myGenerator, context, 'arg');

co(boundGenerator('other arg'));
// will print:
// the-context
// arg
// other arg
```


