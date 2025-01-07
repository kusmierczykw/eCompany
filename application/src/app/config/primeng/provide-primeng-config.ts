import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const providePrimengConfig = () => {
  return providePrimeNG({
    theme: {
      preset: Aura,
      options: {
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities',
        },
      },
    },
  });
};
