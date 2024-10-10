import { Stack, TextField } from '@mui/material';
import { Button } from 'app/components/Button';
import { Segment } from 'app/components/Segment';
import { Text } from 'app/components/Text';
import { closeLayer, navigateOnLayer } from 'app/utils/events';
import { withThemeProvider } from 'app/utils/theme.utils';
import React, { useEffect } from 'react';

const NextStepLayerComponent = (): React.JSX.Element => {
  const done = () => {
    closeLayer();
  };

  useEffect(() => {
    const backEventListener = () => {
      navigateOnLayer({ layer: 'customDetail' });
    };
    document.addEventListener('OdbLayerBackButtonClicked', backEventListener);
    return () => document.removeEventListener('OdbLayerBackButtonClicked', backEventListener);
  }, []);

  return (
    <Segment
      minHeight="lg"
      sx={{ display: 'flex', flexDirection: 'column', position: 'relative', justifyContent: 'space-between' }}
    >
      <Stack gap="16px">
        <Text variant="segmentTitle">Here's an example</Text>
        <TextField label="Just an Input" variant="outlined" fullWidth />
      </Stack>
      <Button sx={{ alignSelf: 'flex-end', mt: 'auto' }} onClick={done}>
        Done
      </Button>
    </Segment>
  );
};

export default withThemeProvider(NextStepLayerComponent);
