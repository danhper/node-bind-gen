'use strict';

module.exports = function (fn, context) {
  var baseArgs = Array.prototype.slice.call(arguments, 2);
  return function *() {
    var args = baseArgs.concat(Array.prototype.slice.call(arguments));
    return yield fn.apply(context, args);
  };
};
