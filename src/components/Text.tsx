import React, { CSSProperties, ElementType } from 'react';
import { SxProps, Theme, Typography, useTheme } from '@mui/material';

export type OdbTextVariant =
  | 'segmentTitle'
  | 'subtitle1'
  | 'subtitle2'
  | 'titleBaseRegular'
  | 'titleSmRegular'
  | 'titleXsMedium'
  | 'bodyBaseRegular'
  | 'bodyBaseMedium'
  | 'bodyXlMedium'
  | 'bodyLgMedium'
  | 'bodySmRegular'
  | 'bodySmMedium'
  | 'bodyXsRegular'
  | 'bodyXxsMedium'
  | 'monoBaseRegular'
  | 'monoBaseMedium';

export type TextColors =
  | 'textPrimary'
  | 'textSecondary'
  | 'titlePrimary'
  | 'main'
  | 'accent'
  | 'textDisabled'
  | 'negative'
  | 'positive'
  | 'inherit'
  | 'segmentTitle';

export interface TextProps {
  id?: string;
  color?: TextColors | string;
  labelFor?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  labelStyle?: CSSProperties;
  variant?: OdbTextVariant;
}

export const Text = (props: TextProps): React.JSX.Element => {
  const {
    id,
    color = 'textPrimary',
    labelFor,
    ariaLabel,
    ariaHidden,
    sx,
    children,
    labelStyle,
    variant = 'bodyBaseRegular',
  } = props;

  const { odb } = useTheme();

  const colorMap = {
    textPrimary: odb?.typography?.textPrimary,
    textSecondary: odb?.typography?.textSecondary,
    titlePrimary: odb?.typography?.titlePrimaryGradient,
    textDisabled: odb?.typography?.textDisabled,
    main: odb?.standard?.main500,
    accent: odb?.standard?.accent500,
    negative: odb?.semantic?.negative500,
    positive: odb?.semantic?.positive500,
    segmentTitle: odb?.components?.segmentTitle?.colorGradient,
  };

  const variantMap = {
    segmentTitle: { variant: odb?.components?.segmentTitle?.font, component: 'h4' },
    subtitle1: { variant: odb?.components?.subtitle1?.font, component: 'p' },
    subtitle2: { variant: odb?.components?.subtitle2?.font, component: 'p' },
    titleBaseRegular: { variant: odb?.typography?.title?.base?.regular, component: 'h1' },
    titleSmRegular: { variant: odb?.typography?.title?.sm?.regular, component: 'h2' },
    titleXsMedium: { variant: odb?.typography?.title?.xs?.medium, component: 'h3' },
    bodyBaseRegular: { variant: odb?.typography?.body?.base?.regular, component: 'p' },
    bodyBaseMedium: { variant: odb?.typography?.body?.base?.medium, component: 'p' },
    bodyXlMedium: { variant: odb?.typography?.body?.xl?.medium, component: 'p' },
    bodyLgMedium: { variant: odb?.typography?.body?.lg?.medium, component: 'p' },
    bodySmRegular: { variant: odb?.typography?.body?.sm?.regular, component: 'p' },
    bodySmMedium: { variant: odb?.typography?.body?.sm?.medium, component: 'p' },
    bodyXsRegular: { variant: odb?.typography?.body?.xs?.regular, component: 'p' },
    bodyXxsMedium: { variant: odb?.typography?.body?.xxs?.medium, component: 'p' },
    monoBaseRegular: { variant: odb?.typography?.mono?.base?.regular, component: 'p' },
    monoBaseMedium: { variant: odb?.typography?.mono?.base?.medium, component: 'p' },
  };

  const TextComponent = (): React.JSX.Element => {
    const gradientSupportProperties = colorMap[color]?.includes('gradient')
      ? {
          display: 'inline-block',
          background: colorMap[color],
          boxDecorationBreak: 'clone',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitBoxDecorationBreak: 'clone',
        }
      : {};

    return (
      <Typography
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        id={id}
        color={colorMap[color]?.includes('gradient') ? 'transparent' : (colorMap[color] ?? color)}
        component={variantMap[variant]?.component as ElementType}
        sx={{ ...variantMap[variant]?.variant, ...gradientSupportProperties, ...sx } as SxProps<Theme>}
      >
        {children}
      </Typography>
    );
  };

  return labelFor ? (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor={labelFor} style={labelStyle}>
      <TextComponent />
    </label>
  ) : (
    <TextComponent />
  );
};
