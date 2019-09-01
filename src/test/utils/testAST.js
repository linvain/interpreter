import { parse } from "../../parse";

const _pipe = (f, g) => (...args) => g(f(...args));

const pipe = (...fns) => fns.reduce(_pipe);

export const testAST = (code, expectedResult) => {
  const format = pipe(
    code => code.charAt(0) === "\n" ? code : "\n" + code,
    code => code.replace(/\n$/, ""),
    code => code.replace(/\n/g, "\n\t")
  );
  test(`parses ${format(code)}`, () => {
    const result = parse(code);
    expect(result).toStrictEqual(expectedResult);
  });
};
