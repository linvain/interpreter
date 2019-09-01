export const createAST = tokenStream => {
  const prog = [];
  while (!tokenStream.eof()) {
    const token = tokenStream.next();
    if (token.type === "IDENT") {
      const name = token.value;
      if (tokenStream.next().type === "OPERATOR") {
        return { type: "DECLARATION", name, value: tokenStream.next().value };
      }
    }
    prog.push();
  }
  return prog;
};
