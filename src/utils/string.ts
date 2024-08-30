import { pick } from "./common.js";

export function splitWord(string: string) {
  return string
    .split(/[^a-zA-Z0-9$]+/)
    .map((item) => item.split(/([A-Z][^A-Z]*)/))
    .flat()
    .filter(Boolean);
}

export function lowerFirst(string: string) {
  return string.replace(/^[A-Z]/, (m) => m.toLowerCase());
}

export function upperFirst(string: string) {
  return string.replace(/^[a-z]/, (m) => m.toUpperCase());
}

export function pascalCase(string: string) {
  return splitWord(string)
    .map((item) => upperFirst(item.toLowerCase()))
    .join("");
}

export function camelCase(string: string) {
  return lowerFirst(pascalCase(string));
}

export function capitalize(string: string) {
  return upperFirst(string.toLowerCase());
}

export function kebabCase(string: string) {
  return splitWord(string)
    .map((item) => item.toLowerCase())
    .join("-");
}

export function pickMultiChar(string: string, count: number) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += pick(string);
  }
  return result;
}
