import React from 'react';
import { Paper, Typography, Box } from '@mui/material';


export const MainIntro: React.FC = () => {
    return (
        <Box display='flex' justifyContent='center'>
            <Paper sx={{
                width: {
                    xs: 350,
                    sm: 500,
                    md: 750,
                    lg: 1000,
                    xl: 1250
                },
                height: 600,
                mt: 15,
                bgcolor: 'info.dark'
            }}
            elevation={22}>
            <Typography
                variant='h4'
                component='div'
                textAlign='left'
                fontFamily='Jaro'
                color='white'
            >
                Hi. I'm Christian
            </Typography>
            </Paper>
        </Box>
    )
};