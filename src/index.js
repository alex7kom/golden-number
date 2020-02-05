var goldenRatio = (Math.sqrt(5) + 1) / 2;

/**
 * Create Golden ratio based number generator function.
 *
 * Returns a function that will return a new number on each call.
 *
 * @param {number} [seed] A float number between `0` and `1`.
 * Default is a random number from `Math.random()`
 *
 * @return {function(): number} Generator function
 *
 * @example
 * var generator = createGenerator();
 * var num = generator(); //=> 0.70693204169029
 *
 */
function createGenerator(seed) {
  var v = seed == null ? Math.random() : seed;

  return function() {
    v = (v + goldenRatio) % 1;

    return v;
  };
}

module.exports = createGenerator;
