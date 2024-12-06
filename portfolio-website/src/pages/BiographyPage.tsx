import React from 'react';
import { Navbar } from '../components/Navbar';
import { Box, Stack, Card, CardContent, CardHeader, Typography, Divider } from '@mui/material';
import { Timeline, 
         TimelineItem, 
         TimelineDot, 
         TimelineConnector, 
         TimelineSeparator,
         TimelineContent } from '@mui/lab';

const BiographyPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Stack mt={10} direction='row' spacing={7} sx={{
                boxShadow: 23,
                bgcolor: 'info.main',
                p: 2,
                borderRadius: 3
            }}>
                <Box 
                width='30%' 
                border='solid grey 10px'
                bgcolor='whitesmoke'>
                    <Timeline position='left' >
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='error' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>2003</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='secondary' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>2022</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='warning' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>2023</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='info' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>2024</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='success' />
                            </TimelineSeparator>
                            <TimelineContent>2025</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
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
            </Stack>
        </>
    )
};

export default BiographyPage;