import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import {createTheme, ThemeProvider} from "@mui/material/styles";

// Keyframe for infinite scrolling animation
const slideRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const theme2 = createTheme({
    palette: {
        primary: {
            main: 'rgba(11,51,225,0.94)', // Red color
        },
    },
});
// List of comments
const comments = [
  "Great Website!",
  "Love the request feature!",
  "Easy to Upload",
  "Helpful support team!",
  "Very user-friendly",
  "Clean interface!",
  "Good Website Brother keep it Up.👍",
  "Hello there Wanted to thank you for creating this wonderful website, it's really helpful for BBD students semester/sessional/scop exam preparations",
  "Your Comment can be here too",
  "Upload and find out"
];

function PaperSubmission() {
  return (
      <ThemeProvider theme={theme2}>
    <Container
      sx={{
        textAlign: 'center',
        marginY: 4,
        paddingX: { xs: 1, sm: 2 }, // Responsive horizontal padding
      }}
    >
      {/* "Want to Upload or Request?" Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '16px',
          boxShadow: 3,
          padding: 4,
          backgroundColor: 'background.paper',
          marginBottom: 4,
          width: '100%', // Full width of the container
          maxWidth: '100%', // Ensures the Box does not exceed container width
          boxSizing: 'border-box', // Includes padding in the width calculation
        }}
              >

        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
  Upload & Request
                  </Typography>
                  <img
                      src="https://maxkatz.net/wp-content/uploads/2015/03/cloud_upload1.jpg"
                      alt="Centered Image"
                      style={{
                          display: 'block',  // Makes it a block element so margin auto works
                          borderRadius:'15px',
                          marginLeft: 'auto',  // Automatically adjusts left margin
                          marginRight: 'auto', // Automatically adjusts right margin
                          marginBottom:'25px',
                          width: '80%',         // Adjust the width as per your needs
                          height: 'auto'        // Maintains aspect ratio
                      }}
                  />
                  <Typography variant="h5" paragraph>
                      Help Us Expand the Database by Uploading using the button below.

                  </Typography>
                  <Button
                      variant="contained"
                      color="primary"
                      href="https://form.jotform.com/242723390769061"
                      target="_blank" // Opens in a new tab
                      rel="noopener noreferrer" // For security reasons
                      sx={{
                          mt: 2,
                          border: '2px solid black', // Adds a black border
                          marginBottom:'25px',
                          borderRadius: '15px', // Sets the border radius
                          '&:hover': {
                              border: '2px solid black', // Maintain border color on hover
                          },
                      }}>
                      Upload Papers
                  </Button>
                  <img
                      src="https://static.vecteezy.com/system/resources/previews/041/502/412/non_2x/request-mail-icon-for-apps-and-web-vector.jpg"
                      alt="Centered Image"
                      style={{
                          display: 'block',  // Makes it a block element so margin auto works
                          marginLeft: 'auto',  // Automatically adjusts left margin
                          marginRight: 'auto', // Automatically adjusts right margin
                          width: '80%',         // Adjust the width as per your needs
                          height: 'auto'        // Maintains aspect ratio
                      }}
                  />
                  <Typography variant="h5" paragraph>
                      Request A Paper Not Available on Website

                  </Typography>


        <Button
          variant="contained"
          color="primary"
          href="https://form.jotform.com/242723390769061"
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // For security reasons
          sx={{
              mt: 2,
              border: '2px solid black', // Adds a black border
              borderRadius: '15px', // Sets the border radius
              '&:hover': {
                  border: '2px solid black', // Maintain border color on hover
              },
          }}>
          REQUEST PAPERS
        </Button>
      </Box>

      {/* Comments Box with Infinite Loop */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '16px',
          boxShadow: 3,
          padding: 4,
          backgroundColor: 'background.paper',
          width: '100%',
          overflow: 'hidden', // To hide the overflow from animation
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          What Others Are Saying:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            whiteSpace: 'nowrap', // Prevent wrapping
            animation: `${slideRight} 30s linear infinite`, // Infinite scrolling animation
            gap: 2,
            willChange: 'transform', // Optimization for smoother animation
          }}
        >
          {/* Original set of comments */}
          {comments.map((comment, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                backgroundColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                borderRadius: '8px',
                minWidth: '200px', // Each comment box has a set width
                color: 'white',
                boxShadow: 3,
                textAlign: 'center',
              }}
            >
              {comment}
            </Box>
          ))}

          {/* Duplicate set for seamless loop */}
          {comments.map((comment, index) => (
            <Box
              key={`duplicate-${index}`}
              sx={{
                padding: 2,
                backgroundColor: index % 2 === 0 ? 'primary.main' : 'secondary.main',
                borderRadius: '8px',
                minWidth: '200px',
                color: 'white',
                boxShadow: 3,
                textAlign: 'center',
              }}
            >
              {comment}
            </Box>
          ))}
        </Box>

      </Box>
      <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0)', // White with 50% opacity
        borderRadius: '8px', // Optional: rounded corners
        padding: '20px', // Space inside the box
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0)', // Optional: shadow effect
        width: '300px', // Width of the box
        height: '80px',
        textAlign: 'center', // Center the text
      }}
    >
      <Typography variant="h6" sx={{ color: '#000' }}>

      </Typography>
      <Typography variant="body2" sx={{ color: '#000' }}>

      </Typography>
    </Box>

    </Container>
      </ThemeProvider>
  );
}

export default PaperSubmission;
