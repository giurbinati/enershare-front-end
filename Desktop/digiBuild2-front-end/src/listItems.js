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
import HomeIcon from '@mui/icons-material/Home';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/">
  <ListItemIcon>
    <HomeIcon />
  </ListItemIcon>
  <ListItemText primary="Home"/>
</ListItemButton>
    <ListItemButton component={Link} to="/data-quality">
  <ListItemIcon>
    <DashboardIcon />
  </ListItemIcon>
  <ListItemText primary="Data quality" secondary="Data quality is pivotal for the application of reliable services; therefore, mechanisms to check and determine the data quality are necessary" />
</ListItemButton>

<ListItemButton component={Link} to="/interoperability">
  <ListItemIcon>
    <ShoppingCartIcon />
  </ListItemIcon>
  <ListItemText primary="Interoperability" secondary="Interoperability relies on the usage of data sharing mechanisms based on common data models and ontologies" />
</ListItemButton>

    {/* <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton> */}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);