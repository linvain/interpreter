export const createAST = tokenStream => {
  const expectNext = (...types) => {
    const next = tokenStream.peek().type;
    if (!types.includes(next)) {
      tokenStream.croak(`Not expected type ${next}, expected ${types}`);
    }
  };

  var program = [];
  while (!tokenStream.eof()) {
    const token = tokenStream.next();
    if (token.type === "IDENT") {
      expectNext("OPERATOR");
      const name = token.value;
      tokenStream.next();
      expectNext("INTEGER");
      program.push({ type: "DECLARATION", name, value: tokenStream.next().value });
    }
  }
  return { type: "PROGRAM", body: program };
};
