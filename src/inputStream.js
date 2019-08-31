module.exports.inputStream = input => {
  let pos = 0;
  let line = 1;
  let col = 0;

  const next = () => {
    const char = input.charAt(pos);
    pos += 1;
    if (char === '\n') {
      line += 1;
      col = 0;
    } else {
      col += 1;
    }
    return char;
  };

  const peek = () => input.charAt(pos);

  const eof = () => peek() === "";

  const croak = msg => {
    throw new Error(msg + " (" + line + ":" + col + ")");
  };

  return {
    next,
    peek,
    eof,
    croak,
  };
};
