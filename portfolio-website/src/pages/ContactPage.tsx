import { Navbar } from '../components/Navbar';
import { Box, Typography } from '@mui/material';

export const ContactPage: React.FC = () => {
    return (
        <>
            <Navbar />
                <Box bgcolor='info.main' sx={{
                    mt: 10,
                    mx: 'auto',
                    height: '25rem',
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: 8,
                    borderRadius: 0,
                    outlineOffset: '1px',
                    outline: ' 5px grey solid'
                }}>
                        <Box>
                            <Typography 
                                variant='h2'
                                component='header'
                                fontFamily='Parkinsans'
                                sx={{
                                    color: 'white',
                                    py: 3,
                                }}>
                                Get in touch! 
                            </Typography>
                        </Box>
                </Box>
        </>
    )
};