import { Nillable } from './nillable';
import { Nil } from './nil';

export const isNil = <Type>(predictable: Nillable<Type>): predictable is Nil =>
  predictable === undefined || predictable === null;
