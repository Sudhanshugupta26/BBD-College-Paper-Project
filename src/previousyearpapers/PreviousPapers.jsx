import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Example papers data; replace with your actual data source
const papers = [
    { id: 1, title: 'BBDU', image: 'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2JhYnUtYmFuYXJhc2ktZGFzLW5hdGlvbmFsLWluc3RpdHV0ZS1vZi10ZWNobm9sb2d5LWFuZC1tYW5hZ2VtZW50LmpwZw.png', route: '/bbdu' },
    { id: 2, title: 'BBDITM', image: 'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2JhYnUtYmFuYXJhc2ktZGFzLW5hdGlvbmFsLWluc3RpdHV0ZS1vZi10ZWNobm9sb2d5LWFuZC1tYW5hZ2VtZW50LmpwZw.png', route: '/bbditm' },
    { id: 3, title: 'BBDNIIT', image: 'https://static.ambitionbox.com/assets/v2/images/rs:fit:1280:960:false:false/bG9jYWw6Ly8vbG9nb3Mvb3JpZ2luYWxzL2JhYnUtYmFuYXJhc2ktZGFzLW5hdGlvbmFsLWluc3RpdHV0ZS1vZi10ZWNobm9sb2d5LWFuZC1tYW5hZ2VtZW50LmpwZw.png', route: '/bbdniit' },
    // Add more papers as needed
];

// Create a custom theme with red as the primary color
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgba(11,51,225,0.94)',
        },
    },
});

function PreviousPapers() {
    const navigate = useNavigate();  // Initialize the navigate function

    const handleViewClick = (route) => {
        navigate(route);  // Use the navigate function to go to the route
    };

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ marginY: 4 }}>
                {/* Responsive rounded-corner rectangle for the heading */}
                <Box
                    sx={{
                        borderRadius: '25px',
                        boxShadow: 3,
                        padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
                        backgroundColor: 'background.paper',
                        marginBottom: { xs: 6, sm: 8, md: 4 }, // Responsive margin-bottom for spacing
                        textAlign: 'center',
                        maxWidth: '100%', // Ensure it doesn’t overflow
                        width: { xs: '90%', sm: '80%', md: '70%' }, // Responsive width
                        margin: '0 auto', // Center the box horizontally
                    }}
                >
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Previous Year Papers
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Here you can find the previous year papers for BBD. Click on any paper to view or download.
                    </Typography>
                </Box>

                {/* Grid layout for papers */}
                <Grid container spacing={3}>
                    {papers.map((paper) => (
                        <Grid item xs={12} sm={6} md={4} key={paper.id}>
                            <Card sx={{ borderRadius: '25px' }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: { xs: '50px', sm: '350px' }, // Adjusted height for smaller images
                                        objectFit: 'contain', // Ensures the image scales properly and fits within the bounds
                                        imageRendering: 'crisp-edges', // Improves image quality
                                    }}
                                    image={paper.image}
                                    alt={paper.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {paper.title}
                                    </Typography>
                                    <Button sx={{
                                        mt: 2,
                                        border: '2px solid black', // Adds a black border
                                        borderRadius: '15px', // Sets the border radius
                                        '&:hover': {
                                            border: '2px solid black', // Maintain border color on hover
                                        },
                                    }}
                                        variant="contained"
                                        color="primary" // This will now be red
                                        fullWidth
                                        onClick={() => handleViewClick(paper.route)}
                                    >
                                        View
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default PreviousPapers;
