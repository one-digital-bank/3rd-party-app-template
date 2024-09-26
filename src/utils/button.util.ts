import { ButtonVariant, OdbButtonVariant, OdbTheme } from 'app/types';
import { ButtonSize } from 'app/components/Button';

export const getButtonBorderRadius = (odb: OdbTheme): string => `${odb?.components?.button?.radius}px`;

export const getButtonOdbVariant = (odbVariant: string, odb: OdbTheme): OdbButtonVariant => {
  const checkButtonVariant = (buttonType: string): ButtonVariant => {
    switch (buttonType) {
      case 'text':
        return 'text';
      case 'outlined':
        return 'outlined';
      default:
        return 'contained';
    }
  };

  switch (odbVariant) {
    case 'odbSecondary':
      return {
        color: 'odbSecondary',
        variant: checkButtonVariant(odb?.components?.button?.secondary?.type),
        gradient: odb?.components?.button?.secondary?.gradient,
      };
    case 'odbTertiary':
      return {
        color: 'odbTertiary',
        variant: checkButtonVariant(odb?.components?.button?.tertiary?.type),
        gradient: odb?.components?.button?.tertiary?.gradient,
      };
    case 'odbDestructive':
      return {
        color: 'odbDestructive',
        variant: checkButtonVariant(odb?.components?.button?.destructive?.type),
        gradient: odb?.components?.button?.destructive?.gradient,
      };
    case 'odbText':
      return {
        color: 'odbTertiary',
        variant: 'text',
      };
    case 'odbPrimary':
    default:
      return {
        color: 'odbPrimary',
        variant: checkButtonVariant(odb?.components?.button?.primary?.type),
        gradient: odb?.components?.button?.primary?.gradient,
      };
  }
};

export const getGradientSx = (variant: ButtonVariant, gradient: string): object => {
  // If the button is not filled, or if it's a fallback color, no need for gradient logic
  if (variant !== 'contained' || CSS.supports('color', gradient)) {
    return {};
  }
  return {
    background: gradient,
    ':hover': {
      // 80% of 255 (white)
      backgroundColor: 'rgb(204, 204, 204)',
      backgroundBlendMode: 'multiply',
    },
  };
};

export const getTypography = (size: ButtonSize, odb: OdbTheme): object => {
  switch (size) {
    case 'small':
      return odb?.components?.button?.font?.sm;
    case 'medium':
      return odb?.components?.button?.font?.base;
    case 'large':
      return odb?.components?.button?.font?.lg;
  }
};
