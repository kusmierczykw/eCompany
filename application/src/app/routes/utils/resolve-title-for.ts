import { RouteName } from '@app-routes/types/route-name';
import { ResolveFn } from '@angular/router';
import { resolveTitleFor as coreResolveTitleFor } from '@core/router/utils/resolve-title-for';

export const resolveTitleFor = (name: RouteName): ResolveFn<string> => {
  return coreResolveTitleFor(name);
};
