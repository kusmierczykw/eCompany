import { RoutePart } from '@app-routes/types/route-part';
import { path as corePath } from '@core/router';

export const path = (...parts: RoutePart[]): string => {
  return corePath(parts);
};
