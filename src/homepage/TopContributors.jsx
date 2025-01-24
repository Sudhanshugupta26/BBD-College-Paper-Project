import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Import a trophy icon for top contributors
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { useNavigate } from 'react-router-dom'; // Use useNavigate for routing

function TopContributors() {
    const navigate = useNavigate(); // Initialize useNavigate hook for internal navigation

    const contributors = [
        { name: "Devansh Gupta", rank: 1 },
        { name: "Prashant Pandey", rank: 2 },
        { name: "__________", rank: 3 },
        { name: "__________", rank: 4 },
        { name: "__________", rank: 5 },
        { name: "__________", rank: 6 },
        { name: "__________", rank: 7 },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5', // Light background color
                padding: 4,
                borderRadius: '25px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Add a subtle shadow for depth
                transition: 'all 0.3s ease-in-out', // Smooth transition for overall container
            }}
        >
            {/* Title Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} // Fade-in effect
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: '#333',
                        textAlign: 'center',
                        marginBottom: 2,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: {
                            xs: '1.8rem',  // Mobile
                            sm: '2.2rem',  // Tablet
                            md: '3rem',    // Desktop
                        },
                        transition: 'font-size 0.3s ease-in-out', // Smooth transition for title size
                    }}
                >
                    Top Contributors 
                </Typography>
            </motion.div>

            {/* Subtitle Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: '#555',
                        textAlign: 'center',
                        marginBottom: 4,
                        fontStyle: 'italic',
                        fontSize: {
                            xs: '1rem',    // Mobile
                            sm: '1.2rem',  // Tablet
                            md: '1.5rem',  // Desktop
                        },
                        transition: 'font-size 0.3s ease-in-out', // Smooth transition for subtitle size
                    }}
                >
                    These are the top contributors who have been sharing valuable resources.
                </Typography>
                <h3>Join WhatsApp to be on the list</h3>
            </motion.div>

            {/* Contributors List */}
            <Box sx={{ textAlign: 'center', width: '100%' }}>
                {contributors.map((contributor, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 2,
                            backgroundColor: '#fff',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Adding a shadow for better visibility
                            width: '70%',
                            margin: '0 auto',
                            '&:hover': {
                                backgroundColor: '#f1f1f1',
                                transform: 'scale(1.05)', // Slightly scale up on hover
                                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out', // Smooth transition for hover effects
                            },
                            transition: 'all 0.3s ease-in-out', // Smooth transition for other properties
                        }}
                    >
                        <EmojiEventsIcon sx={{ color: '#ffd700', marginRight: 2 }} /> {/* Trophy icon for each contributor */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: '#333',
                                fontSize: '1.2rem',
                                transition: 'color 0.3s ease-in-out', // Smooth transition for text color
                            }}
                        >
                            {contributor.rank}. {contributor.name}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Buttons with Framer Motion */}
            <Box sx={{ display: 'flex', gap: 2, marginTop: 4 }}>
                {/* Back Button with Framer Motion */}
                <motion.div
                    initial={{ x: '-100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-100vw', opacity: 0 }}
                    transition={{ duration: 0.75 }} // Slide-in effect for Back button
                >
                    <Button
                        variant="outlined"
                        onClick={() => navigate('/')} // Navigate back to Home page
                        sx={{
                            color: 'black',
                            borderColor: 'black',
                            borderRadius: '10px',
                            padding: '10px 20px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            transition: 'all 0.3s ease-in-out', // Smooth transition for button hover
                            '&:hover': {
                                backgroundColor: 'lightgray',
                                borderColor: 'darkgray',
                                transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
                            },
                        }}
                    >
                        Back
                    </Button>
                </motion.div>

                {/* Next Button with Framer Motion */}
                <motion.div
                    initial={{ x: '100vw', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '100vw', opacity: 0 }}
                    transition={{ duration: 0.75 }} // Slide-in effect for Next button
                >
                    <Button
                        variant="contained"
                        onClick={() => navigate('/sharing-is-caring')} // Navigate to the next page
                        sx={{
                            backgroundColor: 'green',
                            color: 'white',
                            borderRadius: '10px',
                            padding: '10px 20px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s ease-in-out', // Smooth background color transition
                            '&:hover': {
                                backgroundColor: 'darkgreen',
                                transition: 'background-color 0.3s ease-in-out', // Smooth transition for hover effect
                            },
                        }}
                    >
                        Next
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
}

export default TopContributors;
