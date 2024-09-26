import { Link as MuiLink, SxProps, Theme, useTheme } from '@mui/material';
import { OdbTextVariant, Text, TextColors } from 'app/components/Text';
import React from 'react';

export interface LinkProps {
  textVariant?: OdbTextVariant;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  href?: string;
  target?: string;
  sx?: SxProps<Theme>;
  underline?: 'none' | 'hover' | 'always';
  color?: TextColors | string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
}

export const Link = (props: LinkProps): React.JSX.Element => {
  const {
    textVariant = 'bodyBaseRegular',
    children,
    onClick,
    sx,
    href,
    target,
    underline: textUnderline,
    color: textColor,
    startIcon,
    endIcon,
  } = props;

  const { odb } = useTheme();

  const color = textColor ?? odb?.components?.link?.color;
  const underline = textUnderline ?? odb?.components?.link?.underline;

  return (
    <MuiLink
      color={color}
      underline={underline}
      onClick={onClick}
      href={href}
      target={target}
      sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer', ...sx }}
    >
      {startIcon}
      <Text sx={{ color }} variant={textVariant}>
        {children}
      </Text>
      {endIcon}
    </MuiLink>
  );
};
