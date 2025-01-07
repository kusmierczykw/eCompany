import { Injectable } from '@angular/core';
import { isNil } from '@utils/nil/is-nil';

import { RouteEntry } from '@core/router/models/route-entry';
import { RouterLink } from '@core/router/types/router-link';

@Injectable({
  providedIn: 'root',
})
export abstract class RouteProviderService<RouteName, RoutePath> {
  private readonly routesMap: Map<RouteName, RouteEntry<RouteName, RoutePath>>;

  protected constructor() {
    this.routesMap = new Map<RouteName, RouteEntry<RouteName, RoutePath>>(
      this.routes().map((entry) => [entry.route, entry])
    );
  }

  public abstract routes(): RouteEntry<RouteName, RoutePath>[];

  public routeTitle(name: RouteName): string {
    const entry = this.routesMap.get(name);

    if (isNil(entry)) {
      throw new Error(`Route "${name}" not found.`);
    }

    const title = entry.title;

    if (isNil(title)) {
      throw new Error(`The title for route "${name}" not found.`);
    }

    return title;
  }

  public routerLink(name: RouteName): RouterLink {
    const entry = this.routesMap.get(name);

    if (isNil(entry)) {
      throw new Error(`Route "${name}" not found.`);
    }

    return entry.parts.map((path) => path) as RouterLink;
  }
}
