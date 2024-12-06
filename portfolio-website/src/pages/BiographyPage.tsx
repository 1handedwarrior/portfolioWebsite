import React            from 'react';
import { Navbar }       from '../components/Navbar';
import { LifeTimeline } from '../components/LifeTimeline';
import { TimelineCard } from '../components/TimelineCard';
import { Stack }        from '@mui/material';

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
                <LifeTimeline />
                <TimelineCard />
            </Stack>
        </>
    )
};

export default BiographyPage;