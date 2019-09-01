import { parse } from "../../parse";

export const testAST = (code, expectedResult) => {
  test(`parses "${code}"`, () => {
    const result = parse(code);
    expect(result).toStrictEqual(expectedResult);
  });
};
