import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SharingIsCaring() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleNextButtonClick = () => {
        // Navigate to the "Uploading Resources" page
        navigate('/uploading-resources');
    };

    const handleBackButtonClick = () => {
        // Navigate to the "Top Contributors" page
        navigate('/top-contributors');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'null',
                
                height: '100vh',
                backgroundColor: '#f5f5f5', // Light background color
                padding: 2,
                borderRadius: '25px',
            }}
        >
            {/* Header Section */}
            <img
                src="https://www.creativefabrica.com/wp-content/uploads/2020/03/26/1585211237/Sharing-is-caring.jpg"
                alt="Sharing is Caring"
                style={{
                    maxWidth: 'auto', // Makes the image responsive, max width 100% of its container
                    height: '30%',   // Height will adjust automatically to maintain aspect ratio
                    borderRadius: '10px', // Optional, for rounded corners
                    marginBottom: '20px', // Spacing below the image
                    marginTop: '100px',
                }}
            />

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center',
                    marginBottom: 2,
                }}
            >
                Sharing is Caring
            </Typography>

            {/* Subtitle Section */}
            <Typography
                variant="h5"
                sx={{
                    color: '#555',
                    textAlign: 'center',
                    marginBottom: 4,
                }}
            >
                Help others by sharing your knowledge and resources. Together, we grow stronger!
            </Typography>

            {/* Button Section - Next and Back side by side */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                    variant="outlined"
                    onClick={handleBackButtonClick} // Use navigate here
                    sx={{
                        color: 'black',
                        borderColor: 'black',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: 'lightgray',
                            borderColor: 'darkgray',
                        },
                    }}
                >
                    Back
                </Button>
                {/* Next Button */}
                <Button
                    variant="contained"
                    onClick={handleNextButtonClick} // Use navigate here
                    sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        '&:hover': {
                            backgroundColor: 'darkgreen',
                        },
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}

export default SharingIsCaring;
