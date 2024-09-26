import React, { MouseEvent } from 'react';
import { IconButton as MuiIconButton, SxProps, Theme, useTheme } from '@mui/material';
import { ButtonSize } from 'app/components/Button';
import { getTypography } from 'app/utils/button.util';

export interface IconButtonProps {
  id?: string;
  disabled?: boolean;
  ariaLabel?: string;
  color?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disableRipple?: boolean;
  sx?: SxProps<Theme>;
  size?: ButtonSize;
}

export const IconButton = (props: IconButtonProps): React.JSX.Element => {
  const { ariaLabel, id, color, disabled, children, onClick, disableRipple, sx, size = 'medium' } = props;

  const { odb } = useTheme();

  return (
    <MuiIconButton
      size={size as unknown as ButtonSize}
      disabled={disabled}
      onClick={onClick}
      id={id}
      aria-label={ariaLabel}
      disableRipple={disableRipple}
      sx={{
        color: color || odb?.typography?.textPrimary,
        borderRadius: '50%',
        displayPrint: 'none',
        ...getTypography(size, odb),
        ...sx,
      }}
    >
      {children}
    </MuiIconButton>
  );
};
