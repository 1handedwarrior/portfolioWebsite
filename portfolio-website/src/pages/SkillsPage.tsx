import React from 'react';
import { Navbar } from '../components/Navbar';
import { SkillCards } from '../components/SkillCards';



const SkillsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <SkillCards />
        </>
    )
};

export default SkillsPage;