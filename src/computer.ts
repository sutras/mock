import { random, pick } from "./utils/common.js";
import {
  extensions,
  letters,
  lowerLetters,
  threeLevelDomains,
  topLevelDomains,
} from "./utils/materials.js";
import { pickMultiChar } from "./utils/string.js";

export function ipv4() {
  return Array(4)
    .fill(0)
    .map(() => random(0, 2 ** 8 - 1))
    .join(".");
}

export function ipv6() {
  return Array(8)
    .fill(0)
    .map(() => random(0, 2 ** 16 - 1).toString(16))
    .join(":");
}

export function mac() {
  return Array(6)
    .fill(0)
    .map(() =>
      random(0, 2 ** 8 - 1)
        .toString(16)
        .padStart(2, "0")
    )
    .join(":");
}

export function fileName() {
  return Math.random().toString(32).slice(-6) + "." + pick(extensions);
}

export function filePath(name?: boolean) {
  let path = "/home/Administrator/Documents/";
  if (name) {
    path += fileName();
  }
  return path;
}

export function extension() {
  return pick(extensions);
}

export function hostname() {
  return (
    pick(threeLevelDomains) +
    "." +
    pickMultiChar(lowerLetters, random(6, 12)) +
    "." +
    pick(topLevelDomains)
  );
}

export function url() {
  return "https://" + hostname() + "/" + pickMultiChar(letters, random(10, 20));
}
