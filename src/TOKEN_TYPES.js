export const TOKEN_TYPES = {
  PUNCTUATION: ';'.split(''),
  IDENT: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
  COMMENT: '#'.split(''),
  STRING_CONTENT: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_`{|}~ '.split(''),
  STRING_DELIMITER: '"'.split(''),
  INTEGER: '0123456789'.split(''),
  WHITESPACE: '\n '.split(''),
  OPERATOR: '='.split(''),
};
