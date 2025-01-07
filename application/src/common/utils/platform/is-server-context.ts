import {
  inject,
  Injector,
  PLATFORM_ID,
  runInInjectionContext,
} from '@angular/core';
import { isPlatformServer } from '@angular/common';

export const isServerContext = (injector?: Injector) => {
  if (injector) {
    return runInInjectionContext(injector, () =>
      isPlatformServer(inject(PLATFORM_ID))
    );
  }

  return isPlatformServer(inject(PLATFORM_ID));
};
