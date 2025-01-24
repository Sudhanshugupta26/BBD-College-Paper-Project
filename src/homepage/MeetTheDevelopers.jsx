import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const MeetTheDevelopers = () => {
    const developers = [
        {
            name: 'Tanay Anand Mishra',
            img: 'https://avatars.githubusercontent.com/u/127974995?v=4',
            link: 'https://github.com/Tanay2920003'
        },
        {
            name: 'Sudhanshu Gupta',
            img: 'https://avatars.githubusercontent.com/u/115552362?v=4',
            link: 'https://github.com/Sudhanshugupta26'
        },
        {
            name: 'Divyanshu Yadav',
            img: 'https://avatars.githubusercontent.com/u/190244333?v=4',
            link: 'https://github.com/divyyadav007'
        },
    ];

    const handleProfileClick = (link) => {
        window.open(link, '_blank');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4,
                color: 'white',
                borderRadius: 4,
                overflow: 'hidden',
                background: 'linear-gradient(45deg, rgba(255,255,255,1), rgba(0,0,0,1), rgba(0,0,139,1), rgba(255,255,255,1))',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 60s ease-in-out infinite',
            }}
        >
            <Typography
                variant="h3"
                gutterBottom
                color="red"
                fontWeight="bold"
                sx={{
                    textAlign: 'center',
                    animation: 'moveShadow 5s infinite',
                    textShadow: '0 0 5px black, 0 0 10px black, 0 0 15px black',
                    '@keyframes moveShadow': {
                        '0%': { textShadow: '0 0 25px black, 0 0 10px black, 0 0 15px black' },
                        '30%': { textShadow: '0 0 5px black, 0 0 5px black, 0 0 5px black' },
                        '50%': { textShadow: '0 0 5px black, 0 0 5px black, 0 0 5px black' },
                        '100%': { textShadow: '0 0 25px black, 0 0 10px black, 0 0 15px black' },
                    },
                }}
            >
                Meet the Developers
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 4,
                    marginTop: 2,
                    justifyContent: 'center', // Center the items on all screen sizes
                    width: '100%', // Make sure it uses full width for wrapping
                }}
            >
                {developers.map((developer, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            padding: 3,
                            borderRadius: '10%',
                            cursor: 'pointer',
                            boxShadow: 3,
                            transition: 'transform 0.2s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                            maxWidth: 200, // Set a maximum width to ensure proper sizing
                            textAlign: 'center',
                        }}
                        onClick={() => handleProfileClick(developer.link)}
                    >
                        <Avatar
                            src={developer.img}
                            alt={developer.name}
                            sx={{
                                width: { xs: 70, sm: 100 }, // Responsive width
                                height: { xs: 70, sm: 100 }, // Responsive height
                                marginBottom: 2,
                            }}
                        />
                        <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                            {developer.name}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Adding Keyframes for the moving gradient effect */}
            <style>
                {`
          @keyframes gradientShift {
            0% {
              background-position: 0% 20%;
            }
            50% {
              background-position: 100% 20%;
            }
            100% {
              background-position: 0% 80%;
            }
          }
        `}
            </style>
        </Box>
    );
};

export default MeetTheDevelopers;
