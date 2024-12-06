import { Box, Typography } from '@mui/material';


export const ContactHeader: React.FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
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
    )
};