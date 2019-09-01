import { parse } from './parse';

test('parses "one = 1;"', () => {
  const expected = [
    { type: 'IDENT', value: 'one' },
    { type: 'OPERATOR', value: '=' },
    { type: 'INTEGER', value: 1 },
    { type: 'PUNCTUATION', value: ';' }
  ];

  expect(parse("one = 1;")).toStrictEqual(expected);
});
