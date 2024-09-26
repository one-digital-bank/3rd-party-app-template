import React from 'react';
import { Paper as MuiPaper, SxProps, Theme, useTheme } from '@mui/material';
import { getPaperBoxShadow } from 'app/utils/paper.util';

export interface PaperProps {
  children?: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
  type?: string;
}

export const Paper = (props: PaperProps): React.JSX.Element => {
  const { children, className, sx, type = 'standard' } = props;

  const { odb } = useTheme();
  return (
    <MuiPaper
      sx={{
        py: 0,
        px: 0,
        ...getPaperBoxShadow(odb, type),
        ...sx,
      }}
      className={className}
    >
      {children}
    </MuiPaper>
  );
};
