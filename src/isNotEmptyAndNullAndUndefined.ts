import isEmptyOrNullOrUndefined from "./isEmptyOrNullOrUndefined";

export function isNotEmptyAndNullAndUndefined(value?: any): boolean {
    return !isEmptyOrNullOrUndefined(value);
}

export default isNotEmptyAndNullAndUndefined;
