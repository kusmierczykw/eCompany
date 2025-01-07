import { Provider, Type } from '@angular/core';
import { RouteProviderService } from '@core/router/providers/route-provider.service';

export const provideRouteConfig = <Route, RoutePath>(
  type: Type<RouteProviderService<Route, RoutePath>>
): Provider => {
  return {
    provide: RouteProviderService,
    useExisting: type,
  };
};
