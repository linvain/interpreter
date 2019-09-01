import fs from 'fs';
import { parse } from './parse';

const input = fs.readFileSync('/mnt/e/Projects/interpreter/input.xs', "utf8");

const ast = parse(input);

console.log(ast);
