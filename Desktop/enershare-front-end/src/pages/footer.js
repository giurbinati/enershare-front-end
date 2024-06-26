import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const drawerWidth = 240; // Larghezza del drawer in pixel

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const BottomAppBar = ({ open }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: '#212529' }} position="sticky" sx={{ top: 'auto', bottom: 0 }} open={open}>
        <Container maxWidth="xl">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="body2" component="div">
                Copyright ENERSHARE Consortium @2024 All rights reserved
              </Typography>
            </Grid>
            <Grid item xs={12} md={1}>
              <Typography component="div" sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src='/european-union.png' alt='european flag' style={{ maxWidth: '100%' }} />
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="body2" component="div">
                Co-funded by the Horizon 2024 Framework Programme of the European Union Under grant agreement No 101000158
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  );
};

export default BottomAppBar;
