import { Avatar } from '@mui/material';
import Selfie from '../images/Selfie.jpeg';
import React from 'react';


export const ProfilePic: React.FC = () => {
    return (
        <>
            <Avatar 
                src={Selfie}
                component='span'
                sx={{
                    width: 200,
                    height: 200,
                    mt: 2,
                    ml: 2,
                }}/>
        </>
    )
};