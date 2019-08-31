import fs from 'fs';
import { InputStream } from './InputStream';
import { TokenStream } from './TokenStream';

const input = fs.readFileSync('/mnt/e/Projects/interpreter/input.xs', "utf8");
const inputStream = InputStream(input);
const tokenStream = TokenStream(inputStream);

while (!tokenStream.eof()) {
  console.log(tokenStream.next());
}
