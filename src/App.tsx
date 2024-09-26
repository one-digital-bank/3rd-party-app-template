import { Menu } from '@mui/icons-material';
import { AppBar, Container, Divider, Grid2, IconButton, Toolbar, useTheme } from '@mui/material';
import { Button } from 'app/components/Button';
import { Text } from 'app/components/Text';
import React, { useEffect } from 'react';
import { Paper } from 'app/components/Paper';
import { Segment } from 'app/components/Segment';
import { Link } from 'app/components/Link';

const App = (): React.JSX.Element => {
  const { palette } = useTheme();

  useEffect(() => {
    document.body.style.background = palette.background.default;
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ borderRadius: 0 }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Text variant="titleSmRegular" sx={{ flexGrow: 1, color: 'inherit' }}>
            ODB 3rd-party template
          </Text>
          <Button sx={{ color: 'inherit' }}>Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', mt: '100px', gap: '24px' }}>
        <Text variant="titleBaseRegular">Here comes your page title</Text>
        <Paper>
          <Segment minHeight="sm">
            <Grid2 container spacing="24px" width="100%">
              <Grid2 size={{ xs: 12, md: 3 }}>
                <Text variant="segmentTitle">This is a segment title</Text>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 9, md: 6 }}>
                <Text variant="bodyBaseRegular">Here's just some regular text</Text>
                <Button>Button with gradient</Button>
              </Grid2>
            </Grid2>
          </Segment>
          <Divider variant="middle" />
          <Segment minHeight="sm">
            <Grid2 container spacing="24px" width="100%">
              <Grid2 size={{ xs: 12, md: 3 }}>
                <Text variant="segmentTitle">Another Segment</Text>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 9, md: 6 }}>
                <Text variant="bodyBaseRegular">Here's just some regular text</Text>
                <Link target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  Click me
                </Link>
              </Grid2>
            </Grid2>
          </Segment>
        </Paper>
      </Container>
    </>
  );
};

export default App;
