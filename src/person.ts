import { pick, random } from "./utils/common.js";
import { formatDate } from "./utils/date.js";
import {
  appellations,
  femaleFirstNames,
  maleFirstNames,
  lastNames,
  maritalStatus,
  genders,
  numbers,
  enLastNames,
  enGenders,
  enMaleFirstNames,
  enFemaleFirstNames,
  emailDomains,
  numbersx,
  professions,
} from "./utils/materials.js";
import { pickMultiChar } from "./utils/string.js";

export function lastName() {
  return pick(lastNames);
}

export function firstName(gender?: "男" | "女") {
  switch (gender) {
    case "男":
      return pick(maleFirstNames);
    case "女":
      return pick(femaleFirstNames);
    default:
      return pick(pick([maleFirstNames, femaleFirstNames]));
  }
}

export function name(gender?: "男" | "女") {
  return lastName() + firstName(gender);
}

export function gender(): "男" | "女" {
  return pick(genders);
}

export function enLastName() {
  return pick(enLastNames);
}

export function enFirstName(gender?: "male" | "female") {
  switch (gender) {
    case "male":
      return pick(enMaleFirstNames);
    case "female":
      return pick(enFemaleFirstNames);
    default:
      return pick(pick([enMaleFirstNames, enFemaleFirstNames]));
  }
}

export function enName(gender?: "male" | "female") {
  return enFirstName(gender) + " " + enLastName();
}

export function enGender(): "male" | "female" {
  return pick(enGenders);
}

export function appellation() {
  return pick(appellations);
}

export function marital() {
  return pick(maritalStatus);
}

export function mobile() {
  return `1${random(3, 9)}${pickMultiChar(numbers, 9)}`;
}

export function landline() {
  return `0${random(10, 999)}-${pickMultiChar(numbers, random(7, 8))}`;
}

export function email() {
  return enFirstName() + "." + enLastName() + "@" + pick(emailDomains);
}

export function idCardNo() {
  return (
    String(random(11, 99)) +
    random(1, 99).toString().padStart(2, "0") +
    random(1, 99).toString().padStart(2, "0") +
    formatDate(
      new Date(
        random(new Date(1900, 0, 1).getTime(), new Date(2020, 12, 31).getTime())
      ),
      "YYYYMMDD"
    ) +
    random(1, 999).toString().padStart(3, "0") +
    pick(numbersx)
  );
}

export function profession() {
  return pick(professions);
}

export function bankCardNo() {
  return "62" + pickMultiChar(numbers, 17);
}
