import { Nillable } from './nillable';
import { isNil } from './is-nil';

export const isNotNil = <Type>(
  predictable: Nillable<Type>
): predictable is Type => !isNil(predictable);
