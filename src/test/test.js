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

testAST("age = 21; name = 'Evgeny';", {
  type: "PROGRAM",
  body: [
    { type: "DECLARATION", name: "age", value: 21 },
    { type: "DECLARATION", name: "name", value: "Evgeny" }
  ]
});
