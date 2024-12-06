import { Box } from '@mui/material';
import { Timeline, 
         TimelineItem, 
         TimelineDot, 
         TimelineConnector,
         TimelineContent, 
         TimelineSeparator } from '@mui/lab';


export const LifeTimeline: React.FC = () => {
    return (
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
    )
};