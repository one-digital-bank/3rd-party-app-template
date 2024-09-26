import { PaletteColor } from '@mui/material';

export declare type ThemeMode = 'light' | 'dark';
export declare type ThemeModeSetting = 'light' | 'dark' | 'system';

export interface OdbTheme {
  meta: {
    theme: {
      name: string;
    };
    graphics: {
      hasBodyBackground: boolean;
    };
  };
  components: {
    alert: {
      type: 'standard' | 'outlined' | 'filled';
    };
    button: {
      font: {
        sm: TextVariant;
        base: TextVariant;
        lg: TextVariant;
      };

      radius: number;
      primary: {
        fill: string;
        on: string;
        gradient: string;
        type: 'contained' | 'text' | 'outlined';
      };
      secondary: {
        fill: string;
        on: string;
        gradient: string;
        type: 'contained' | 'text' | 'outlined';
      };
      tertiary: {
        fill: string;
        on: string;
        gradient: string;
        type: 'contained' | 'text' | 'outlined';
      };
      destructive: {
        fill: string;
        on: string;
        gradient: string;
        type: 'contained' | 'text' | 'outlined';
      };
    };
    dialog: {
      elevation: number;
    };
    divider: {
      line: string;
    };
    element: {
      borderColor: string;
      borderWidth: number;
      radius: number;
    };
    global: {
      elevation: {
        type: string;
      };
    };
    input: {
      type: 'standard' | 'outlined' | 'filled';
    };
    link: {
      color: string;
      underline: 'always' | 'hover' | 'none';
    };
    lockScreen: {
      backgroundBlur: number;
      fill: string;
    };
    mainNavigation: {
      elevation: number;
      fill: string;
      gradient: string;
      on: string;
      active: string;
      borderWidth: string;
    };
    paper: {
      borderWidth: number;
      borderColor: string;
      radius: number;
      elevation: number;
    };
    segmentTitle: {
      color: string;
      colorGradient: string;
      font: TextVariant;
    };
    shortcut: {
      radius: number;
      borderWidth: number;
      elevation: number;
    };
    splash: {
      fill: string;
    };
    stickyFooter: {
      visibility: boolean;
      gradient: string;
      backgroundBlur: number;
    };
    subtitle1: {
      font: TextVariant;
    };
    subtitle2: {
      font: TextVariant;
    };
  };
  typography: {
    textPrimary: string;
    textSecondary: string;
    textDisabled: string;
    titlePrimary: string;
    titlePrimaryGradient: string;
    fontFamily: {
      body: string;
      title: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      strong: number;
    };
    fontSize: {
      body: {
        base: number;
        sm: number;
        xs: number;
        xxs: number;
      };
      title: {
        base: number;
        sm: number;
        xs: number;
      };
    };
    lineHeight: {
      body: {
        base: string;
        xs: string;
        xxs: string;
      };
      title: {
        base: string;
        sm: string;
        xs: string;
      };
    };
    letterSpacing: {
      body: {
        base: string;
        sm: string;
        xs: string;
        xxs: string;
      };
      title: {
        base: string;
        sm: string;
        xs: string;
      };
    };
    title: {
      base: {
        strong: TextVariant;
        regular: TextVariant;
      };
      sm: {
        strong: TextVariant;
        medium: TextVariant;
        regular: TextVariant;
      };
      xs: {
        medium: TextVariant;
      };
    };
    body: {
      base: {
        strong: TextVariant;
        medium: TextVariant;
        regular: TextVariant;
      };
      xl: {
        strong: TextVariant;
        medium: TextVariant;
        regular: TextVariant;
      };
      lg: {
        strong: TextVariant;
        medium: TextVariant;
        regular: TextVariant;
      };
      sm: {
        strong: TextVariant;
        medium: TextVariant;
        regular: TextVariant;
      };
      xs: {
        medium: TextVariant;
        strong: TextVariant;
        regular: TextVariant;
      };
      xxs: {
        strong: TextVariant;
        medium: TextVariant;
      };
    };
    mono: {
      base: {
        medium: TextVariant;
        regular: TextVariant;
      };
    };
    extensions: {
      netceteraFontSrc: {
        '0Roboto400Normal': string;
        '1Roboto500Normal': string;
        '2Roboto700Normal': string;
      };
    };
  };
  graphics: {
    meta: {
      version: string;
    };
    icon: {
      set: string;
      standard: string;
      neutral: string;
      standardDisabled: string;
      neutralDisabled: string;
    };
    illustrations: {
      set: string;
    };
    brand: {
      set: string;
    };
    schemeLogo: {
      set: string;
    };
  };
  action: {
    active: {
      color: string;
      opacityDec: string;
    };
    disabled: {
      fill: string;
      on: string;
      opacityDec: string;
    };
    focus: {
      fill: string;
      opacityDec: string;
    };
    hover: {
      fill: string;
      opacityDec: string;
    };
    selected: {
      color: string;
      opacityDec: string;
    };
  };
  background: {
    default: string;
    surface: string;
    element: string;
    elementGradient: string;
  };
  tabBar: {
    fill: string;
    on: string;
    active: string;
  };
  standard: StandardColor;
  semantic: SemanticColor;
}

interface StandardColor {
  white: string;
  whiteSemi: string;
  black: string;
  blackSemi: string;
  main100: string;
  main300: string;
  main500: string;
  main700: string;
  main900: string;
  main500Semi: string;
  mainOn500: string;
  accent100: string;
  accent300: string;
  accent500: string;
  accent700: string;
  accent900: string;
  accent500Semi: string;
  accentOn500: string;
  grey50: string;
  grey100: string;
  grey200: string;
  grey300: string;
  grey400: string;
  grey500: string;
  grey600: string;
  grey700: string;
  grey800: string;
  grey900: string;
}

interface SemanticColor {
  negative300: string;
  negative500: string;
  negative700: string;
  negativeOn300: string;
  negativeOn500: string;
  negative500Semi: string;
  information300: string;
  information500: string;
  information700: string;
  informationOn300: string;
  informationOn500: string;
  information500Semi: string;
  warning300: string;
  warning500: string;
  warning700: string;
  warningOn300: string;
  warningOn500: string;
  warning500Semi: string;
  positive300: string;
  positive500: string;
  positive700: string;
  positiveOn300: string;
  positiveOn500: string;
  positive500Semi: string;
}

export interface TextVariant {
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'none';
}

declare module '@mui/material/styles' {
  interface Theme {
    odb: OdbTheme;
  }

  interface Palette {
    odbPrimary: PaletteColor;
    odbSecondary: PaletteColor;
    odbTertiary: PaletteColor;
    odbDestructive: PaletteColor;
  }

  interface PaletteOptions {
    odbPrimary?: PaletteOptions['primary'];
    odbSecondary?: PaletteOptions['primary'];
    odbTertiary?: PaletteOptions['primary'];
    odbDestructive?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    odbPrimary: true;
    odbSecondary: true;
    odbTertiary: true;
    odbDestructive: true;
    odbText: true;
  }
}

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    odbPrimary: true;
    odbSecondary: true;
    odbTertiary: true;
    odbDestructive: true;
    odbText: true;
  }
}
