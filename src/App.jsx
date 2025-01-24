import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import * as THREE from 'three';
import AnimatedBox from './homepage/AnimatedBox.jsx';
import Footer from './footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PreviousPapers from './previousyearpapers/PreviousPapers.jsx';
import PaperSubmission from './submission/PaperSubmission.jsx';
import BBDU from "./pages/BBDU";
import BBDITM from "./pages/BBDITM";
import BBDNIIT from "./pages/BBDNIIT";
import ContactUs from "./contactform/ContactUs.jsx";
import './styles.scss';
import AdsenseAd from './AdsenseAd';
import LabPracticals from "./pages/LabPracticals.jsx";
import BBDULAB from "./pages/BBDULAB.jsx";
import AndroidApp from './pages/AndroidApp.jsx';
import About from "./pages/About";
import JoinTelegram from "../src/homepage/JoinTelegram.jsx"
import SharingIsCaring from '../src/homepage/SharingIsCaring.jsx';
import UploadingResources from '../src/homepage/UploadingResources.jsx';
import TopContributors from '../src/homepage/TopContributors.jsx';

function App() {
    const vantaRef = useRef(null);
    const [selectedButton, setSelectedButton] = useState('/'); // State to track selected button

    useEffect(() => {
        // Check localStorage for previously selected path
        const storedPath = localStorage.getItem('selectedPath');
        if (storedPath) {
            setSelectedButton(storedPath);
        }

        const vantaEffect = window.VANTA.BIRDS({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            scale: 1.0,
            scaleMobile: 1.0,
            colorMode: "lerp",
            birdSize: 1.8,
            separation: 40.0,
            alignment: 45.0,
            quantity: 2.0,
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    // Function to handle button click
    const handleButtonClick = (button) => {
        setSelectedButton(button);
        localStorage.setItem('selectedPath', button); // Store the selected path in localStorage
    };

    return (
        <Router>
            <div
                ref={vantaRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            />

            {/* Main AppBar */}
            <AppBar position="static" sx={{ backgroundColor: 'transparent   ' }}>
                <Toolbar>
                    <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
                        <Typography variant="h2" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                            <span className="shine-text">BBD COLLEGE PAPERS</span>
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Secondary Bar (Always Visible) */}
            <AppBar position="static" color="primary" sx={{ backgroundColor: 'rgba(0,0,0,0.34)' }}>
                <Toolbar sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            backgroundColor: 'black',
                            padding: 1,
                            borderRadius: '10px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/top-contributors', label: 'Previous Papers' },
                            { path: '/submit-paper', label: 'Paper Submit' },
                            { path: '/lab-practicals', label: 'Lab File' },
                            /*{ path: '/android-app', label: 'Android App' },*/
                            /* { path: '/contact', label: 'Contact Us' },*/ 
                            { path: '/About', label: 'About' }
                        ].map((item) => {
                            const isSelected = selectedButton === item.path; // Check if the current button is selected

                            return (
                                <Button
                                    key={item.path}
                                    color="inherit"
                                    component={Link}
                                    to={item.path}
                                    onClick={() => handleButtonClick(item.path)}
                                    sx={{
                                        backgroundColor: isSelected ? 'blue' : 'transparent', // Change background color if selected
                                        '&:hover': {
                                            backgroundColor: isSelected ? 'darkblue' : 'red', // Change hover color
                                        },
                                        margin: '0 4px',
                                    }}
                                >
                                    {item.label}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container sx={{ flex: 1, textAlign: 'center', marginY: 4 }}>
                <Routes>
                    <Route path="/" element={<AnimatedBox />} />
                    <Route path="/join-telegram" element={<JoinTelegram />} />
                    <Route path="/sharing-is-caring" element={<SharingIsCaring />} />
                    <Route path="/previous-papers" element={<PreviousPapers />} />
                    <Route path="/uploading-resources" element={<UploadingResources />} />
                    <Route path="/top-contributors" element={<TopContributors />} />
                    <Route path="/submit-paper" element={<PaperSubmission />} />
                    <Route path="/bbdu" element={<BBDU />} />
                    <Route path="/bbditm" element={<BBDITM />} />
                    <Route path="/bbdniit" element={<BBDNIIT />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/lab-practicals" element={<LabPracticals />} />
                    <Route path="/android-app" element={<AndroidApp />} />
                    <Route path="/bbdulab" element={<BBDULAB />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                <Box>
                    
                </Box>
                <div className="elfsight-app-2e8eba9b-5998-474c-9f4e-721b95ababeb" data-elfsight-app-lazy></div>
            </Container>

            {/* Footer */}
            <Box sx={{ paddingTop: '5vh', paddingBottom: '0' }}>
                <Footer />
            </Box>
        </Router>
    );
}

export default App;
