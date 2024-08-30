import { random, pick } from "./utils/common.js";
import {
  defaultDateFormat,
  defaultTimeFormat,
  formatDate,
  makeSameDate,
} from "./utils/date.js";
import { numbers16 } from "./utils/materials.js";
import { pickMultiChar } from "./utils/string.js";

export function number(min = 0, max = 1000, decimal = 0) {
  return random(min, max, decimal);
}

export function boolean() {
  return pick([true, false]);
}

export function enumerate(array: any[]) {
  return array[random(0, array.length - 1)];
}

export function text(min?: number, max?: number) {
  const count = random(min ?? 100, max ?? 500);
  let result = "";
  let numWord = 0;
  let numMaxWord = random(5, 25);

  for (let i = 0; i < count; i++) {
    result += String.fromCharCode(random(0x4e00, 0x9fa5));
    numWord++;
    if (numWord === numMaxWord && count - i >= 5) {
      numWord = 0;
      result += "，";
      numMaxWord = random(5, 15);
    }
  }
  return result + "。";
}

export function array<T extends any = any>(
  count: number,
  callback: (index: number) => T
) {
  return Array(count)
    .fill(0)
    .map((_, index) => {
      return callback(index);
    });
}

export function datetime(min?: string | Date, max?: string | Date) {
  const date = new Date(
    random(
      new Date(min ?? new Date(1970, 0, 1)).getTime(),
      new Date(max ?? new Date(2099, 11, 31, 23, 59, 59)).getTime()
    )
  );
  return formatDate(date);
}

export function date(min?: string | Date, max?: string | Date) {
  const date = new Date(
    random(
      new Date(min ?? new Date(1970, 0, 1)).getTime(),
      new Date(max ?? new Date(2099, 11, 31)).getTime()
    )
  );
  return formatDate(date, defaultDateFormat);
}

export function time(min?: string | Date, max?: string | Date) {
  const date = new Date(
    random(
      new Date(makeSameDate(min) ?? new Date(0, 0, 1)).getTime(),
      new Date(makeSameDate(max) ?? new Date(0, 0, 1, 23, 59, 59)).getTime()
    )
  );
  return formatDate(date, defaultTimeFormat);
}

export function uuid() {
  return [
    pickMultiChar(numbers16, 8),
    pickMultiChar(numbers16, 4),
    pickMultiChar(numbers16, 4),
    pickMultiChar(numbers16, 4),
    pickMultiChar(numbers16, 12),
  ].join("-");
}

export function createId(start = 0, step = 1) {
  return () => {
    return (start += step);
  };
}
