import  React from 'react';
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
import { useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/MeetingRoom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, chargingstaionid, maxprice) {
    return { name, calories, fat, carbs, chargingstaionid, maxprice };
}

function createDataOffers(nameTab, auhthorTab, priceTab) {
    return { nameTab, auhthorTab, priceTab };
}


const rows = [
    createData(1, '10/06/2024 15:30', '10/06/2024 16:30', 1000, 18, 30),
    createData(2, '11/06/2024 15:30', '11/06/2024 16.30', 750, 24, 40),
    createData(3, '12/06/2024 15:30', '12/06/2024 16:30', 500, 18, 30),
    createData(4, '13/06/2024 15:30', '13/06/2024 16:30', 1500, 25, 50),
    createData(5, '14/06/2024 15:30', '14/06/2024 16:30', 900, 25, 50),
];

const rowsOffers = [
    createDataOffers(1, '0x804037F606634A1416A/CO9811346063319364', 10),
    createDataOffers(2, '0x804037F606634A1416A/CO9811346063319364', 20),
    createDataOffers(3, '0x804037F606634A1416A/CO9811346063319364', 30),
    createDataOffers(4, '0x804037F606634A1416A/CO9811346063319364', 40),
    createDataOffers(5, '0x804037F606634A1416A/CO9811346063319364', 50),
];

const drawerWidth = 350;

export default function ClippedDrawer() {
    const [open1, setOpen1] = React.useState(false);

    const toggleDrawer1 = () => {
        setOpen1(!open1);
    };

    const [startTime, setStartTime] = React.useState();
    const [endTime, setEndTime] = React.useState();
    const [energy, setEnergy] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const [chargingStationID, setChargingStationID] = React.useState('');
    const [demandID, setDemandID] = React.useState('');

    const handleChangeStartTime = (newValue) => {
        setStartTime(newValue);
    };

    const handleChangeEndTime = (newValue) => {
        setEndTime(newValue);
    };

    const handleChangeEnergy = (event) => {
        setEnergy(event.target.value);
    };

    const handleChangeMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleChangeChargingStationID = (event) => {
        setChargingStationID(event.target.value);
    };

    const handleChangeDemandID = (event) => {
        setDemandID(event.target.value);
    };


    const isFormComplete = startTime && endTime && energy && maxPrice && chargingStationID;

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
        <Box sx={{ display: 'flex', minHeight: '140vh' }}>
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
                    <Grid container spacing={3} sx={{ width: '130vh' }}>
                        <Grid item xs={12}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                                ENERGY AUCTION
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
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
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', fontSize: '4ch', mb: '1vh' }}>Creating a demand for energy</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DateTimePicker']}>
                                        <Box
                                            sx={{
                                                width: '17rem', // Imposta la larghezza a 30 caratteri
                                                mb: 2 // Aggiunge spazio inferiore
                                            }}
                                        >
                                            <DateTimePicker
                                                label="Start Date"
                                                value={startTime}
                                                onChange={handleChangeStartTime}
                                                sx={{
                                                    width: '100%', // Imposta la larghezza al 100% del contenitore
                                                    '& .MuiInputBase-root': {
                                                        backgroundColor: 'black',
                                                        borderColor: 'white',
                                                        color: 'white',
                                                        height: '4rem', // Aumenta l'altezza del campo di input
                                                        fontSize: '2ch',

                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        color: 'white',

                                                    },
                                                    '& .MuiOutlinedInput-input': {
                                                        color: 'white',

                                                    },
                                                    '& .MuiSvgIcon-root': {
                                                        color: 'white',

                                                    },
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        borderColor: 'white',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </DemoContainer>
                                </LocalizationProvider>
                                <Box sx={{ mb: 2, mt: 1 }}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DateTimePicker']}>
                                            <Box
                                                sx={{
                                                    width: '17rem',
                                                }}
                                            >
                                                <DateTimePicker
                                                    label="End Date"
                                                    value={endTime}
                                                    onChange={handleChangeEndTime}
                                                    sx={{
                                                        width: '100%',
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
                                                        },
                                                        '& .MuiSvgIcon-root': {
                                                            color: 'white',
                                                        },
                                                        '& .MuiOutlinedInput-notchedOutline': {
                                                            borderColor: 'white',
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <Box
                                        sx={{
                                            mt: 2, // Aggiunge spazio superiore
                                            '& .MuiOutlinedInput-root': {
                                                height: '4rem', // Aumenta l'altezza del campo di input
                                                backgroundColor: 'black',
                                                borderColor: 'white',
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
                                        }}
                                    >
                                        <TextField
                                            label="Energy"
                                            value={energy}
                                            onChange={handleChangeEnergy}
                                            id="outlined-start-adornment"
                                            sx={{ width: '17rem', '& .MuiInputAdornment-root > p': { color: 'white' } }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end" style={{ color: 'white', opacity: 1 }}>Kwh</InputAdornment>
                                                ),
                                            }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: 'white',
                                                },
                                            }}
                                            inputProps={{
                                                sx: {
                                                    color: 'white',
                                                },
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            height: '4rem', // Aumenta l'altezza del campo di input
                                            backgroundColor: 'black',
                                            borderColor: 'white',
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
                                    }}
                                >
                                    <TextField
                                        label="Max Price"
                                        value={maxPrice}
                                        onChange={handleChangeMaxPrice}
                                        id="outlined-start-adornment"
                                        sx={{ mb: 2, width: '17rem', '& .MuiInputAdornment-root > p': { color: 'white' }, }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" style={{ color: 'white', opacity: 1 }}>Token</InputAdornment>
                                            ),
                                        }}
                                        InputLabelProps={{
                                            sx: {
                                                color: 'white',
                                            },
                                        }}
                                        inputProps={{
                                            sx: {
                                                color: 'white',
                                            },
                                        }}
                                    />
                                </Box>
                                <Box sx={{ mb: 2, width: '17rem', backgroundColor: 'black' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" style={{ color: 'white', fontSize: '2ch' }}>Charging Station ID</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={chargingStationID}
                                            label="Charging Station ID"
                                            onChange={handleChangeChargingStationID}
                                            sx={{
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
                                            <MenuItem value={18}>18</MenuItem>
                                            <MenuItem value={24}>24</MenuItem>
                                            <MenuItem value={25}>25</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <ThemeProvider theme={darkTheme}>
                                    <Button sx={{ backgroundColor: '#5717d6', height: '3.5rem', width: '12rem', fontSize: '2.5ch' }} variant="contained" disabled={!isFormComplete}>Submit</Button>
                                </ThemeProvider>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Centra verticalmente il contenuto
                                    alignItems: 'center', // Centra orizzontalmente il contenuto
                                    height: 600,
                                    backgroundColor: '#212529'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', mb: '1vh', fontSize: '4ch' }}>Demand Session Detail</Typography>
                                <ThemeProvider theme={darkTheme}>
                                    <TableContainer component={Paper} sx={{ minHeight: 420 }}>
                                        <Table
                                            sx={{
                                                minWidth: 600,
                                                tableLayout: 'fixed', // Aggiungi questa proprietà
                                                '& th, & td': {
                                                    padding: '16px',
                                                    fontSize: '2.5ch',
                                                    textAlign: 'center', // Centra il testo nelle celle
                                                },
                                                '& thead': {
                                                    backgroundColor: '#5717d6',
                                                },
                                                '& thead th': {
                                                    color: 'white',
                                                    width: '20%', // Distribuisce uniformemente la larghezza delle colonne
                                                },
                                                '& tbody td': {
                                                    color: 'white',
                                                    fontSize: '2.5ch',
                                                },
                                                '& tr': {
                                                    height: 70,
                                                },
                                            }}
                                            aria-label="customized table"
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell>Request ID</StyledTableCell>
                                                    <StyledTableCell>Start Date</StyledTableCell>
                                                    <StyledTableCell>End Date</StyledTableCell>
                                                    <StyledTableCell>Energy</StyledTableCell>
                                                    <StyledTableCell>Max Price</StyledTableCell>
                                                    <StyledTableCell>Charging station ID</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <StyledTableRow key={row.name}>
                                                        <StyledTableCell component="th" scope="row" style={{ fontSize: '2.5ch' }}>
                                                            {row.name}
                                                        </StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.calories}</StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.fat}</StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.carbs}</StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.maxprice}</StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.chargingstaionid}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ThemeProvider>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    height: 160,
                                    backgroundColor: '#212529',
                                }}
                            >
                                <Box sx={{ marginLeft: '45vh' }}>
                                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', fontSize: '4ch' }}>
                                        Demand ID
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: '1vh',
                                        height: '4rem',
                                        marginLeft: '45vh'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            paddingRight: '5vh',
                                            '& .MuiOutlinedInput-root': {
                                                height: '4rem',
                                                backgroundColor: 'black',
                                                borderColor: 'white',
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
                                        }}
                                    >
                                        <TextField
                                            label="Demand ID"
                                            value={demandID}
                                            onChange={handleChangeDemandID}
                                            id="outlined-start-adornment"
                                            sx={{ width: '17rem', '& .MuiInputAdornment-root > p': { color: 'white' } }}
                                            InputLabelProps={{
                                                sx: {
                                                    color: 'white',
                                                },
                                            }}
                                            inputProps={{
                                                sx: {
                                                    color: 'white',
                                                },
                                            }}
                                        />
                                    </Box>
                                    <ThemeProvider theme={darkTheme}>
                                        <Button
                                            sx={{
                                                backgroundColor: '#5717d6',
                                                height: '4rem',
                                                width: '18rem',
                                                marginBottom: '0.1vh',
                                                marginLeft: '1vh',
                                                transform: 'translateY(0.2rem)', // This will adjust the vertical position of the button
                                                fontSize: '2.5ch'
                                            }}
                                            variant="contained"
                                            disabled={!demandID}
                                        >
                                            Get Winning Offer
                                        </Button>
                                    </ThemeProvider>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center', // Centra verticalmente il contenuto
                                    alignItems: 'center',
                                    textAlign: 'center', // Centra orizzontalmente il contenuto
                                    height: 600,
                                    backgroundColor: '#212529'
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', fontSize: '4ch' }}>Demand details</Typography>
                                <Typography variant="h6" sx={{ color: 'white', fontSize: '2.5ch' }}>Start Date:</Typography>
                                <Typography variant="h6" sx={{ color: 'white', fontSize: '2.5ch' }}>End Date:</Typography>
                                <Typography variant="h6" sx={{ color: 'white', fontSize: '2.5ch' }}>Energy:</Typography>
                                <Typography variant="h6" sx={{ color: 'white', fontSize: '2.5ch' }}>Max Price:</Typography>
                                <Typography variant="h6" sx={{ color: 'white', fontSize: '2.5ch' }}>Charging station ID:</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={8}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Centra gli elementi lungo l'asse trasversale (orizzontale)
                                    justifyContent: 'center', // Centra gli elementi lungo l'asse principale (verticale)
                                    textAlign: 'center',
                                    height: 600,
                                    backgroundColor: '#212529',
                                }}
                            >
                                <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold', mb: '1vh', fontSize: '4ch' }}>Bids received for demand</Typography>
                                <ThemeProvider theme={darkTheme}>
                                    <TableContainer component={Paper} sx={{ minHeight: 420 }}>
                                        <Table
                                            sx={{
                                                minWidth: 600,
                                                tableLayout: 'fixed',
                                                '& th, & td': {
                                                    padding: '16px',
                                                    fontSize: '2.5ch',
                                                    textAlign: 'center', // Centra il testo nelle celle
                                                },
                                                '& thead': {
                                                    backgroundColor: '#5717d6',
                                                },
                                                '& thead th': {
                                                    color: 'white',
                                                    width: '33%', // Distribuisce uniformemente la larghezza delle colonne
                                                },
                                                '& tbody td': {
                                                    color: 'white',
                                                    fontSize: '2.5ch',
                                                },
                                                '& tr': {
                                                    height: 70,
                                                },
                                            }}
                                            aria-label="customized table"
                                        >
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell>#</StyledTableCell>
                                                    <StyledTableCell>Author</StyledTableCell>
                                                    <StyledTableCell>Price</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rowsOffers.map((row) => (
                                                    <StyledTableRow key={row.nameTab}>
                                                        <StyledTableCell component="th" scope="row" style={{ fontSize: '2.5ch' }}>
                                                            {row.nameTab}
                                                        </StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.auhthorTab}</StyledTableCell>
                                                        <StyledTableCell style={{ fontSize: '2.5ch' }}>{row.priceTab}</StyledTableCell>
                                                    </StyledTableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </ThemeProvider>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
