import React from 'react';
import { Box, Typography, TextField, Button, Container, IconButton, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import {createTheme, ThemeProvider} from "@mui/material/styles";
const theme2 = createTheme({
    palette: {
        primary: {
            main: 'rgba(11,51,225,0.94)', // Red color
        },
    },
});
function ContactUs() {
  return (
      <ThemeProvider theme={theme2}>
    <Container>
      <Box
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: 2,
            width:'90%',
          borderRadius: "20px",
          boxShadow: 3,
          backgroundColor: 'background.paper',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="h5" paragraph>
          We would love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 2,
          }}
        >
          <Link href="https://www.instagram.com/bbdpapers/" target="_blank" rel="noopener noreferrer">
            <IconButton>
              <InstagramIcon sx={{ color: '#E1306C'}} /> {/* Instagram pink color */}
              <Typography variant="h5" sx={{ color: '#E1306C', marginLeft: 1 }}>
                Instagram
              </Typography>
            </IconButton>
          </Link>
        </Box>
          <Typography variant="h6" paragraph>
          OR
        </Typography>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input type="hidden" name="access_key" value="f1088e34-fb42-4eda-8032-a4a0fec25d38" />
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <TextField
            fullWidth
            name="name"
            label="Name"
            variant="outlined"
            margin="normal"
            required
            sx={{
                mt: 2,
                border: '2px solid black', // Adds a black border
                borderRadius: '10px', // Sets the border radius
                '&:hover': {
                    border: '2px solid black', // Maintain border color on hover
                },
            }}
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
            sx={{
                mt: 2,
                border: '2px solid black', // Adds a black border
                borderRadius: '10px', // Sets the border radius
                '&:hover': {
                    border: '2px solid black', // Maintain border color on hover
                },
            }}
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            required
            sx={{
                mt: 2,
                border: '2px solid black', // Adds a black border
                borderRadius: '10px', // Sets the border radius
                '&:hover': {
                    border: '2px solid black', // Maintain border color on hover
                },
            }}
          />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                    mt: 2,
                    border: '2px solid black', // Adds a black border
                    borderRadius: '15px', // Sets the border radius
                    '&:hover': {
                        border: '2px solid black', // Maintain border color on hover
                    },
                }}
            >
                Send Message
            </Button>
            <Box sx={{
          display: 'flex',

          alignItems: 'center',
          boxShadow: 0,
          padding: 4,
          backgroundColor: 'transparent',



        }} ></Box>


        </form>
      </Box>

    </Container>
      </ThemeProvider>
  );
}

export default ContactUs;
