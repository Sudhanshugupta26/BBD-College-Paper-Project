import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'rgba(0,0,0,0.49)',
                color: '#fff',
                padding: '10px',
                width: '100%',
                height:'1%',
                textAlign: 'center',
                boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.2)',
                position: 'fixed', // Fixed position for the footer
                bottom: 0,        // Stick to the bottom of the viewport
                left: 0,
                zIndex: 1000,     // Ensure it stays above other elements
            }}
        >
            <Container>
                <Typography variant="body2" color="inherit" sx={{ mb: 2 }}>
                    © {new Date().getFullYear()} BBD PAPERS. All rights reserved.
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Link href="https://www.freeprivacypolicy.com/live/391a94a6-8561-498e-9669-ed38b2d88c70" color="inherit" sx={{ mx: 1 }}>
                        Privacy Policy
                    </Link>
                    <Link href="https://www.freeprivacypolicy.com/live/787d1efb-51d9-4c96-aaee-3fea5d5d3ad5" color="inherit" sx={{ mx: 1 }}>
                        Terms of Service
                    </Link>
                    <Link href="/contact" color="inherit" sx={{ mx: 1 }}>
                        Contact_Us
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;
