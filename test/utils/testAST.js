import { parse } from "../../src/parse";

export const testAST = (code, expectedResult) => {
  test(`parses "${code}"`, () => {
    const result = parse(code);
    expect(result).toStrictEqual(expectedResult);
  });
};
