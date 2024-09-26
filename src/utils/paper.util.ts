import { OdbTheme } from 'app/types';

export const getPaperBoxShadow = (odb: OdbTheme, paperType: string): { boxShadow: number } | Record<string, never> => {
  if (paperType === 'dialog') {
    return { boxShadow: odb?.components?.dialog?.elevation };
  }

  const elevationType = odb?.components?.global?.elevation?.type;

  switch (elevationType) {
    case 'shadow':
      return { boxShadow: odb?.components?.paper?.elevation };
    case 'none':
    default:
      return { boxShadow: 0 };
  }
};
