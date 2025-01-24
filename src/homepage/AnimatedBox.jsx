import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimatedBox.css';
import {Box, Button, Typography} from "@mui/material";
import androidAppImage1 from '../assets/1.jpg'; // Adjust the paths if necessary
import androidAppImage2 from '../assets/2.jpg';
import androidAppImage3 from '../assets/3.jpg';
import androidAppImage4 from '../assets/4.jpg';
import androidAppImage5 from '../assets/5.jpg';
import MeetTheDevelopers from './MeetTheDevelopers';
import BlogSection from './BlogSection';
function AnimatedBox() {
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
            navigate('/top-contributors');
        }, 1000);
    };

    return (
        <>


            {/* Main Animated Box Content */}
            <div className="animated-box">
                 <Box sx={{
          display: 'flex',

          alignItems: 'center',
          boxShadow: 0,
          padding: 4,
          backgroundColor: 'transparent',



        }} ></Box>
                <div className="text-content">

                    <h1>Access Previous Year College Papers in One Click!</h1>
                    <h3 style={{fontSize:"1.5rem",fontWeight:"bold"}}>Start exploring now and give your preparation the edge it deserves!</h3>
                </div>
                
               
                
                <img
                    src="https://cdn-icons-gif.flaticon.com/6172/6172540.gif"
                    alt="Animated GIF"
                    className="gif-icon"
                />
                <button
                    onClick={handleClick}
                    className="animate-button"
                    style={{
                        border: '2px solid black',
                        padding: '10px',
                        paddingBottom: '5px',
                        paddingRight: '10px',
                        backgroundColor: 'rgba(11,51,225,0.94)',
                        cursor: 'pointer',
                        fontSize: '20px',
                        transition: 'border-color 0.3s ease',
                    }}
                >
                    <img
                        src="https://img.icons8.com/?size=100&id=rKqQiYPTkVLU&format=png&color=000000"
                        alt="Animated Mouse"
                        className={`button-icon ${animate ? 'move-icon' : ''}`}
                        style={{
                            marginBottom: '10px',
                        }}
                    />
                    Click Here
                </button>

                
                <h3>A student community platform for sharing and accessing P.Y. papers.</h3>
                 <Box sx={{
          display: 'flex',

          alignItems: 'center',
          boxShadow: 0,
          padding: 4,
          backgroundColor: 'transparent',



        }} ></Box>
            </div>
            <Box sx={{
          display: 'flex',

          alignItems: 'center',
          boxShadow: 0,
          padding: 4,
          backgroundColor: 'transparent',



        }} ></Box><Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '16px',
            boxShadow: 3,
            padding: 4,
            backgroundColor: 'white',
            marginBottom: 4,
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
        }}
    >
        <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
            
            Announcement!
        </Typography>
        <img
            src={androidAppImage5}
            alt="New Preview"
            style={{ width: '100%', maxWidth: '1000px', borderRadius: '8px' }}
        />
            </Box>
            {/* Blog Section*/}






            <BlogSection />






            {/* FEATURES Section Outside */}
            <Box
                sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '16px',
          boxShadow: 3,
          padding: 4,
          backgroundColor: 'black',
          marginBottom: 4,
          width: '100%', // Full width of the container
          maxWidth: '100%', // Ensures the Box does not exceed container width
          boxSizing: 'border-box', // Includes padding in the width calculation
        }}
            >
                <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
                    About
                </Typography>
                <Box
                sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '16px',
          boxShadow: 3,
          padding: 4,
          backgroundColor: 'lightblue',
          marginBottom: 4,
          width: '100%', // Full width of the container
          maxWidth: '100%', // Ensures the Box does not exceed container width
          boxSizing: 'border-box', // Includes padding in the width calculation
        }}
            ><Typography><Typography variant="h5" align="center" gutterBottom fontWeight={"bold"}>
                    Prepare smarter, not harder, with our collection of previous year college papers designed to help you excel in your semester exams.
                </Typography></Typography>
                <Typography variant="h5"> Our mission is to simplify your learning journey by providing easy access to past question papers, study materials, syllabus outlines, and academic insights that can help you excel in your studies.</Typography>
                <Typography variant="h5">No more endless searching across unreliable platforms! We've brought all the legit and high-quality resources together in one place, tailored to meet the needs of students striving for success. </Typography>

                <Typography variant="h6" align="center">

                    <unorderedlist><h3>BBD University</h3>&<h3>BBDNIIT & BBDNITM Colleges (AKTU)</h3></unorderedlist>
                </Typography>

                </Box>

            </Box>
            <Box
                sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '16px',
          boxShadow: 3,
          padding: 4,
          backgroundColor: 'black',
          marginBottom: 4,
          width: '100%', // Full width of the container
          maxWidth: '100%', // Ensures the Box does not exceed container width
          boxSizing: 'border-box', // Includes padding in the width calculation
        }}
            >
                <Typography variant="h4" align="center" fontWeight="bold" mb={2}>
                    Practical Exams
                </Typography><Box
                sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '16px',
          boxShadow: 3,
          padding: 4,
          backgroundColor: 'lightblue',
          marginBottom: 4,
          width: '100%', // Full width of the container
          maxWidth: '100%', // Ensures the Box does not exceed container width
          boxSizing: 'border-box', // Includes padding in the width calculation
        }}
            >
                <Typography variant="h6" align="center" gutterBottom style={{fontSize: '1.6rem', fontWeight: 'bold'}}>
                   <h3>Practical Made Easy: Access BBD University Lab Files for Assessments!</h3><h5 >
This website also provides lab files for BBD University students.</h5>

                </Typography> <Box display="flex" justifyContent="center" marginTop={2} >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => window.open('/bbdulab')} // Opens Google in a new tab
                        sx={{
                            mt: 2,
                            border: '2px solid black', // Adds a black border
                            borderRadius: '15px', height:"80px"
                            ,width:"250px",// Sets the border radius
                            '&:hover': {
                                border: '2px solid white', // Maintain border color on hover
                            },
                        }}><h3>Go To Lab!</h3>


                    </Button>
                </Box></Box>

            </Box>
             
            <MeetTheDevelopers/>

        </>
    );
}

export default AnimatedBox;
