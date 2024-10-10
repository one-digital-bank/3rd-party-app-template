import { Stack, TextField } from '@mui/material';
import { Button } from 'app/components/Button';
import { Segment } from 'app/components/Segment';
import { Text } from 'app/components/Text';
import { navigateOnLayer } from 'app/utils/events';
import { withThemeProvider } from 'app/utils/theme.utils';
import React from 'react';

const CustomDetailLayer = (): React.JSX.Element => {
  const nextLayer = () => {
    navigateOnLayer({ layer: 'nextStep', layerOnRefresh: 'customDetail' });
  };

  return (
    <Segment
      minHeight="lg"
      sx={{ display: 'flex', flexDirection: 'column', position: 'relative', justifyContent: 'space-between' }}
    >
      <Stack gap="16px">
        <Text variant="segmentTitle">Here's an example</Text>
        <TextField label="Just an Input" variant="outlined" fullWidth />
      </Stack>
      <Button sx={{ alignSelf: 'flex-end', mt: 'auto' }} onClick={nextLayer}>
        Navigate on layer
      </Button>
    </Segment>
  );
};

export default withThemeProvider(CustomDetailLayer);
