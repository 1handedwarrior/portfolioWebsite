import React from 'react';
import { ProfilePic } from './ProfilePic';
import { Paper, Typography, Box } from '@mui/material';


export const MainIntro: React.FC = () => {
    return (
        <Box display='flex' justifyContent='center'>
            <Paper sx={{
                width: {
                    xs: 375,
                    sm: 500,
                    md: 750,
                    lg: 1000,
                    xl: 1250
                },
                height: 600,
                mt: 15,
                bgcolor: 'whitesmoke',
                display: 'flex',
            }}
            elevation={22}>
                <ProfilePic />
            <Typography
                variant='h4'
                component='div'
                textAlign='right'
                fontFamily='Parkinsans'
                color='info'
                mt={2}
                mr={1}
            >
                Hi. I'm Christian
            </Typography>
            </Paper>
        </Box>
    )
};