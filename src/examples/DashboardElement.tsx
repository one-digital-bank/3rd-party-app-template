import { Grid2, Stack, TextField } from '@mui/material';
import { Button } from 'app/components/Button';
import { Paper } from 'app/components/Paper';
import { Segment } from 'app/components/Segment';
import { Text } from 'app/components/Text';
import { openLayer } from 'app/utils/events';
import { withThemeProvider } from 'app/utils/theme.utils';
import React from 'react';

const DashboardElement = (): React.JSX.Element => {
  const openCustomDetail = () => {
    openLayer({
      layer: 'customDetail',
    });
  };

  return (
    <Grid2 container spacing="24px">
      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
        <Paper sx={{ display: 'flex' }}>
          <Segment
            minHeight="lg"
            sx={{ display: 'flex', flexDirection: 'column', position: 'relative', justifyContent: 'space-between' }}
          >
            <Stack gap="16px">
              <Text variant="segmentTitle">Here's an example</Text>
              <TextField label="Just an Input" variant="outlined" fullWidth />
            </Stack>
            <Button sx={{ alignSelf: 'flex-end', mt: 'auto' }} onClick={openCustomDetail}>
              Open a layer
            </Button>
          </Segment>
        </Paper>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
        <Paper sx={{ display: 'flex' }}>
          <Segment minHeight="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Text variant="segmentTitle">More than one paper</Text>
          </Segment>
        </Paper>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
        <Paper sx={{ display: 'flex' }}>
          <Segment minHeight="lg" sx={{ display: 'flex', flexDirection: 'column' }}>
            <Text variant="segmentTitle">You can do as you please</Text>
          </Segment>
        </Paper>
      </Grid2>
    </Grid2>
  );
};

export default withThemeProvider(DashboardElement);
