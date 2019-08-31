const fs = require('fs');
const { InputStream } = require('./InputStream');
const { TokenStream } = require('./TokenStream');

const input = fs.readFileSync('<directory>');

const stream = TokenStream(InputStream(input));

while (!stream.eof()) {
  console.log(stream.next());
}
