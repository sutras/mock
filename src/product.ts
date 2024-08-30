import { random, pick } from "./utils/common.js";
import {
  colors,
  numbers,
  productCategories,
  productNames,
  sizes,
  upperLetters,
} from "./utils/materials.js";
import { pickMultiChar } from "./utils/string.js";

export function productCategory() {
  return pick(productCategories);
}

export function productName() {
  return pick(productNames);
}

export function color() {
  return pick(colors);
}

export function size() {
  return pick(sizes);
}

export function weight() {
  return random(0.5, 20, 1) + "kg";
}

export function barcode() {
  return pickMultiChar(numbers, 13);
}

export function sku() {
  return (
    pickMultiChar(upperLetters, 2) +
    "-" +
    pickMultiChar(upperLetters, 2) +
    "-" +
    pickMultiChar(numbers, 4) +
    "-" +
    pickMultiChar(upperLetters, 1)
  );
}
