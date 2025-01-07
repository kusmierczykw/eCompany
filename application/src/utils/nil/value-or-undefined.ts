import { Nillable } from './nillable';
import { isNil } from './is-nil';

export const valueOrUndefined = <Type>(
  value: Nillable<Type>
): Type | undefined => {
  if (isNil(value)) {
    return undefined;
  }

  return value;
};
