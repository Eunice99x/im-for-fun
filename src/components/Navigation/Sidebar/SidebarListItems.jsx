import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader, Divider, MenuItem } from '@mui/material';
// import { NavLink, useLocation } from 'react-router-dom';
import {
    PeopleOutlined as PeopleIcon,
    AssignmentOutlined as AssignmentIcon,
    Timeline as TimelineIcon,
    AccountCircleOutlined as AccountCircleIcon,
    AccountBalanceOutlined as AccountBalanceIcon,
    SettingsOutlined as SettingsIcon,
    AssignmentLateOutlined as AssignmentLateIcon
} from '@mui/icons-material';

const SidebarListItems = ({ open }) => {
    // const location = useLocation();
    
    const currentRoute = '/' + location.pathname.split('/').filter(data => data !== '')[0];

    const routes = [
        { path: '/user', name: 'User', icon: <PeopleIcon />, roles: ['Account Holder', 'Administrator', 'Super Administrator'] },
        { path: '/complianceMeasure', name: 'Measures', icon: <AssignmentIcon />, roles: ['Super Administrator'] },
        { path: '/company', name: 'Company/Landlord', icon: <AssignmentLateIcon />, roles: ['Account Holder'] },
        { path: '/user-activity', name: 'User Activity', icon: <AssignmentIcon />, roles: ['Account Holder'] },
        { path: '/location', name: 'Location', icon: <AccountBalanceIcon />, roles: ['Account Holder', 'Administrator'] },
        { path: '/space', name: 'Space', icon: <AccountCircleIcon />, roles: ['Account Holder', 'Administrator', 'Manager', 'Reviewer'] },
        { path: '/compliance', name: 'Compliance', icon: <AssignmentIcon />, roles: ['Account Holder', 'Administrator', 'Manager', 'Reviewer'] }
    ];

    const dashboardRoutes = [
        { path: '/dashboard/compliance', name: 'Compliance', icon: <AssignmentIcon />, roles: ['Account Holder', 'Administrator', 'Compliance Certifier', 'Reviewer', 'Manager'] },
        { path: '/dashboard/reportDetails', name: 'Reports', icon: <TimelineIcon />, roles: ['Account Holder', 'Administrator', 'Compliance Certifier', 'Reviewer', 'Manager'] }
    ];

    const logoutHandler = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            dispatch(logout());
        }
    };

    return (
        <>
            <List>
                <Divider style={{ width: '80%', margin: '0 auto', marginBottom: '25px' }} />
                
               
            </List>
            <List>
            </List>
            <List>
                <ListSubheader>{('Settings', open)}</ListSubheader>
                <MenuItem selected={location.pathname === '/profile'} to='/profile' button>
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary='Profile' />
                </MenuItem>
            </List>
            <List style={{ flex: 1, height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ alignSelf: 'flex-end', width: '100%' }}>
                    <ListItem button onClick={() => window.open('/user-manual', '_blank', 'width=900,height=900')}>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary='User Manual' />
                    </ListItem>
                </div>
            </List>
        </>
    );
};

export default SidebarListItems;
