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
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color='inherit'>
            <Toolbar>
                    <IconButton component={Link} to='/'>
                            <Home color='info' />
                    </IconButton>
                    <Typography
                        fontSize='large'
                        variant='h6'
                        component='div' 
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'Parkinsans, sans-serif',
                        }}>
                            PORTFOLIO
                    </Typography>

                    {/* Worth mentioning, onClick for the menu had to be on the 
                    IconButton rather than the MenuIcon itself*/}

                    <Stack direction='row' spacing={4}>
                            <IconButton onClick={handleMenuClick}>
                                <MenuIcon
                                    aria-haspopup={true}
                                    aria-expanded={open ? true : undefined}
                                    aria-controls={open ? 'hamburgerMenu' : undefined}
                                    sx={{
                                        display: {
                                            xs: 'block',
                                            sm: 'none',
                                            width: '40px',
                                            height: '50px',
                                        }
                                    }}/>
                            </IconButton>
                            <Menu
                                id='hamburgerMenu'
                                MenuListProps={{
                                    'aria-labelledby': 'hamburgerMenu'
                                }}
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                onClose={handleClose} 
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