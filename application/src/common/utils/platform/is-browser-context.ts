import {
  inject,
  Injector,
  PLATFORM_ID,
  runInInjectionContext,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const isBrowserContext = (injector?: Injector) => {
  if (injector) {
    return runInInjectionContext(injector, () =>
      isPlatformBrowser(inject(PLATFORM_ID))
    );
  }

  return isPlatformBrowser(inject(PLATFORM_ID));
};
