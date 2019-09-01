import { readFileSync } from "fs";

import { parse } from "./parse";

const input = readFileSync("/mnt/e/Projects/interpreter/input.xs", "utf8");
const ast = parse(input);
console.log(ast);
