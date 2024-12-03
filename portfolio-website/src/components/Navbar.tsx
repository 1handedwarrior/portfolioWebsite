import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack,
        Box, 
        AppBar, 
        Toolbar, 
        IconButton, 
        Typography,
        Button,
        Menu,
        MenuItem } from '@mui/material';
import { Home, Menu as MenuIcon } from '@mui/icons-material';


export const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <AppBar color='inherit'>
            <Toolbar>
                    <IconButton component={Link} to='/'>
                            <Home color='info' />
                    </IconButton>
                    <Typography
                        fontSize='medium'
                        variant='h6'
                        component='div' 
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Parkinsans, sans-serif',
                        }}>
                            PORTFOLIO
                    </Typography>

                    <Stack direction='row' spacing={4}>
                            <IconButton>
                                <MenuIcon 
                                    onClick={e => setOpen(true)}
                                    sx={{
                                        display: {
                                            xs: 'block',
                                            sm: 'none'
                                        }
                                    }}/>
                            </IconButton>
                            <Menu 
                                onClose={ e => setOpen(false)} 
                                open={open}
                                >
                                <MenuItem component={Link} to='/skills'>Skills</MenuItem>
                                <MenuItem component={Link} to='/biography'>Biography</MenuItem>
                                <MenuItem component={Link} to='/contact'>Contact</MenuItem>
                            </Menu>

                        <Box sx={{
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}>
                            <Button component={Link} to='/skills'>
                                <Typography fontFamily='Parkinsans'>Skills</Typography>
                            </Button>
                            <Button component={Link} to='/biography'>
                                <Typography fontFamily='Parkinsans'>Biography</Typography>
                            </Button>
                            <Button component={Link} to='/contact'>
                                <Typography fontFamily='Parkinsans'>Contact</Typography>
                            </Button>
                        </Box>
                    </Stack>
            </Toolbar>
        </AppBar>
    )
};