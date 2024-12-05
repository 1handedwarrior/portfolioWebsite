import React from 'react';
import { ProfilePic } from './ProfilePic';
import { Paper,
         Card, 
         Typography,
         Box, 
         Stack,
         CardHeader,
         CardContent} from '@mui/material';


export const MainIntro: React.FC = () => {
    return (
        <Box display='flex' alignItems='center' justifyContent='center'>
            <Paper sx={{
                width: {
                    sm: 500,
                    md: 750,
                    lg: 1000,
                    xl: 1250
                },
                height: 400,
                mt: 15,
                mx: 15,
                bgcolor: 'whitesmoke',
                display: 'flex',
                flex: 4,
            }}
                elevation={22}>
                <Stack direction='column'>
                    <Box
                        alignItems='center'
                        display='flex'
                        flexDirection='row'
                        mt={2}>
                        <ProfilePic />
                        <Typography
                            variant='h2'
                            textAlign='center'
                            fontFamily='Parkinsans'
                            color='black'
                        >
                            Hi. I'm <Typography 
                                variant='inherit' 
                                color='info'>Christian</Typography>
                        </Typography>
                    </Box>
                </Stack>
            </Paper>
        </Box>
    )
};