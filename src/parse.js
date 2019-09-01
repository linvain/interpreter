import { InputStream } from "./InputStream";
import { TokenStream } from "./TokenStream";
import { createAST } from "./createAST";

export const parse = input => {
  const inputStream = InputStream(input);
  const tokenStream = TokenStream(inputStream);
  const ast = createAST(tokenStream);
  return ast;
};
