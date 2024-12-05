import { Avatar, Box, Typography } from '@mui/material';
import selfie from '../images/selfie.jpeg';
import React from 'react';


export const ProfilePic: React.FC = () => {
    return (
            <Avatar 
                src={selfie}
                component='span'
                sx={{
                    width: 200,
                    height: 200,
                    mt: 2,
                    ml: 2,
                    border: 'solid black',
                    boxShadow: 15
                }}/>
    )
};