let sum = require('./sum');

describe('Sum function', () => {
  test('should add 1 plus 3 to give 4', () => {
    expect(sum(1, 3)).toBe(4);
  });
});
