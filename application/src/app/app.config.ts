import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouteProvider } from '@app-routes/providers/route-provider.service';
import { provideRouteConfig } from '@core/router';
import { provideFirebaseConfig } from '@app-config/firebase/provide-firebase-config';
import { providePrimengConfig } from '@app-config/primeng/provide-primeng-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideFirebaseConfig(),
    providePrimengConfig(),
    provideRouteConfig(RouteProvider),
  ],
};
