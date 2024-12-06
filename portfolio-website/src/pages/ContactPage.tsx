import { Email, GitHub, Instagram } from '@mui/icons-material';
import { Navbar } from '../components/Navbar';
import { Box, Card, CardHeader, CardContent, Stack, Typography, Divider } from '@mui/material';

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
                        <Stack direction='row' spacing={4} sx={{
                            display: 'flex',
                            justifyContent: 'center' }}>
                                <Card sx={{
                                    width: '40%',
                                    p: 1,
                                    boxShadow: 20}}>

                                    <CardHeader fontFamily='Parkinsans' title='Email' />
                                    <Divider color='black'/>
                                    <CardContent>
                                        <Typography fontFamily='Parkinsans' variant='button'>
                                            You can reach me via email at <br />
                                            <Email/>Calvarez1007 @yahoo.com
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{
                                    width: '40%',
                                    p: 1,
                                    boxShadow: 20 }}>
                                    <CardHeader fontFamily='Parkinsans' title='Socials' />
                                    <Divider color='black'/>
                                    <CardContent>
                                        <Typography fontFamily='Parkinsans' variant='button'>
                                            <GitHub />Find me on GitHub @1HandedWarrior <br />
                                            <Divider />
                                            <Instagram/>Find me on Instagram @slyandlethal
                                        </Typography>
                                    </CardContent>
                                </Card>
                        </Stack>
                    </Stack>
                </Box>
        </>
    )
};

export default ContactPage;