import { Card, CardHeader, CardContent, Typography, Divider } from '@mui/material';



export const TimelineCard: React.FC = () => {
    return (
        <Card sx={{
            width: '60%',
            p: 2,
            borderRadius: 0
        }}>
            <CardHeader 
                title={<Typography 
                gutterBottom 
                variant='h3' 
                fontFamily='Parkinsans'> Life Timeline </Typography>}/>
            <Divider variant='middle' color='black'/>
            <CardContent>
                <Typography variant='button'>
                        <b>2003</b> October 7 is my day of birth in Miami, Fl
                        <Divider color='black'/>
                        <b>2022</b> marks my graduation at Charles W. Flanagan in Pembroke Pines, Fl. 1 month after graduation, I began working as a heavy-duty diesel technician
                        <Divider color='black'/>
                        <b>2023</b> was the year of my life-changing motorcycle accident. Shortly after, I returned to my technician duty
                        <Divider color='black'/>
                        <b>2024</b> is when I retired from diagnosing semi-trucks and began my software engineering journey 
                        <Divider color='black'/>
                        <b>2025</b> will be the year I acquire a tech job & get back on my feet.
                </Typography>
            </CardContent>
        </Card>
    )
};