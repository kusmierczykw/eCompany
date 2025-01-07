import { provideAppInitializer } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { environment } from '@environments/environment';

export const provideFirebaseConfig = () => {
  return provideAppInitializer(() => {
    initializeApp({
      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      projectId: environment.firebase.projectId,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
      appId: environment.firebase.appId,
      measurementId: environment.firebase.measurementId,
    });
  });
};
