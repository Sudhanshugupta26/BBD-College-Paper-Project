import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for internal navigation

function UploadingResources() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                borderRadius: '25px',
                backgroundColor: '#f5f5f5',
                padding: 4,
                '@media (max-width: 600px)': {
                    padding: 2,  // Reduced padding on small screens
                },
            }}
        >
            {/* Header Section */}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    textAlign: 'center',
                    marginBottom: 2,
                    fontSize: {
                        xs: '1.8rem', // Mobile screens
                        sm: '2rem',  // Tablet screens
                        md: '2.5rem', // Desktop screens
                    },
                }}
            >
                Uploading Resources Will Benefit Everyone
            </Typography>

            {/* Image Section */}
            <img
                src="https://media.istockphoto.com/id/1396218249/vector/happy-person-or-businessman-smiling-and-throwing-papers-in-air-vector-cartoon-stick-figure.jpg?s=612x612&w=0&k=20&c=TJzzmtJUU0SDlOvgsvLaqA3pj5V4d3tQ7EwdoQeHkQw="
                alt="Uploading Resources"
                style={{
                    width: 'auto', // Image size adjusted
                    height: '50%',
                    marginBottom: '20px', // Spacing below the image
                    borderRadius: '10px', // Optional rounded corners
                    maxWidth: '100%', // Prevent image overflow on smaller screens
                }}
            />

            {/* Button Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    flexDirection: {
                        xs: 'column', // Stack buttons vertically on mobile
                        sm: 'row',    // Display side by side on tablet and larger screens
                    },
                    gap: 2, // Spacing between the buttons
                    '@media (max-width: 600px)': {
                        gap: 1, // Reduce gap on smaller screens
                    },
                }}
            >
                {/* Back Button */}
                <Button
                    variant="outlined"
                    onClick={() => navigate('/sharing-is-caring')} // Navigate to "Sharing Is Caring" page
                    sx={{
                        color: 'black',
                        borderColor: 'black',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        width: {
                            xs: '100%', // Full width for mobile
                            sm: 'auto', // Auto width for larger screens
                        },
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
                    onClick={() => navigate('/join-telegram')} // Navigate to "Join Telegram" page
                    sx={{
                        backgroundColor: 'green',
                        color: 'white',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        width: {
                            xs: '100%', // Full width for mobile
                            sm: 'auto', // Auto width for larger screens
                        },
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

export default UploadingResources;
