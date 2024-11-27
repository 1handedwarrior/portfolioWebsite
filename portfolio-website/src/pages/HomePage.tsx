import React from 'react';
import { MainIntro } from  '../components/MainIntro';
import { Navbar } from  '../components/Navbar';


export const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <MainIntro />
        </>
    )
};