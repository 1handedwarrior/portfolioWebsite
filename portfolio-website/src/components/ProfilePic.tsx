import { Avatar } from '@mui/material';
import selfie from '../images/selfiePic.jpeg';
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
                }}/>
    )
};