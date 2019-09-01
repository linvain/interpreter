import { CHAR_TYPES } from "./CHAR_TYPES";

export const TokenStream = input => {
  let current = null;

  const isWhitespace = char => CHAR_TYPES.WHITESPACE.includes(char);
  const isDigit = char => CHAR_TYPES.INTEGER.includes(char);
  const isIdent = char => CHAR_TYPES.IDENT.includes(char);
  const isOperator = char => CHAR_TYPES.OPERATOR.includes(char);
  const isPunctuation = char => CHAR_TYPES.PUNCTUATION.includes(char);
  const isStringDelimiter = char => CHAR_TYPES.STRING_DELIMITER.includes(char);
  const isStringContent = char => CHAR_TYPES.STRING_CONTENT.includes(char);
  
  const readNext = () => {
    readWhile(isWhitespace);
    if (input.eof()) return null;
    const char = input.peek();
    if (char === "#") return readComment();
    if (isDigit(char)) return readNumber();
    if (isIdent(char)) return readIdent();
    if (isOperator(char)) return readOperator();
    if (isPunctuation(char)) return readPunctuation();
    if (isStringDelimiter(char)) return readString();
    input.croak(`Can't handle character "${char}"`);
  };

  const readString = () => {
    input.next(); // skip quote
    const stringContent = readWhile(isStringContent);
    const maybeEndDelimiter = input.next();
    if (isStringDelimiter(maybeEndDelimiter)) {
      return { type: "STRING", value: stringContent };
    } else {
      input.croak(`"${maybeEndDelimiter}" doesn't match string content or delimiter`);
    }
  };

  const readPunctuation = () => {
    const punctuation = input.next();
    return { type: "PUNCTUATION", value: punctuation };
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
    return { type: "INTEGER", value: Number(numberString)};
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
