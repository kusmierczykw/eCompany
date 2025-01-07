import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { inject } from '@angular/core';
import { RouteProviderService } from '@core/router/providers/route-provider.service';

export const resolveTitleFor = <RouteName>(
  name: RouteName
): ResolveFn<string> => {
  return () => of(inject(RouteProviderService).routeTitle(name));
};
