'use strict';

var expect = require('chai').expect;
var co     = require('co');

var bindGen = require('..');

var promiseFunction = function () {
  return new Promise(function (resolve) {
    return resolve(this.v);
  }.bind(this));
};

var noArgsNoYield = function *() {
  return this.v;
};

var noArgsYield = function *() {
  return this.v;
};

var argsNoYield = function *(a, b) {
  return this.v + a + b;
};

var argsYield = function *(a, b) {
  return this.v + a + b;
};

describe('lodash-bind-gen', function () {
  it('should work', function () {
    return co(function *() {
      expect(yield bindGen(promiseFunction, {v: 1})()).to.eq(1);
      expect(yield bindGen(noArgsNoYield, {v: 1})()).to.eq(1);
      expect(yield bindGen(noArgsNoYield, {v: 1})()).to.eq(1);
      expect(yield bindGen(noArgsYield, {v: 1})()).to.eq(1);
      expect(yield bindGen(argsNoYield, {v: 1})(1, 2)).to.eq(4);
      expect(yield bindGen(argsNoYield, {v: 1}, 1)(2)).to.eq(4);
      expect(yield bindGen(argsNoYield, {v: 1}, 1, 2)()).to.eq(4);
      expect(yield bindGen(argsYield, {v: 1})(1, 2)).to.eq(4);
      expect(yield bindGen(argsYield, {v: 1}, 1)(2)).to.eq(4);
      expect(yield bindGen(argsYield, {v: 1}, 1, 2)()).to.eq(4);
    });
  });
});
