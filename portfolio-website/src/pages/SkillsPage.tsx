import React from 'react';
import { Navbar } from '../components/Navbar';
import { Paper,
         Card,
         CardHeader,
         CardContent,
         CardMedia,
         Grid2,
         Typography } from '@mui/material';
import JavascriptLogo from '../images/javascript.png';
import PythonLogo from '../images/pythonLogo.jpeg';
import ReactLogo from '../images/react.png';
import HtmlCssLogos from '../images/htmlCSS.png';
import TypescriptLogo from '../images/tsLogo.png'



export const SkillsPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Paper 
                elevation={20}
                sx={{
                mt: 10,
                p: 1,
                mx: 8,
                height: 'auto',
                width: 'auto',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Typography 
                    variant='h3'
                    component='div'
                    sx={{
                        textAlign: 'center',
                        fontFamily: 'Parkinsans'
                    }}>
                        Programming Languages
                </Typography>
            </Paper>
            <Paper sx={{
                m: 10,
                bgcolor: 'lightgray'
            }}
                elevation={20}>
            <Grid2 container p={7} spacing={5} justifyContent='center'>
                <Grid2 size={{
                    xs: 12,
                    sm: 6,
                    md: 3
                }}>
                    <Card variant='elevation' sx={{
                        maxWidth: '750px',
                        maxHeight: '750px',
                    }}>
                        <CardHeader title='Javascript' />
                        <CardMedia component='img' 
                            image={JavascriptLogo}
                            alt='javascript logo' />
                        <CardContent>
                            <Typography variant='body2'>
                                JavaScript is primarily used to create interactive and dynamic content on websites, allowing for features like animations, user input responses, and page updates without reloading the entire page, essentially making websites more user-friendly and engaging
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={{
                    xs: 12,
                    sm: 6,
                    md: 3
                }}>
                    <Card sx={{
                        maxWidth: '750px',
                        maxHeight: '750px', 
                    }}>
                        <CardHeader title='Python'/>
                        <CardMedia 
                         component='img' 
                        image={PythonLogo} 
                        alt='python logo'/>
                        <CardContent>
                            <Typography variant='body2'>
                                Python is a general-purpose programming language commonly used for web development, data analysis, automation, machine learning, scientific computing, and building software applications
                            </Typography> 
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={{
                    xs: 12,
                    sm: 6,
                    md: 3
                }}>
                    <Card sx={{
                        maxWidth: '750px',
                        maxHeight: '750px',
                    }}>
                        <CardHeader title='React'/>
                        <CardMedia 
                            sx={{ height: '100%', width: '100%' }}
                            component='img' 
                            image={ReactLogo} 
                            alt='React logo' />
                        <CardContent>
                            <Typography variant='body2'>
                                React is a JavaScript library primarily used for building user interfaces (UI) for web applications, allowing developers to create dynamic and interactive components that can be easily combined to construct complex web pages, particularly for single-page applications where data updates without full page reloads
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={{
                    xs: 12,
                    sm: 6,
                    md: 3
                }}>
                    <Card sx={{
                        maxWidth: '750px',
                        maxHeight: '750px',
                    }}>
                        <CardHeader title='Typescript'/>
                        <CardMedia 
                            
                            component='img' 
                            image={TypescriptLogo} 
                            alt='Typescript logo' />
                        <CardContent>
                            <Typography variant='body2'>
                                TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript also allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 size={{
                    xs: 12,
                    sm: 6,
                    md: 3
                }}>
                    <Card sx={{
                        maxWidth: '750px',
                        maxHeight: '750px',
                    }}>
                        <CardHeader title='HTML / CSS' />
                        <CardMedia 
                            sx={{ height: '100%', width: '100%' }}
                            component='img' 
                            image={HtmlCssLogos}
                            alt='html / css logos'/>
                        <CardContent>
                            <Typography variant='body2'>
                                HTML is a markup language used to create static web pages and web applications. CSS is a style sheet language responsible for the presentation of documents written in a markup language. Together, they are the basic building blocks of the web
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
            </Paper>
        </>
    )
};