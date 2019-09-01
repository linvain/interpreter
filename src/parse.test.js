import { parse } from "./parse";

const createTest = (code, expectedResult) => {
  test(`parses "${code}"`, () => {
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

createTest("string = 'string'", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "string", value: "string" }
  ]
});

createTest("string = 'string';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "string", value: "string" }
  ]
});

createTest("one = 1; string = 'string'", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "one", value: 1 },
    { type: "DECLARATION", name: "string", value: "string" }
  ]
});

createTest("one = 1; string = 'string';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "one", value: 1 },
    { type: "DECLARATION", name: "string", value: "string" }
  ]
});
