import React from 'react';
import { Stack, 
        AppBar, 
        Toolbar, 
        IconButton, 
        Typography,
        Button,
        Link } from '@mui/material';
import { Home } from '@mui/icons-material';


export const Navbar: React.FC = () => {
    return (
        <AppBar color='inherit'>
            <Toolbar>
                <IconButton>
                    <Home />
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
                <Stack direction='row' spacing={2}>
                        <Button>Hobbies</Button>
                        <Button>Biography</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};