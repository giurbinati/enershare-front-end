import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Box, Container, Grid, Paper, Button, Divider } from '@mui/material';
import { Dashboard as DashboardIcon, ShoppingCart as ShoppingCartIcon, People as PeopleIcon, BarChart as BarChartIcon, ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/MeetingRoom';
import styled from 'styled-components';
import { useState } from 'react';

const NumberCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 300px;
  height: 200px;
  background-color: black; /* Sfondo nero */
  border: 2px solid #5717d6; /* Bordo viola */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Spazio tra il bottone e la card */
`;

const DateCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  background-color: black; /* Sfondo nero */
  border: 2px solid #5717d6; /* Bordo viola */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px; /* Spazio tra il bottone e la card */
`;

const Number = styled.h1`
  font-size: 3rem;
  color: green; /* Testo verde */
`;

const WhiteTypography = styled(Typography)`
  color: white;
  font-size: 2.5ch;
`;

const WhiteTypography2 = styled(Typography)`
  color: white;
  font-size: 2.5ch;
  padding-bottom: 20px; /* Aggiunge spazio sotto il testo */
`;

const drawerWidth = 350;

export default function ClippedDrawer() {
    const [open1, setOpen1] = React.useState(false);

    const toggleDrawer1 = () => {
        setOpen1(!open1);
    };

    const number = 1000; // Il numero che vuoi visualizzare
    const currentDate = new Date(); // Ottiene la data e l'ora corrente
    const date = currentDate.toLocaleString(); // Formatta la data e l'ora corrente secondo le impostazioni locali del sistema

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logica di submit qui
        console.log('Form submitted');
    };

    const mainListItems = (
        <React.Fragment>
            <ListItemButton component={Link} to="/">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Energy Auction" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize: '25px' }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/forecastedData">
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Forecasted Data" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize: '25px' }} />
            </ListItemButton>
            <ListItemButton component={Link} to="/optimizedData">
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Optimized Data" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize: '25px' }} />
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer1}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Historical Data" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize: '25px' }} />
                {open1 ? <ExpandLessIcon sx={{ color: 'white' }} /> : <ExpandMoreIcon sx={{ color: 'white' }} />}
            </ListItemButton>
            <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Box paddingLeft={8}>
                        <ListItemButton component={Link} to="/asmhq">
                            <Typography sx={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize: '20px' }}>
                                ASM HEADQUARTER
                            </Typography>
                        </ListItemButton>
                        <ListItemButton component={Link} to="/enduser">
                            <Typography sx={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize: '20px' }}>
                                END USER
                            </Typography>
                        </ListItemButton>
                    </Box>
                </List>
            </Collapse>
        </React.Fragment>
    );

    const [open, setOpen] = useState(true);
    const [auth, setAuth] = useState(true);
    const navigate = useNavigate();

    const logout = () => {
        console.log('logout');
        sessionStorage.clear();
        setAuth(false);
        if (open) setOpen(!open);
        navigate('/login');
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#343b41' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ backgroundColor: '#212529', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ color: 'black' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
                        <img src='/Logo_Enershare.png' alt='logo' style={{ width: '15%', height: 'auto' }} />
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={logout}
                                color="primary"
                                sx={{ fontSize: '3rem' }}
                            >
                                <Logout sx={{ fontSize: '3rem' }} />
                            </IconButton>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    backgroundColor: '#661aff',
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#661aff',
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Divider />
                <Toolbar />
                <Box sx={{ overflow: 'auto', textAlign: 'center', marginTop: '8vh' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                        DASHBOARD
                    </Typography>
                    <Divider sx={{ backgroundColor: '#ffffff', marginTop: '3vh' }} />
                    <List sx={{ marginTop: '5vh' }}>
                        {mainListItems}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#343b41' }}>
                <Toolbar />
                <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid container spacing={3} sx={{ width: '100%' }}>
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                                OPTIMIZED DATA
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minHeight: '60vh',
                                    backgroundColor: '#212529',
                                    width: '100%',
                                }}
                            >
                                <Box sx={{ mt: 3, mb: 3 }}>
                                    <Button onClick={handleSubmit} sx={{ backgroundColor: '#5717d6', height: '3.5rem', width: '300px', fontSize: '1rem' }} variant="contained">
                                        Get Energy Surplus
                                    </Button>
                                </Box>
                                <NumberCard>
                                    <WhiteTypography variant="h5">Energy Surplus [Kw]</WhiteTypography>
                                    <Number>{number}</Number>
                                </NumberCard>
                                <DateCard>
                                    <WhiteTypography2 variant="h5">Energy Request Time</WhiteTypography2>
                                    <WhiteTypography variant="h5">{date}</WhiteTypography>
                                </DateCard>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
