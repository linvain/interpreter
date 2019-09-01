import { parse } from "./parse";

const testAST = (code, expectedResult) => {
  test(`parses "${code}"`, () => {
    const result = parse(code);
    expect(result).toStrictEqual(expectedResult);
  });
};

testAST("age = 21", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 }
  ]
});

testAST("age = 21;", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 }
  ]
});

testAST("name = 'Evgeny'", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

testAST("name = 'Evgeny';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

testAST("age = 21; name = 'Evgeny'", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 },
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

testAST("age = 21; name = 'Evgeny';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 },
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});
