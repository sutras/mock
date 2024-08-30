import { describe, expect, it } from "vitest";
import * as mock from "../src/index";
import {
  appellations,
  businessScope,
  colors,
  companyName,
  companyTypes,
  departments,
  emailDomains,
  enFemaleFirstNames,
  enGenders,
  enLastNames,
  enMaleFirstNames,
  extensions,
  femaleFirstNames,
  genders,
  industries,
  lastNames,
  maleFirstNames,
  maritalStatus,
  productCategories,
  productNames,
  professions,
  regions,
  sizes,
  threeLevelDomains,
  topCities,
  topLevelDomains,
} from "../src/utils/materials";
import { mapCities, mapCounties, mapProvinces } from "region-data";

function repeat(count: number, callback: () => void) {
  Array(count)
    .fill(0)
    .forEach(() => {
      callback();
    });
}

describe("mock", () => {
  it("number", () => {
    repeat(1000, () => {
      const result = mock.number(0, 1000);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1000);
      expect(result).match(/^\d{1,4}$/);
    });
  });

  it("number float", () => {
    repeat(1000, () => {
      const result = mock.number(0, 1000, 2);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThanOrEqual(1001);
      expect(result).match(/^\d{1,4}(?:\.\d{1,2})?$/);
    });
  });

  it("boolean", () => {
    repeat(100, () => {
      expect(mock.boolean()).match(/^(true|false)$/);
    });
  });

  it("array", () => {
    expect(
      mock.array(4, (index) => {
        return index;
      })
    ).toEqual([0, 1, 2, 3]);
  });

  it("enumerate", () => {
    repeat(100, () => {
      expect(mock.enumerate(["first", "second", "third"])).match(
        /^(first|second|third)$/
      );
    });
  });

  it("datetime", () => {
    repeat(100, () => {
      expect(mock.datetime()).match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });
  });

  it("datetime range", () => {
    repeat(100, () => {
      const result = mock.datetime(
        "2000-01-01 00:00:00",
        "2050-12-31 23:59:59"
      );
      expect(new Date(result).getTime()).toBeGreaterThanOrEqual(
        new Date("2000-01-01 00:00:00").getTime()
      );
      expect(new Date(result).getTime()).toBeLessThanOrEqual(
        new Date("2050-12-31 23:59:59").getTime()
      );
      expect(result).match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });
  });

  it("datetime range date", () => {
    repeat(100, () => {
      const result = mock.datetime(
        new Date(2000, 0, 1, 0, 0, 0),
        new Date(2050, 11, 31, 23, 59, 59)
      );
      expect(new Date(result).getTime()).toBeGreaterThanOrEqual(
        new Date(2000, 0, 1, 0, 0, 0).getTime()
      );
      expect(new Date(result).getTime()).toBeLessThanOrEqual(
        new Date(2050, 11, 31, 23, 59, 59).getTime()
      );
      expect(result).match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
    });
  });

  it("date", () => {
    repeat(100, () => {
      expect(mock.date()).match(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it("date range", () => {
    repeat(100, () => {
      const result = mock.date("2000-01-01", "2050-12-31");
      expect(new Date(result).getTime()).toBeGreaterThanOrEqual(
        new Date("2000-01-01").getTime()
      );
      expect(new Date(result).getTime()).toBeLessThanOrEqual(
        new Date("2050-12-31").getTime()
      );
      expect(result).match(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it("date range date", () => {
    repeat(100, () => {
      const result = mock.date(new Date(2000, 0, 1), new Date(2050, 11, 31));
      expect(new Date(result).getTime()).toBeGreaterThanOrEqual(
        new Date(2000, 0, 1).getTime()
      );
      expect(new Date(result).getTime()).toBeLessThanOrEqual(
        new Date(2050, 11, 31).getTime()
      );
      expect(result).match(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it("time", () => {
    repeat(100, () => {
      expect(mock.time()).match(/^\d{2}:\d{2}:\d{2}$/);
    });
  });

  it("time range", () => {
    repeat(100, () => {
      const result = mock.time("09:00:00", "18:00:00");
      expect(new Date("0000-01-01 " + result).getTime()).toBeGreaterThanOrEqual(
        new Date("0000-01-01 09:00:00").getTime()
      );
      expect(new Date("0000-01-01 " + result).getTime()).toBeLessThanOrEqual(
        new Date("0000-01-01 18:00:00").getTime()
      );
      expect(result).match(/^\d{2}:\d{2}:\d{2}$/);
    });
  });

  it("time range date", () => {
    repeat(100, () => {
      const result = mock.time(
        new Date(2000, 0, 1, 9, 0, 0),
        new Date(2000, 0, 1, 18, 0, 0)
      );
      expect(new Date("2000-01-01 " + result).getTime()).toBeGreaterThanOrEqual(
        new Date(2000, 0, 1, 9, 0, 0).getTime()
      );
      expect(new Date("2000-01-01 " + result).getTime()).toBeLessThanOrEqual(
        new Date(2000, 0, 1, 18, 0, 0).getTime()
      );
      expect(result).match(/^\d{2}:\d{2}:\d{2}$/);
    });
  });

  it("text", () => {
    repeat(100, () => {
      const numMaxSymbel = 1000 / 5 + 1;
      expect(mock.text(100, 1000)).match(
        new RegExp(`^[\\u4e00-\\u9fa5，。]{100,${1000 + numMaxSymbel}}$`)
      );
    });
  });

  it("uuid", () => {
    repeat(100, () => {
      expect(mock.uuid()).match(
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
      );
    });
  });

  it("createId", () => {
    const id = mock.createId();
    expect(id()).toBe(1);
    expect(id()).toBe(2);
    expect(id()).toBe(3);
  });

  it("createId skip step", () => {
    const id = mock.createId(10, 2);
    expect(id()).toBe(12);
    expect(id()).toBe(14);
    expect(id()).toBe(16);
  });

  it("name", () => {
    repeat(100, () => {
      expect(mock.name()).match(
        new RegExp(
          `^(?:${lastNames.join("|")})(?:${maleFirstNames
            .concat(femaleFirstNames)
            .join("|")})$`
        )
      );
    });
  });

  it("name male", () => {
    repeat(100, () => {
      expect(mock.name("男")).match(
        new RegExp(
          `^(?:${lastNames.join("|")})(?:${maleFirstNames.join("|")})$`
        )
      );
    });
  });

  it("name male", () => {
    repeat(100, () => {
      expect(mock.name("女")).match(
        new RegExp(
          `^(?:${lastNames.join("|")})(?:${femaleFirstNames.join("|")})$`
        )
      );
    });
  });

  it("lastName", () => {
    repeat(100, () => {
      expect(mock.lastName()).match(new RegExp(`^(?:${lastNames.join("|")})$`));
    });
  });

  it("firstName", () => {
    repeat(100, () => {
      expect(mock.firstName()).match(
        new RegExp(`^(?:${maleFirstNames.concat(femaleFirstNames).join("|")})$`)
      );
    });
  });

  it("firstName male", () => {
    repeat(100, () => {
      expect(mock.firstName("男")).match(
        new RegExp(`^(?:${maleFirstNames.join("|")})$`)
      );
    });
  });

  it("firstName female", () => {
    repeat(100, () => {
      expect(mock.firstName("女")).match(
        new RegExp(`^(?:${femaleFirstNames.join("|")})$`)
      );
    });
  });

  it("gender", () => {
    repeat(100, () => {
      expect(mock.gender()).match(new RegExp(`^(?:${genders.join("|")})$`));
    });
  });

  it("enName", () => {
    repeat(100, () => {
      expect(mock.enName()).match(
        new RegExp(
          `^(?:${enMaleFirstNames
            .concat(enFemaleFirstNames)
            .join("|")}) (?:${enLastNames.join("|")})$`
        )
      );
    });
  });

  it("enName male", () => {
    repeat(100, () => {
      expect(mock.enName("male")).match(
        new RegExp(
          `^(?:${enMaleFirstNames.join("|")}) (?:${enLastNames.join("|")})$`
        )
      );
    });
  });

  it("enName male", () => {
    repeat(100, () => {
      expect(mock.enName("female")).match(
        new RegExp(
          `^(?:${enFemaleFirstNames.join("|")}) (?:${enLastNames.join("|")})$`
        )
      );
    });
  });

  it("enLastName", () => {
    repeat(100, () => {
      expect(mock.enLastName()).match(
        new RegExp(`^(?:${enLastNames.join("|")})$`)
      );
    });
  });

  it("enFirstName", () => {
    repeat(100, () => {
      expect(mock.enFirstName()).match(
        new RegExp(
          `^(?:${enMaleFirstNames.concat(enFemaleFirstNames).join("|")})$`
        )
      );
    });
  });

  it("enFirstName male", () => {
    repeat(100, () => {
      expect(mock.enFirstName("male")).match(
        new RegExp(`^(?:${enMaleFirstNames.join("|")})$`)
      );
    });
  });

  it("enFirstName female", () => {
    repeat(100, () => {
      expect(mock.enFirstName("female")).match(
        new RegExp(`^(?:${enFemaleFirstNames.join("|")})$`)
      );
    });
  });

  it("enGender", () => {
    repeat(100, () => {
      expect(mock.enGender()).match(new RegExp(`^(?:${enGenders.join("|")})$`));
    });
  });

  it("appellation", () => {
    repeat(100, () => {
      expect(mock.appellation()).match(
        new RegExp(`^(?:${appellations.join("|")})$`)
      );
    });
  });

  it("marital", () => {
    repeat(100, () => {
      expect(mock.marital()).match(
        new RegExp(`^(?:${maritalStatus.join("|")})$`)
      );
    });
  });

  it("mobile", () => {
    repeat(100, () => {
      expect(mock.mobile()).match(/^1[3-9][0-9]{9}$/);
    });
  });

  it("landline", () => {
    repeat(100, () => {
      expect(mock.landline()).match(/^0[0-9]{2,3}-[0-9]{7,8}$/);
    });
  });

  it("email", () => {
    repeat(100, () => {
      expect(mock.email()).match(
        new RegExp(`^[a-zA-Z.]+@(?:${emailDomains.join("|")})$`)
      );
    });
  });

  it("idCardNo", () => {
    repeat(100, () => {
      expect(mock.idCardNo()).match(/^[0-9x]{18}$/);
    });
  });

  it("profession", () => {
    repeat(100, () => {
      expect(mock.profession()).match(
        new RegExp(`^(?:${professions.join("|")})$`)
      );
    });
  });

  it("bankCardNo", () => {
    repeat(100, () => {
      expect(mock.bankCardNo()).match(/^[0-9]{19}$/);
    });
  });

  it("company", () => {
    repeat(100, () => {
      expect(mock.company()).match(
        new RegExp(
          `^(?:${topCities.join("|")})(?:${companyName.join(
            "|"
          )})(?:${businessScope.join("|")})(?:${companyTypes.join("|")})$`
        )
      );
    });
  });

  it("department", () => {
    repeat(100, () => {
      expect(mock.department()).match(
        new RegExp(`^(?:${departments.join("|")})$`)
      );
    });
  });

  it("industry", () => {
    repeat(100, () => {
      expect(mock.industry()).match(
        new RegExp(`^(?:${industries.join("|")})$`)
      );
    });
  });

  it("region", () => {
    repeat(100, () => {
      expect(mock.region()).match(new RegExp(`^(?:${regions.join("|")})$`));
    });
  });

  const provinces = Object.values(mapProvinces);
  it("province", () => {
    repeat(100, () => {
      expect(mock.province()).match(
        new RegExp(`^(?:${Object.values(provinces).join("|")})$`)
      );
    });
  });

  const cities = Object.values(mapCities);
  it("city", () => {
    repeat(100, () => {
      expect(mock.city()).match(new RegExp(`^(?:${cities.join("|")})$`));
    });
  });

  const counties = Object.values(mapCounties);
  it("county", () => {
    repeat(100, () => {
      expect(mock.county()).match(new RegExp(`^(?:${counties.join("|")})$`));
    });
  });

  it("address", () => {
    repeat(100, () => {
      expect(mock.address()).match(
        new RegExp(
          `^(?:${provinces.join("|")})(?:${cities.join("|")})(?:${counties.join(
            "|"
          )}).+$`
        )
      );
    });
  });

  it("ipv4", () => {
    repeat(100, () => {
      expect(mock.ipv4()).match(/^\d{1,3}(?:\.\d{1,3}){3}$/);
    });
  });

  it("ipv6", () => {
    repeat(100, () => {
      expect(mock.ipv6()).match(/^[0-9a-f]{1,4}(?::[0-9a-f]{1,4}){7}$/);
    });
  });

  it("mac", () => {
    repeat(100, () => {
      expect(mock.mac()).match(/^[0-9a-f]{2}(?::[0-9a-f]{2}){5}$/);
    });
  });

  it("fileName", () => {
    repeat(100, () => {
      expect(mock.fileName()).match(
        new RegExp(`^[0-9a-z]+\.${extensions.join("|")}$`)
      );
    });
  });

  it("filePath", () => {
    repeat(100, () => {
      expect(mock.filePath()).match(/^[a-zA-Z0-9/:]+$/);
    });
  });

  it("filePath ext", () => {
    repeat(100, () => {
      expect(mock.filePath(true)).match(
        new RegExp(`^[a-zA-Z0-9/:]+/[0-9a-z]+\.${extensions.join("|")}$`)
      );
    });
  });

  it("extension", () => {
    repeat(100, () => {
      expect(mock.extension()).match(new RegExp(`^${extensions.join("|")}$`));
    });
  });

  it("url", () => {
    repeat(100, () => {
      expect(mock.url()).match(
        new RegExp(
          `^https://${threeLevelDomains.join(
            "|"
          )}\.[a-z]{6,12}\.${topLevelDomains.join("|")}/[a-zA-Z]{10,20}$`
        )
      );
    });
  });

  it("hostname", () => {
    repeat(100, () => {
      expect(mock.hostname()).match(
        new RegExp(
          `^${threeLevelDomains.join("|")}\.[a-z]{6,12}\.${topLevelDomains.join(
            "|"
          )}$`
        )
      );
    });
  });

  it("productName", () => {
    repeat(100, () => {
      expect(mock.productName()).match(
        new RegExp(`^${productNames.join("|")}$`)
      );
    });
  });

  it("productCategory", () => {
    repeat(100, () => {
      expect(mock.productCategory()).match(
        new RegExp(`^${productCategories.join("|")}$`)
      );
    });
  });

  it("color", () => {
    repeat(100, () => {
      expect(mock.color()).match(new RegExp(`^${colors.join("|")}$`));
    });
  });

  it("size", () => {
    repeat(100, () => {
      expect(mock.size()).match(new RegExp(`^${sizes.join("|")}$`));
    });
  });

  it("weight", () => {
    repeat(100, () => {
      expect(mock.weight()).match(/^[0-9.]+kg$/);
    });
  });

  it("barcode", () => {
    repeat(100, () => {
      expect(mock.barcode()).match(/^[0-9a-zA-Z-]+$/);
    });
  });

  it("sku", () => {
    repeat(100, () => {
      expect(mock.sku()).match(/^[0-9a-zA-Z-]+$/);
    });
  });

  it("integer", () => {
    repeat(100, () => {
      const num = mock.integer(10, 100);
      expect(num).toBeGreaterThanOrEqual(10);
      expect(num).toBeLessThanOrEqual(100);
      expect(num).match(/^\d+$/);
    });
  });

  it("decimal", () => {
    repeat(100, () => {
      const num = mock.decimal(10, 100, 2);
      expect(num).toBeGreaterThanOrEqual(10);
      expect(num).toBeLessThanOrEqual(100);
      expect(num).match(/^\d+(\.\d{1,2})?$/);
    });
  });

  it("random", () => {
    repeat(100, () => {
      const iNum = mock.random(10, 100);
      expect(iNum).toBeGreaterThanOrEqual(10);
      expect(iNum).toBeLessThanOrEqual(100);
      expect(iNum).match(/^\d+$/);

      const fNum = mock.random(10, 100, 2);
      expect(fNum).toBeGreaterThanOrEqual(10);
      expect(fNum).toBeLessThanOrEqual(100);
      expect(fNum).match(/^\d+(\.\d{1,2})?$/);
    });
  });

  it("pick", () => {
    repeat(100, () => {
      expect(mock.pick("0123456789")).match(/^[0-9]$/);
      expect(mock.pick(["first", "second", "third"])).match(
        new RegExp(`^${["first", "second", "third"].join("|")}$`)
      );
      expect(mock.pick({ key1: "first", key2: "second", key3: "third" })).match(
        new RegExp(
          `^${Object.values({
            key1: "first",
            key2: "second",
            key3: "third",
          }).join("|")}$`
        )
      );
    });
  });

  it("upperFirst", () => {
    expect(mock.upperFirst("mockData")).toBe("MockData");
  });

  it("lowerFirst", () => {
    expect(mock.lowerFirst("MockData")).toBe("mockData");
  });

  it("pascalCase", () => {
    expect(mock.pascalCase("mock data")).toBe("MockData");
    expect(mock.pascalCase("Mock data")).toBe("MockData");
    expect(mock.pascalCase("Mock Data")).toBe("MockData");
    expect(mock.pascalCase("Mock-Data")).toBe("MockData");
    expect(mock.pascalCase("mock-data")).toBe("MockData");
    expect(mock.pascalCase("mock_data")).toBe("MockData");
    expect(mock.pascalCase("mockData")).toBe("MockData");
  });

  it("camelCase", () => {
    expect(mock.camelCase("mock data")).toBe("mockData");
    expect(mock.camelCase("Mock data")).toBe("mockData");
    expect(mock.camelCase("Mock Data")).toBe("mockData");
    expect(mock.camelCase("Mock-Data")).toBe("mockData");
    expect(mock.camelCase("mock-data")).toBe("mockData");
    expect(mock.camelCase("mock_data")).toBe("mockData");
    expect(mock.camelCase("MockData")).toBe("mockData");
  });

  it("capitalize", () => {
    expect(mock.capitalize("mock data")).toBe("Mock data");
    expect(mock.capitalize("Mock data")).toBe("Mock data");
    expect(mock.capitalize("Mock Data")).toBe("Mock data");
    expect(mock.capitalize("Mock-Data")).toBe("Mock-data");
    expect(mock.capitalize("mock-data")).toBe("Mock-data");
    expect(mock.capitalize("mock_data")).toBe("Mock_data");
    expect(mock.capitalize("mockData")).toBe("Mockdata");
  });

  it("kebabCase", () => {
    expect(mock.kebabCase("mock data")).toBe("mock-data");
    expect(mock.kebabCase("Mock data")).toBe("mock-data");
    expect(mock.kebabCase("Mock Data")).toBe("mock-data");
    expect(mock.kebabCase("Mock-Data")).toBe("mock-data");
    expect(mock.kebabCase("mock-data")).toBe("mock-data");
    expect(mock.kebabCase("mock_data")).toBe("mock-data");
    expect(mock.kebabCase("mockData")).toBe("mock-data");
  });

  it("pickMultiChar", () => {
    expect(mock.pickMultiChar("0123456789", 4)).match(/^\d{4}$/);
  });

  it("formatDate", () => {
    expect(mock.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")).match(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
    );
  });
});
