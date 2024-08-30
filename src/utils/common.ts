export function integer(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function decimal(min: number, max: number, numDecimal: number) {
  const n = Math.pow(10, numDecimal);
  return Math.floor((Math.random() * (max - min) + min) * n) / n;
}

export function random(min: number, max: number, numDecimal = 0) {
  return numDecimal === 0 ? integer(min, max) : decimal(min, max, numDecimal);
}

export function pick<T extends any = any>(
  target: string | any[] | Record<PropertyKey, any>
): T {
  if (typeof target === "string" || Array.isArray(target)) {
    return target[random(0, target.length - 1)];
  }
  return target[pick(Object.keys(target))];
}

export function shuffle(array: any[]) {
  const copy = [...array];
  const result: any[] = [];
  while (copy.length) {
    result.push(...copy.splice(random(0, copy.length - 1), 1));
  }
  return result;
}
