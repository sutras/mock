import { pick } from "./utils/common.js";
import {
  businessScope,
  companyName,
  companyTypes,
  departments,
  industries,
  topCities,
} from "./utils/materials.js";

export function company() {
  return (
    pick(topCities) +
    pick(companyName) +
    pick(businessScope) +
    pick(companyTypes)
  );
}

export function department() {
  return pick(departments);
}

export function industry() {
  return pick(industries);
}
