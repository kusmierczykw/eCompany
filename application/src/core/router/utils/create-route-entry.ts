import { Nillable } from '@utils/nil/nillable';

import { RouteEntry } from '@core/router/models/route-entry';

export const createRouteEntry = <RouteName, RoutePath>(data: {
  name: RouteName;
  parts: RoutePath[];
  title?: Nillable<string>;
}) => {
  return new RouteEntry(data);
};
