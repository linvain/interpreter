import { TOKEN_TYPES } from './TOKEN_TYPES';

export const TokenStream = input => {
  let current = null;

  const isWhitespace = char => TOKEN_TYPES.WHITESPACE.includes(char);
  const isDigit = char => TOKEN_TYPES.INTEGER.includes(char);
  const isIdent = char => TOKEN_TYPES.IDENT.includes(char);
  const isOperator = char => TOKEN_TYPES.OPERATOR.includes(char);
  const isPunctuation = char => TOKEN_TYPES.PUNCTUATION.includes(char);
  
  const readNext = () => {
    readWhile(isWhitespace);
    if (input.eof()) return null;
    const char = input.peek();
    if (char === "#") return readComment();
    if (isDigit(char)) return readNumber();
    if (isIdent(char)) return readIdent();
    if (isOperator(char)) return readOperator();
    if (isPunctuation(char)) return readPunctuation();
    input.croak("Can't handle character: " + char);
  };

  const readPunctuation = () => {
    const punctuation = input.next();
    return { type: 'PUNCTUATION', value: punctuation };
  };

  const readOperator = () => {
    const operator = input.next();
    return { type: "OPERATOR", value: operator };
  };

  const readIdent = () => {
    const ident = readWhile(isIdent);
    return { type: "IDENT", value: ident };
  };

  const readNumber = () => {
    const numberString = readWhile(isDigit);
    return { type: 'INTEGER', value: Number(numberString)};
  };

  const readComment = () => {
    readWhile(char => char !== "\n");
    input.next();
    return readNext();
  };

  const readWhile = predicate => {
    let str = "";
    while (!input.eof() && predicate(input.peek())) {
      str += input.next();
    }
    return str;
  };

  const next = () => {
    const token = current;
    current = null;
    return token || readNext();
  };

  const peek = () => {
    if (!current) current = readNext();
    return current;
  };

  const eof = () => {
    return peek() === null;
  };

  return {
    next,
    peek,
    eof,
    croak: input.croak,
  };
};
