import { parse } from "./parse";

const createTest = (code, expectedResult) => {
  test(`parses ${code}`, () => {
    const result = parse(code);
    expect(result).toStrictEqual(expectedResult);
  });
};

createTest("one = 1", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "one", value: 1 }
  ]
});

createTest("one = 1;", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "one", value: 1 }
  ]
});
