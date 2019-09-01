import { testAST } from "./utils/testAST";

testAST("age = 21;", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 }
  ]
});

testAST("name = 'Evgeny';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});

testAST("isHuman = true;", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "isHuman", value: true }
  ]
});

testAST("age = 21; name = 'Evgeny'; isHuman = true;", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 },
    { type: "DECLARATION", name: "name", value: "Evgeny" },
    { type: "DECLARATION", name: "isHuman", value: true }
  ]
});
