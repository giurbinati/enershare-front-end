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
/* import Chart from '../components/chart'; */
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
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const drawerWidth = 350;

export default function ClippedDrawer() {
    const [open1, setOpen1] = useState(true);
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    const [sensor, setSensor] = useState('');
    const [metric, setMetric] = useState('');

    const handleChangeStartTime = (newValue) => {
        setStartTime(newValue);
    };

    const handleChangeEndTime = (newValue) => {
        setEndTime(newValue);
    };

    const handleChangeSensor = (event) => {
        setSensor(event.target.value);
    };


    const handleChangeMetric = (event) => {
        setMetric(event.target.value);
    };

    const isFormComplete = startTime && endTime && sensor && metric;

    const toggleDrawer1 = () => {
        setOpen1(!open1);
    };

    Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    const labels = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'];

    const data = {
        labels: labels,
        datasets: [
            {
                label: metric,
                backgroundColor: '#18e5b0',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                borderColor: '#18e5b0',
                tension: 0.1,
                pointBackgroundColor: '#18e5b0', // Color of the points
                pointRadius: 5, // Size of the points
                pointHoverRadius: 7, // Size of the points on hover
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Change legend text color to white
                    font: {
                        size: 23, // Increase legend font size
                    },
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // Change x-axis tick color to white
                    font: {
                        size: 16, // Increase x-axis tick font size
                    },
                },
                grid: {
                    display: false, // Hide x-axis grid lines
                },
                border: {
                    color: 'white', // Change x-axis line color to white
                },
                title: {
                    display: true, // Display x-axis title
                    text: 'Timestamp', // Set x-axis title text
                    color: 'white', // Set x-axis title color
                    font: {
                        size: 20, // Set x-axis title font size
                    },
                },
            },
            y: {
                ticks: {
                    color: 'white', // Change y-axis tick color to white
                    font: {
                        size: 16, // Increase y-axis tick font size
                    },
                },
                grid: {
                    display: false, // Hide y-axis grid lines
                },
                border: {
                    color: 'white', // Change y-axis line color to white
                },
                title: {
                    display: true, // Display y-axis title
                    text: 'Values', // Set y-axis title text
                    color: 'white', // Set y-axis title color
                    font: {
                        size: 20, // Set y-axis title font size
                    },
                },
            },
        },
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
        console.log('logout')
        sessionStorage.clear();
        setAuth(false);
        if (open)
            setOpen(!open)
        navigate('/login')
    }

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
                                ASM HEADQUARTER
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Centra gli elementi lungo l'asse trasversale (orizzontale)
                                    justifyContent: 'center', // Centra gli elementi lungo l'asse principale (verticale)
                                    height: 600,
                                    backgroundColor: '#212529'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', fontSize: '4ch', mb: '1vh' }}>METRIC</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']} sx={{ width: '17rem', height: '4.5rem' }}>
                                        <DateTimePicker
                                            label="Start Date"
                                            value={startTime}
                                            onChange={handleChangeStartTime}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                '& .MuiInputBase-root': {
                                                    backgroundColor: 'black',
                                                    color: 'white',
                                                    height: '100%', // Assicurati che l'input abbia l'altezza desiderata
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    '& fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&:hover fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                    '&.Mui-focused fieldset': {
                                                        borderColor: 'white',
                                                    },
                                                },
                                                '& .MuiSvgIcon-root': {
                                                    color: 'white',
                                                },
                                                '& .MuiInputLabel-root': {
                                                    color: 'white',
                                                },
                                                '& .MuiOutlinedInput-input': {
                                                    color: 'white',
                                                },
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                                <Box sx={{ mb: 2, mt: 1 }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateTimePicker']} sx={{ width: '17rem', height: '4.5rem' }}>
                                            <DateTimePicker
                                                label="End Date"
                                                value={endTime}
                                                onChange={handleChangeEndTime}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    '& .MuiInputBase-root': {
                                                        backgroundColor: 'black',
                                                        color: 'white',
                                                        height: '100%', // Assicurati che l'input abbia l'altezza desiderata
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: 'white',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: 'white',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: 'white',
                                                        },
                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        color: 'white',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white',
                                                    },
                                                    '& .MuiOutlinedInput-input': {
                                                        color: 'white',
                                                    },
                                                }}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Box>
                                <Box sx={{ mb: 2, width: '17rem', backgroundColor: 'black' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" style={{ color: 'white', fontSize: '2ch' }}>Sensor</InputLabel>
                                        <Select
                                            labelId="Sensor"
                                            id="Sensor"
                                            value={sensor}
                                            label="Sensor"
                                            onChange={handleChangeSensor}
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
                                            <MenuItem value={'opzione1'}>aggregated PV and EV charging station</MenuItem>{/*definisco i sensori */}
                                            <MenuItem value={'opzione2'}>ASM headquarters</MenuItem>
                                            <MenuItem value={'opzione3'}>EV charging station Fast</MenuItem>
                                            <MenuItem value={'opzione4'}>PV plant 185 KW</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box sx={{ width: '17rem', backgroundColor: 'black', mb: 2 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" style={{ color: 'white', fontSize: '2ch' }}>Metric</InputLabel>
                                        <Select
                                            labelId="Metric"
                                            id="Metric"
                                            value={metric}
                                            label="Metric"
                                            onChange={handleChangeMetric}
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
                                            <MenuItem key="valore1" /* value="Power_P_1_7_0_W2.CV" */ value ="Active power [kW]">Active power [kW]</MenuItem>,
                                            <MenuItem key="valore2" /* value="Power_Q_3_7_0_W2.CV" */ value="Reactive power [kVAR]">Reactive power [kVAR]</MenuItem>,
                                            <MenuItem key="valore3"/*  value="Power_S_9_7_0_W2.CV" */ value="Apparent power [kVA]">Apparent power [kVA]</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <ThemeProvider theme={darkTheme}>
                                    <Button sx={{ backgroundColor: '#5717d6', height: '3.5rem', width: '12rem', fontSize: '2.5ch' }} variant="contained" disabled={!isFormComplete}>Submit</Button>
                                </ThemeProvider>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column', height: 840, backgroundColor: '#212529' }}>
                                <div style={{ width: '100%', flexGrow: 1, overflow: 'hidden', color: 'white', backgroundColor: 'black' }}>
                                    <Line data={data} options={options} />
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
