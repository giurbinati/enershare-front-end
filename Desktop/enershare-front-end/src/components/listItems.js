import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Energy Auction" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize:'25px' }} />
    </ListItemButton>
    <ListItemButton component={Link} to="/forecastedData">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Forecasted Date" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize:'25px' }} />
    </ListItemButton>
    <ListItemButton component={Link} to="/optimizedData">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Optimized Data" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize:'25px' }} />
    </ListItemButton>
    <ListItemButton component={Link} to="/historicalData">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Historical Data" primaryTypographyProps={{ variant: "subtitle1", fontWeight: "bold", color: "white", fontSize:'25px' }} />
    </ListItemButton>
  </React.Fragment>
);