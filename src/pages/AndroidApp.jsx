// src/pages/AndroidApp.jsx
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import androidAppImage1 from '../assets/1.jpg'; // Adjust the paths if necessary
import androidAppImage2 from '../assets/2.jpg';
import androidAppImage3 from '../assets/3.jpg';
import androidAppImage4 from '../assets/4.jpg';
import {createTheme, ThemeProvider} from "@mui/material/styles";


const AndroidApp = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/bbdulab'); // Update this path according to your route setup
    };
    const theme3 = createTheme({
        palette: {
            primary: {
                main: 'rgba(11,51,225,0.94)', // Red color
            },
        },
    });

    return (
        <ThemeProvider theme={theme3}>
        <Container sx={{ marginY: 4 }}>
            <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'background.paper',
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4
                }}
            >
                <Typography variant="h2" gutterBottom align="center" flexWrap="wrap" fontWeight={'bold'}>
                    OFFICIAL APP!
                </Typography>

            </Box>

            <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'background.paper',
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4
                }}
            >
                <Typography variant="h4" align="center" fontWeight={'bold'}>
                    FEATURES
                </Typography>
                <Typography variant="h6" align="center">
                   👉APP GETS UPDATES FOR SUBJECT PAPERS (OVER THE AIR UPDATES)
                </Typography>



                <Typography variant="h6" align="center">
                   👉 Downloaded Files are stored in Downloads Folder
                </Typography>
                <Typography variant="h6" align="center">
                    👉 EASY UPLOADS
                </Typography>
                <Typography variant="h6" align="center">
                    👉 LAB FILES
                </Typography>
                <Typography variant="h6" align="center">
                    👉 BETTER ANIMATIONS
                </Typography>
            </Box>
             {/* New white box with a button */}
            <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: {xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'white', // Change to white for the new box
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4,
                }}
            >
                <Typography variant="h2" gutterBottom align="center" fontWeight={'bold'}>
                    ANDROID
                </Typography>
                <Typography variant="body1" align="center">

                </Typography>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open('https://github.com/Tanay2920003/APKS/releases/download/4/BBDPAPERS.apk', '_blank')} // Opens Google in a new tab
                        sx={{
                            mt: 2,
                            border: '2px solid black', // Adds a black border
                            borderRadius: '15px', // Sets the border radius
                            '&:hover': {
                                border: '2px solid black', // Maintain border color on hover
                            },
                        }} >
                        Download APP
                    </Button>
                </Box>
                
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open('https://drive.google.com/file/d/1_6sc_qWiHPn6pEZ9eeBMiNX31Zquuixq/view?usp=sharing', '_blank')} // Opens Google in a new tab
                        sx={{
                            mt: 2,
                            border: '2px solid black', // Adds a black border
                            borderRadius: '15px', // Sets the border radius
                            '&:hover': {
                                border: '2px solid black', // Maintain border color on hover
                            },
                        }}>
                        Download APP FROM DRIVE

                    </Button>
                </Box>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open('https://www.virustotal.com/gui/file/e0cb92c093fe30116046fe3a0e4f70191ce31793752831cc0344377f19dbe063?nocache=1', '_blank')} // Opens Google in a new tab
                        sx={{
                            mt: 2,
                            border: '2px solid black', // Adds a black border
                            borderRadius: '15px', // Sets the border radius
                            '&:hover': {
                                border: '2px solid black', // Maintain border color on hover
                            },
                        }}>
                        Check Trust and info
                    </Button>
                </Box>
                <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: {xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'white', // Change to white for the new box
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4,
                    marginTop: 4
                }}
            >
                <Typography variant="h2" gutterBottom align="center" fontWeight={'bold'}>
                    APP VERSION 4
                </Typography>
                <Typography variant="body1" align="center">

                </Typography>
                
                    
                </Box>

            </Box>
            {/* Displaying multiple images */}
            <Box display="flex" justifyContent="center" flexWrap="wrap" marginTop={2}>
                <img
                    src={androidAppImage2}
                    alt="Android App 1"
                    style={{width: '100%', maxWidth: '300px', margin: '10px', borderRadius: '8px'}}
                />

                <img
                    src={androidAppImage3}
                    alt="Android App 3"
                    style={{width: '100%', maxWidth: '300px', margin: '10px', borderRadius: '8px'}}
                />
            </Box>



            {/* New white box for warning */}
            <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'white', // White background for the warning box
                    textAlign: 'center',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginTop:4,
                    marginBottom: 4
                }}
            >
                <Typography variant="h4" gutterBottom fontWeight={'bold'}>
                    WARNING
                </Typography>
                <Typography variant="h5">
                    DO NOT DOWNLOAD FROM ANY OTHER SOURCE !
                </Typography>
            </Box>
        </Container>
        </ThemeProvider>
    );
};

export default AndroidApp;
