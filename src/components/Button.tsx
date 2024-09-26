import React, { MouseEvent } from 'react';
import { Button as MuiButton, SxProps, Theme, useTheme } from '@mui/material';
import { OdbColorVariant } from 'app/types';
import { getButtonOdbVariant, getButtonBorderRadius, getGradientSx, getTypography } from 'app/utils/button.util';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  odbVariant?: OdbColorVariant;
  id?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
  disableRipple?: boolean;
  sx?: SxProps<Theme>;
  size?: ButtonSize;
  autoFocus?: boolean;
  ariaLabel?: string;
}

export const Button = (props: ButtonProps): React.JSX.Element => {
  const {
    odbVariant,
    id,
    disabled,
    fullWidth,
    children,
    onClick,
    startIcon,
    endIcon,
    disableRipple,
    sx,
    size = 'medium',
    autoFocus,
    ariaLabel,
  } = props;

  const { odb } = useTheme();
  const { color, variant, gradient } = getButtonOdbVariant(odbVariant, odb);

  return (
    <MuiButton
      color={color}
      variant={variant}
      size={size as unknown as ButtonSize}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      id={id}
      disableRipple={disableRipple}
      aria-label={ariaLabel}
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus={autoFocus}
      sx={{
        borderRadius: getButtonBorderRadius(odb),
        displayPrint: 'none',
        ...getGradientSx(variant, gradient),
        ...getTypography(size, odb),
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};
