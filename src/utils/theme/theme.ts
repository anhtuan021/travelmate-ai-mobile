import { lightColors } from './light.theme';
import { darkColors } from './dark.theme';

export const theme = {
  tokens: {
    colors: {
      ...lightColors,
      dark: {
        ...darkColors,
      },
    },
    // spacing, radius,
  },
};
