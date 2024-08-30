export const defaultDateFormat = "YYYY-MM-DD";
export const defaultTimeFormat = "HH:mm:ss";
export const defaultDateTimeFormat =
  defaultDateFormat + " " + defaultTimeFormat;

export function formatDate(date: Date, format = defaultDateTimeFormat) {
  return format
    .replace(/YYYY/g, () => String(date.getFullYear()))
    .replace(/MM/g, () => String(date.getMonth() + 1).padStart(2, "0"))
    .replace(/DD/g, () => String(date.getDate()).padStart(2, "0"))
    .replace(/HH/g, () => String(date.getHours()).padStart(2, "0"))
    .replace(/mm/g, () => String(date.getMinutes()).padStart(2, "0"))
    .replace(/ss/g, () => String(date.getSeconds()).padStart(2, "0"));
}

export function makeSameDate(time?: string | Date) {
  if (typeof time === "string") {
    time = "00-01-01 " + time;
  } else if (time instanceof Date) {
    time.setFullYear(0);
    time.setMonth(0);
    time.setDate(1);
  }
  return time;
}
