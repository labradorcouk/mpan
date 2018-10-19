const { isValid } = require('./mpan');

test('valid mpan', () => {
  expect(isValid('1200027969651')).toBe(true);
});

test('non valid mpan', () => {
  expect(isValid('2310000000481')).toBe(false);
});

test('non isValid (empty) mpan', () => {
  expect(isValid('')).toBe(false);
});

test('non isValid (undefined) mpan', () => {
  expect(isValid(undefined)).toBe(false);
});
