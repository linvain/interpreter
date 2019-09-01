export const createAST = tokenStream => {
  const expectNext = (...types) => {
    const nextType = tokenStream.peek().type;
    if (!types.includes(nextType)) {
      tokenStream.croak(`Not expected type ${nextType}, expected ${types}`);
    }
  };

  const matchNext = object => {
    const nextType = tokenStream.peek().type;
    const handler = object[nextType];
    if (handler === undefined) {
      tokenStream.croak(`Not expected type ${nextType}, expected ${Object.keys(object)}`);
    } else {
      handler();
    }
  };

  var program = [];
  while (!tokenStream.eof()) {
    const token = tokenStream.next();
    if (token.type === "IDENT") {
      expectNext("OPERATOR");
      const name = token.value;
      tokenStream.next();
      matchNext({
        INTEGER: () => program.push({ type: "DECLARATION", name, value: tokenStream.next().value }),
        STRING: () => program.push({ type: "DECLARATION", name, value: tokenStream.next().value }),
        BOOL: () => program.push({ type: "DECLARATION", name, value: tokenStream.next().value }),
        IDENT: () => program.push({ type: "DECLARATION", name, value: {
          type: "IDENT",
          name: tokenStream.next().value
        }}),
      });
    }
  }
  return { type: "PROGRAM", body: program };
};
