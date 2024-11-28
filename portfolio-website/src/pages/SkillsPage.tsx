import React from 'react';
import { Navbar } from '../components/Navbar';
import { Card,
         CardHeader,
         CardContent,
         CardMedia,
         Grid2,
         Typography } from '@mui/material';


export const SkillsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Card sx={{
                width: 150,
                height: 75,
                p: 30
            }}>
                Yo
            </Card>
        </>
    )
};