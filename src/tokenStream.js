const { TOKEN_TYPES } = require('./TOKEN_TYPES');

module.exports.tokenStream = input => {
  let current = null;

  const isWhitespace = char => TOKEN_TYPES.WHITESPACE.includes(char);
  const isDigit = char => TOKEN_TYPES.INTEGER.includes(char);
  const isIdent = char => TOKEN_TYPES.IDENT.includes(char);
  const isOperator = char => TOKEN_TYPES.OPERATOR.includes(char);

  const readNext = () => {
    readWhile(isWhitespace);
    if (input.eof()) return null;
    const char = input.peek();
    if (char === "#") return readComment();
    if (isDigit(char)) return readNumber();
    if (isIdent(char)) return readIdent();
    if (isOperator(char)) return readOperator();
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
};
