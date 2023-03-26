import isNil from "lodash.isnil";
import isEmpty from "lodash.isempty";

export function isEmptyOrNullOrUndefined(value?: any): boolean {
    return typeof value === 'string' ? isNil(value) || isEmpty(value) : isNil(value);
}

export default isEmptyOrNullOrUndefined;
