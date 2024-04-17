import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import DSO from '../pages/DSO'


export default function Home({ setList, list }) {

  return (
    <Box sx={{ flexGrow: 1, minHeight: "90vh" }}>
      <Paper elevation={0}
        sx={{ textAlign: "left" }} >
        <Container maxWidth="xl">
          <DSO/>
        </Container>
      </Paper>
    </Box>
  );

}