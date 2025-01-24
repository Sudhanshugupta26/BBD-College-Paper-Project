// BBDULAB.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const BBDULAB = () => {
    return (
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
                <Typography variant="h4" gutterBottom align="center" fontWeight={'bold'}>
                    Welcome to BBDU LAB
                </Typography>
                <Typography variant="h6" align="center">
                    Here you can find all the resources related to BBDU LAB.
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'white', // Set to white background
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4,
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h4" align="center" fontWeight={'bold'}>
                    Attention
                </Typography>
                <Typography variant="h6" align="center">
                    👉 USE YOUR COLLEGE ID TO ACCESS
                </Typography>
                <Typography variant="body1"></Typography>
            </Box>

            {/* Separate boxes for each B.Tech program */}
            <Box
                sx={{
                    borderRadius: '20px', // Increased border radius
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'rgba(11, 51, 225, 0.94)', // Changed to the specified rgba color
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 2,
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h6" align="center" sx={{ color: 'white' }}>
                    <a href="https://drive.google.com/drive/folders/1xo1XHpN_mCrp6ULsoA4qG_-jn5CqfYhu?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        B.Tech (CSE)
                    </a>
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '20px', // Increased border radius
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'rgba(11, 51, 225, 0.94)', // Changed to the specified rgba color
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 2,
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h6" align="center" sx={{ color: 'white' }}>
                    <a href="https://drive.google.com/drive/folders/1ulIvXOd8uea7klrkw4AL70h-ah3PX2fo?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        B.Tech (CSE-AI)
                    </a>
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '20px', // Increased border radius
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'rgba(11, 51, 225, 0.94)', // Changed to the specified rgba color
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 2,
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h6" align="center" sx={{ color: 'white' }}>
                    <a href="https://drive.google.com/drive/folders/1yr4PzZnnkA-I5aVnoGftLSfrk6J5lvi9?usp=drive_link" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        B.Tech (CSE-CCML)
                    </a>
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '20px', // Increased border radius
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'rgba(11, 51, 225, 0.94)', // Changed to the specified rgba color
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4, // Last box margin
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h6" align="center" sx={{ color: 'white' }}>
                    <a href="https://drive.google.com/drive/folders/1aP2f9d-rBrWah1k1UG3q4B22zvbmCBEs?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        B.Tech (CSE-IOTBC)
                    </a>
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '20px', // Increased border radius
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'white', // Set to white background
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 2,
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h6" align="center">
                    IF ABOVE LINKS DO NOT WORK THEN VISIT THE OFFICIAL ONE BELOW
                </Typography>
            </Box>
            <Box
                sx={{
                    borderRadius: '20px', // Increased border radius
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'rgba(11, 51, 225, 0.94)', // Changed to the specified rgba color
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 2,
                    border: '6px solid black', // White border
                }}
            >
                <Typography variant="h6" align="center" sx={{ color: 'white' }}>
                    <a href="https://shorturl.at/lhzzz" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                        OFFICIAL BBD CODE LAKE SITE
                    </a>
                </Typography>
            </Box>
        </Container>
    );
};

export default BBDULAB;
