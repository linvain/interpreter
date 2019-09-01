import { parse } from "./parse";

const createTest = (code, expectedResult) => {
  test(`parses "${code}"`, () => {
    const result = parse(code);
    expect(result).toStrictEqual(expectedResult);
  });
};

createTest("age = 21", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 }
  ]
});

createTest("age = 21;", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 }
  ]
});

createTest("name = 'Evgeny'", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

createTest("name = 'Evgeny';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

createTest("age = 21; name = 'Evgeny'", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 },
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

createTest("age = 21; name = 'Evgeny';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 },
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});
