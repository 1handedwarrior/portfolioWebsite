import { Stack, Card, CardHeader, CardContent, Typography, Divider } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';


export const ContactCards: React.FC = () => {
    return (
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
    )
};