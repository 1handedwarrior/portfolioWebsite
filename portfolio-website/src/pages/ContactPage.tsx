import { Email, GitHub, Instagram } from '@mui/icons-material';
import { Navbar } from '../components/Navbar';
import { ContactHeader } from '../components/ContactHeader';
import { Box, Card, CardHeader, CardContent, Stack, Typography, Divider } from '@mui/material';
import { ContactCards } from '../components/ContactCards';

const ContactPage: React.FC = () => {
    return (
        <>
            <Navbar />
                <Box bgcolor='info.main' sx={{
                    mt: 15,
                    mx: 'auto',
                    height: '28rem',
                    width: '90%',
                    boxShadow: 8,
                    borderRadius: 0,
                    outlineOffset: '1px',
                    outline: ' 5px grey solid'
                }}>
                    <Stack direction='column' spacing={1}>
                        <ContactHeader />
                        <ContactCards />
                    </Stack>
                </Box>
        </>
    )
};

export default ContactPage;