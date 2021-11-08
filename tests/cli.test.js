const cli = require('../cli');

test('not added argument should not be stored', () => {
  expect(cli.getArg('-b')).toBeNull();
});

test('added argument should be stored', () => {
  cli.setArg('-b', '3');
  expect(cli.getArg('-b')).toBe('3');
});
