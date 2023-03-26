import isNotEmptyAndNullAndUndefined from "../src/isNotEmptyAndNullAndUndefined";

describe("isNotEmptyAndNullAndUndefined", () => {
  it("should return `false` for nullish values", () => {
    expect(isNotEmptyAndNullAndUndefined()).toEqual(false);
    expect(isNotEmptyAndNullAndUndefined(undefined)).toEqual(false);
    expect(isNotEmptyAndNullAndUndefined(null)).toEqual(false);
  });

  it("should return `false` for empty string values", () => {
    expect(isNotEmptyAndNullAndUndefined("")).toEqual(false);
    expect(isNotEmptyAndNullAndUndefined(String())).toEqual(false);
    expect(isNotEmptyAndNullAndUndefined(``)).toEqual(false);
  });

  it("should return `true` for number values", () => {
    expect(isNotEmptyAndNullAndUndefined(0)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(0.0)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(0.1)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(-0.1)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(1)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(-1)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Number.NaN)).toEqual(true);
  });

  it("should return `true` for boolean values", () => {
    expect(isNotEmptyAndNullAndUndefined(true)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(true)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Boolean())).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Boolean(true))).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Boolean(true))).toEqual(true);
  });

  it("should return `true` for symbol values", () => {
    expect(isNotEmptyAndNullAndUndefined(Symbol())).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Symbol('any'))).toEqual(true);
  });

  it("should return `true` for object type values", () => {
    expect(isNotEmptyAndNullAndUndefined({})).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Object())).toEqual(true);

    expect(isNotEmptyAndNullAndUndefined([])).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Array)).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(Array.from([]))).toEqual(true);

    expect(isNotEmptyAndNullAndUndefined(new Date())).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(new Error())).toEqual(true);

    expect(isNotEmptyAndNullAndUndefined(new Map())).toEqual(true);
    expect(isNotEmptyAndNullAndUndefined(new Set())).toEqual(true);
  });
});
