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
                bgcolor: 'primary.light',
            }}>
            <Typography
                variant='h2'
                component='div'
                textAlign='center'
                fontFamily='Jaro'
                color='white'
            >
                Christian   Alvarez
            </Typography>
            </Paper>
        </Box>
    )
};