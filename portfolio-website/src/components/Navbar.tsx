import React from 'react';
import { Stack, 
        AppBar, 
        Toolbar, 
        IconButton, 
        Typography,
        Button } from '@mui/material';
import { Home } from '@mui/icons-material';

import { HomePage } from '../pages/HomePage';
import { SkillsPage } from '../pages/SkillsPage';
import { BiographyPage } from '../pages/BiographyPage';

import { Link } from 'react-router-dom';



export const Navbar: React.FC = () => {
    return (
        <AppBar color='inherit'>
            <Toolbar>
                    <IconButton component={Link} to='/'>
                            <Home color='info' />
                    </IconButton>
                    <Typography 
                        variant='h6'
                        component='div' 
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Jona'
                        }}>
                            PORTFOLIO
                    </Typography>
                    <Stack direction='row' spacing={3}>
                            <Button component={Link} to='/skills'><b> Skills </b></Button>
                            <Button component={Link} to='/biography'><b> Biography </b></Button>
                    </Stack>
            </Toolbar>
        </AppBar>
    )
};