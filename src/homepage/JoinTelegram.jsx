import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // For smooth animation
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './AnimatedBox.css';
import whatsappGif from '../assets/whatsapp.jpg'; // Replace with the actual path to your QR image

function JoinTelegram() {
    const [showNextButton, setShowNextButton] = useState(false);
    const [countdown, setCountdown] = useState(2); // Countdown starts at 10 seconds
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        // Timer to decrement countdown every second
        const interval = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        // Timeout to show the "Next" button after the countdown reaches 0
        const timer = setTimeout(() => {
            setShowNextButton(true);
            clearInterval(interval); // Clear interval when the countdown ends
        }, 2000); // 10 seconds (10000 ms)

        // Cleanup both the timer and interval on component unmount
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    const handleNextButtonClick = () => {
        // Navigate to the next page (SharingIsCaring page)
        navigate('/previous-papers');
    };

    const handleBackButtonClick = () => {
        // Navigate back to the previous page
        navigate('/uploading-resources');
    };

    return (
        <>
            {/* Main Content */}
            <div className="animated-box">
                <div className="text-content">
                    <h1>Join Our WhatsApp Channel!</h1>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        Stay updated and contribute by sharing question papers!
                    </h3>
                </div>

                {/* Larger QR image */}
                <img
                    src={whatsappGif} // QR code image
                    alt="WhatsApp QR"
                    className="gif-icon"
                    style={{
                        height: '20%',
                        width: '20%',
                        marginBottom: '20px',
                        borderRadius: '8px',
                    }}
                />

                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open('https://chat.whatsapp.com/Jvhbc1tIfojDKXo1ejcD8p')}
                        sx={{
                            mt: 2,
                            backgroundColor: 'black',
                            color: 'white',
                            border: '2px solid black',
                            borderRadius: '15px',
                            height: '100px',
                            width: '320px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '0 16px',
                            '&:hover': {
                                backgroundColor: 'lightgreen',
                                border: '2px solid white',
                            },
                        }}
                    >
                        {/* Animated WhatsApp icon */}
                        <img
                            src="https://cliply.co/wp-content/uploads/2021/08/372108180_WHATSAPP_ICON_400.gif"
                            alt="Animated WhatsApp Icon"
                            style={{ height: '60px', marginRight: '10px' }}
                        />
                        <h5>Click Here to Join WhatsApp</h5>
                    </Button>
                </Box>

                {/* Countdown Timer */}
                {!showNextButton && (
                    <Typography
                        sx={{
                            marginTop: 2,
                            fontSize: '1.5rem',
                            color: 'red',
                            textAlign: 'center',
                        }}
                    >
                        Wait  for {countdown} second{countdown !== 1 && 's'}...
                    </Typography>
                )}

                {/* Smoothly Appearing Next Button */}
                {showNextButton && (
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }} // Duration of the fade-in effect
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleNextButtonClick} // Navigate to next page
                                sx={{
                                    mt: 2,
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    border: '2px solid black',
                                    borderRadius: '15px',
                                    height: '80px',
                                    width: '280px',
                                    '&:hover': {
                                        backgroundColor: 'blue',
                                        border: '2px solid white',
                                    },
                                }}
                            >
                                <h5>Continue To Question Papers</h5>
                            </Button>
                        </motion.div>
                    </Box>
                )}

                {/* Back Button */}
                <Box display="flex" justifyContent="center" marginTop={4}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }} // Fade-in transition for Back button
                    >
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={handleBackButtonClick} // Navigate back to previous page
                            sx={{
                                mt: 2,
                                border: '2px solid black',
                                color: 'black',
                                borderRadius: '15px',
                                height: '50px',
                                width: '200px',
                                '&:hover': {
                                    backgroundColor: 'lightcoral',
                                    border: '2px solid white',
                                },
                            }}
                        >
                            Back
                        </Button>
                    </motion.div>
                </Box>
            </div>
        </>
    );
}

export default JoinTelegram;
