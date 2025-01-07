import { Injectable } from '@angular/core';
import { RouteEntry } from '@core/router/models/route-entry';
import { RouteName } from '@app-routes/types/route-name';
import { RoutePart } from '@app-routes/types/route-part';
import { RouteProviderService as CoreRouteProvider } from '@core/router/providers/route-provider.service';
import { createRouteEntry } from '@core/router/utils/create-route-entry';

@Injectable({
  providedIn: 'root',
})
export class RouteProvider extends CoreRouteProvider<RouteName, RoutePart> {
  public constructor() {
    super();
  }

  public override routes(): RouteEntry<RouteName, RoutePart>[] {
    return [
      createRouteEntry({
        name: 'Dashboard',
        parts: ['/', 'dashboard'],
        title: 'Panel użytkownika',
      }),
      createRouteEntry({
        name: 'SignIn',
        parts: ['/', 'auth', 'sign-in'],
        title: 'Logowanie użytkownika',
      }),
      createRouteEntry({
        name: 'SignUp',
        parts: ['/', 'auth', 'sign-up'],
        title: 'Rejestracja użytkownika',
      }),
      createRouteEntry({
        name: 'SignUp',
        parts: ['/', 'auth', 'sign-out'],
        title: 'Wylogowanie użytkownika',
      }),
    ];
  }
}
