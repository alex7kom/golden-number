'use strict';

const createGenerator = require('./');

test('created generator returns a number', () => {
  const generator = createGenerator();

  expect(typeof generator()).toEqual('number');
});

test('generator created with a seed returns a correct number', () => {
  const generator = createGenerator(0);

  expect(generator()).toEqual(0.6180339887498949);
});
