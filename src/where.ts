import {
  type Node,
  getRegionData,
  mapCities,
  mapCounties,
  mapProvinces,
} from "region-data";
import { random, pick } from "./utils/common.js";
import { regions } from "./utils/materials.js";

const regionData = getRegionData();

export function region() {
  return pick(regions);
}

export function province() {
  return pick(mapProvinces);
}

export function city() {
  return pick(mapCities);
}

export function county() {
  return pick(mapCounties);
}

export function address() {
  const province = pick<Node>(regionData);
  const city = pick<Node>(province.children);
  const county = pick<Node>(city.children);
  const street = "模拟" + random(1, 50) + "街道";
  const road = "模拟" + random(1, 50) + "路";
  const number = random(1, 50) + "号";
  const building = random(1, 50) + "栋";
  const floor = random(40, 400) + "层";
  const room = random(1, 50) + "室";

  return (
    province.name +
    city.name +
    county.name +
    street +
    road +
    number +
    building +
    floor +
    room
  );
}
