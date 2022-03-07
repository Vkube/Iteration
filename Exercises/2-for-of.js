'use strict';

const sum = (...args) => {
  let sum = 0;
  for (const iterator of args) {
    sum += iterator;
  }
  return sum;
};

module.exports = { sum };
