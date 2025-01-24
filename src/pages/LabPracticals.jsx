import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import labimage from '../assets/lab.jpg';

const LabPracticals = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/bbdulab'); // Update this path according to your route setup
    };

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
                    Lab Practicals
                </Typography>
                <Typography variant="h6" align="center">
                    Welcome to the Lab Practicals page!
                </Typography>

                {/* Collage of images */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Creates a flexible grid with minimum 250px per column
                        gap: 2, // Adds gap between images
                        justifyItems: 'center', // Centers the images horizontally
                        marginTop: 2
                    }}
                >
                    {/* Image 1 */}
                    <img
                        src={labimage}
                        alt="Lab Image 1"
                        className="gif-icon"
                        style={{
                            borderRadius: '16px',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                    {/* Image 2 */}
                    <img
                        src={'https://media.istockphoto.com/id/584570730/vector/electronics-repair-vector.jpg?s=612x612&w=0&k=20&c=uoly-z-SJ_nVVNm-w-m6tkmutAf8nUdK6iZ2uMi2suA='}
                        alt="Lab Image 2"
                        className="gif-icon"
                        style={{
                            borderRadius: '16px',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                    {/* Image 3 */}
                    <img
                        src={'https://cdni.iconscout.com/illustration/premium/thumb/artificial-intelligence-laboratory-illustration-download-in-svg-png-gif-file-formats--brain-configuration-intelligent-ai-development-technologies-pack-people-illustrations-3928911.png'}
                        alt="Lab Image 3"
                        className="gif-icon"
                        style={{
                            borderRadius: '16px',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                    {/* Image 4 */}
                    <img
                        src={'https://static.vecteezy.com/system/resources/thumbnails/000/224/380/small_2x/chemistry-lab-vector-illustration.jpg'}
                        alt="Lab Image 4"
                        className="gif-icon"
                        style={{
                            borderRadius: '16px',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                    {/* Image 5 */}
                    <img
                        src={'https://img.freepik.com/premium-vector/physics-science-school-subject-lesson-concept-theory-book-education-knowledge-textbook-magnet-atom-weights-apple-composition-flat-vector-illustration-isolated-white-background_198278-23745.jpg'}
                        alt="Lab Image 5"
                        className="gif-icon"
                        style={{
                            borderRadius: '16px',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                    {/* Image 6 */}
                    <img
                        src={'https://sunlabtech.com/wp-content/uploads/2019/01/6-Axis-Robot-ARM-Trainer.jpg'}
                        alt="Lab Image 6"
                        className="gif-icon"
                        style={{
                            borderRadius: '16px',
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </Box>

            </Box>

            {/* Attention Box */}
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
                    Attention
                </Typography>
                <Typography variant="h6" align="center">
                    👉 USE YOUR COLLEGE ID TO ACCESS
                </Typography>
            </Box>

            {/* New white box with a button */}
            <Box
                sx={{
                    borderRadius: '16px',
                    boxShadow: 3,
                    padding: { xs: 2, sm: 3, md: 4 },
                    backgroundColor: 'white', // Change to white for the new box
                    textAlign: 'left',
                    maxWidth: '100%',
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    margin: '0 auto',
                    marginBottom: 4
                }}
            >
                <Typography variant="h5" gutterBottom align="center" fontWeight={'bold'}>
                    BBD UNIVERSITY
                </Typography>
                <Typography variant="h6" align="center">
                    Click the button below to access BBDULAB.
                </Typography>
                <Box display="flex" justifyContent="center" marginTop={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNavigate}
                        sx={{
                            mt: 2,
                            border: '2px solid black', // Adds a black border
                            borderRadius: '15px', // Sets the border radius
                            '&:hover': {
                                border: '2px solid black', // Maintain border color on hover
                            },
                        }}
                    >
                        Go to BBDU LAB
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LabPracticals;
    