import { SerializedStyles } from '@emotion/serialize';
import { Box, Breakpoint, css, styled, SxProps, Theme } from '@mui/material';
import { isArray } from 'lodash-es';
import React from 'react';

const paddingMap = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };
const heightMap = { xs: 140, sm: 180, md: 220, lg: 260, xl: 300, xxl: 408 };

type BorderType = number | Array<number>;
type PaddingType = string | number | Array<string | number>;

interface BorderProps {
  bottom?: BorderType;
  right?: BorderType;
}

const responsiveMap: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const createQueryForBreakpoints = (
  breakpointsValue: number | number[],
  propertyName: string,
  theme: Theme,
): SerializedStyles | SerializedStyles[] =>
  isArray(breakpointsValue)
    ? breakpointsValue.map(
        (borderForBreakpoint, index) => css`
          ${theme.breakpoints.up(responsiveMap[index])} {
            ${propertyName}: ${borderForBreakpoint}px;
          }
        `,
      )
    : css`
        ${propertyName}: ${breakpointsValue}px;
      `;

// eslint-disable-next-line
const StyledBox: any = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  border-color: ${({ theme }): string => theme.palette.divider};

  &:before,
  &:after {
    content: ' ';
    position: absolute;
    border-style: solid;
    border-width: 0;
    border-color: ${({ theme }): string => theme.palette.divider};
  }

  &:before {
    top: 16px;
    bottom: 16px;
    right: 0;
    ${({ border, theme }: { border: BorderProps; theme: Theme }): SerializedStyles | SerializedStyles[] =>
      createQueryForBreakpoints(border?.right, 'border-right-width', theme)}
  }

  &:after {
    left: 16px;
    right: 16px;
    bottom: 0;
    ${({ border, theme }: { border: BorderProps; theme: Theme }): SerializedStyles | SerializedStyles[] =>
      createQueryForBreakpoints(border?.bottom, 'border-bottom-width', theme)};
  }
`;

export interface SegmentProps {
  children?: React.ReactNode;
  paddingY?: { top?: PaddingType; bottom?: PaddingType };
  minHeight?: keyof typeof heightMap;
  border?: { bottom?: BorderType; right?: BorderType };
  displayPrint?: string;
  sx?: SxProps<Theme>;
}

const mapPadding = (value: string | number): number => (typeof value === 'string' ? paddingMap[value] : value);

export const Segment = (props: SegmentProps): React.JSX.Element => {
  const { children, paddingY, minHeight, border = { bottom: [0], right: [0] }, sx, displayPrint } = props;

  const adjustedPadding = { top: 'lg', bottom: 'lg', ...paddingY };

  const getPadding = (padding: PaddingType): number | number[] =>
    Array.isArray(padding) ? padding.map((p) => mapPadding(p)) : mapPadding(padding);

  return (
    <StyledBox
      component="div"
      sx={{
        px: 3,
        pt: getPadding(adjustedPadding.top),
        pb: getPadding(adjustedPadding.bottom),
        display: 'flex',
        displayPrint: displayPrint,
        minHeight: heightMap[minHeight],
        ...sx,
      }}
      border={border}
    >
      {children}
    </StyledBox>
  );
};
