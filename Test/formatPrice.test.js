const formatPrice = require("./formatPrice.js");



describe('formatPrice()', () => {
  test('formats price with rounding to 2 decimal places', () => {
    expect(formatPrice(100.558)).toBe('$100.56');
  });

  test('formats integer price with two decimal places', () => {
    expect(formatPrice(50)).toBe('$50.00');
  });
});