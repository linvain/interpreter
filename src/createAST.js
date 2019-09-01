export const createAST = tokenStream => {
  const prog = [];
  while (!tokenStream.eof()) {
    prog.push(tokenStream.next());
  }
  return prog;
};
