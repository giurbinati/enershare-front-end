import * as React from 'react';
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
import { mainListItems } from '../components/listItems';
import { useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/MeetingRoom';

const drawerWidth = 350;

export default function ClippedDrawer(auth, setAuth) {

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
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
        <Box sx={{ display: 'flex' }}>
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
                        MARKETPLACE
                    </Typography>
                    <Divider sx={{ backgroundColor: '#ffffff', marginTop: '3vh' }} />
                    <List sx={{ marginTop: '5vh' }}>
                        {mainListItems}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#343b41' }}>
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4, marginTop: '10vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                                HISTORICAL DATA
                            </Typography>
                        </Grid>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                    backgroundColor: '#212529'
                                }}
                            >
                                {/* <Chart /> */}
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                    backgroundColor: '#212529'
                                }}
                            >
                                {/* <Deposits /> */}
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#212529' }}>
                                {/* <Orders /> */}
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}
