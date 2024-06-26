import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/MeetingRoom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chart from '../components/chart';
import { Button } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const drawerWidth = 350;

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function ClippedDrawer() {
    const [open1, setOpen1] = useState(false);

    const toggleDrawer1 = () => {
        setOpen1(!open1);
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
    }

    const [values, setValues] = useState('');

    const handleChange = (event) => {
        setValues(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '130vh' }}>
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
                    backgroundColor: '#661aff', // Colore di sfondo del Drawer
                    '& .MuiDrawer-paper': {
                        backgroundColor: '#661aff', // Colore di sfondo della carta all'interno del Drawer
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
            <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', minHeight: '130vh', backgroundColor: '#343b41' }}>
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 20, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid container spacing={3} sx={{ width: '110vh' }}>
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                                FORECASTED DATA
                            </Typography>
                        </Grid>
                        {/* Chart */}
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center', // Centra gli elementi lungo l'asse trasversale (orizzontale)
                                    justifyContent: 'center', // Centra gli elementi lungo l'asse principale (verticale)
                                    height: 120,
                                    backgroundColor: '#212529',
                                }}
                            >
                                <Box sx={{ width: '17rem', backgroundColor: 'black' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" style={{ color: 'white', fontSize: '2ch' }}>Values</InputLabel>
                                        <Select
                                            labelId="Values"
                                            id="Values"
                                            value={values}
                                            label="Values"
                                            onChange={handleChange}
                                            sx={{
                                                height: '4rem',
                                                width: '100%', // Imposta la larghezza al 100% del contenitore
                                                '& .MuiInputBase-root': {
                                                    backgroundColor: 'black',
                                                    borderColor: 'white',
                                                    color: 'white',
                                                    height: '4rem', // Aumenta l'altezza del campo di input

                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: 'white',

                                                },
                                                '& .MuiOutlinedInput-input': {
                                                    color: 'white',
                                                    fontSize: '2ch'

                                                },
                                                '& .MuiSvgIcon-root': {
                                                    color: 'white',

                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'white',
                                                },
                                            }}
                                        >
                                            <MenuItem value={'Prediction Consumption '}>Prediction Consumption</MenuItem>
                                            <MenuItem value={'Prediction Production '}>Prediction Production</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center', // Centra gli elementi lungo l'asse trasversale (orizzontale)
                                    justifyContent: 'center', // Centra gli elementi lungo l'asse principale (verticale)
                                    height: 120,
                                    backgroundColor: '#212529',
                                }}
                            >
                                <ThemeProvider theme={darkTheme}>
                                    <Button sx={{ backgroundColor: '#5717d6', height: '3.5rem', width: '12rem', fontSize: '2.5ch' }} variant="contained" disabled={!values}>View</Button>
                                </ThemeProvider>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', height: 840, backgroundColor: '#212529' }}>
                                <Chart />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
