import isEmptyOrNullOrUndefined from "../src/isEmptyOrNullOrUndefined";

describe("isEmptyOrNullOrUndefined", () => {
  it("should return `true` for nullish values", () => {
    expect(isEmptyOrNullOrUndefined()).toEqual(true);
    expect(isEmptyOrNullOrUndefined(undefined)).toEqual(true);
    expect(isEmptyOrNullOrUndefined(null)).toEqual(true);
  });

  it("should return `true` for empty string values", () => {
    expect(isEmptyOrNullOrUndefined("")).toEqual(true);
    expect(isEmptyOrNullOrUndefined(String())).toEqual(true);
    expect(isEmptyOrNullOrUndefined(``)).toEqual(true);
  });

  it("should return `false` for number values", () => {
    expect(isEmptyOrNullOrUndefined(0)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(0.0)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(0.1)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(-0.1)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(1)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(-1)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Number.NaN)).toEqual(false);
  });

  it("should return `false` for boolean values", () => {
    expect(isEmptyOrNullOrUndefined(true)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(false)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Boolean())).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Boolean(true))).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Boolean(false))).toEqual(false);
  });

  it("should return `false` for symbol values", () => {
    expect(isEmptyOrNullOrUndefined(Symbol())).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Symbol('any'))).toEqual(false);
  });

  it("should return `false` for object type values", () => {
    expect(isEmptyOrNullOrUndefined({})).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Object())).toEqual(false);

    expect(isEmptyOrNullOrUndefined([])).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Array)).toEqual(false);
    expect(isEmptyOrNullOrUndefined(Array.from([]))).toEqual(false);

    expect(isEmptyOrNullOrUndefined(new Date())).toEqual(false);
    expect(isEmptyOrNullOrUndefined(new Error())).toEqual(false);

    expect(isEmptyOrNullOrUndefined(new Map())).toEqual(false);
    expect(isEmptyOrNullOrUndefined(new Set())).toEqual(false);
  });
});
