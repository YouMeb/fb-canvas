'use strict';

module.exports = RequestAble;

function RequestAble() {}

RequestAble.prototype = {
  get uri() {
    throw new Error('Not Yet Implemented');
  },

  getParameters: function () {
    throw new Error('Not Yet Implemented');
  }
};
