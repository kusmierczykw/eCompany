import { Nillable } from './nillable';
import { isNil } from './is-nil';

export const valueOrDefault = <Type>(
  value: Nillable<Type>,
  defaultValue: Type
): Type => {
  if (isNil(value)) {
    return defaultValue;
  }

  return value;
};
