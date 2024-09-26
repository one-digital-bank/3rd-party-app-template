export type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export type OdbColorVariant = 'odbPrimary' | 'odbSecondary' | 'odbTertiary' | 'odbDestructive' | 'odbText';

export interface OdbButtonVariant {
  variant: ButtonVariant;
  color: OdbColorVariant;
  gradient?: string;
}

export type BackgroundCss = BackgroundProps | string;

export interface BackgroundProps {
  color?: string;
  image?: string;
  position?: string;
  repeat?: string;
  size?: string;
}
