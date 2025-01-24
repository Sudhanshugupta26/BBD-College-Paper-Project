import React from 'react';
import './About.css';

import MeetTheDevelopers from '../homepage/MeetTheDevelopers';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <h5 className="about-description">
          At <strong>BBD College Papers</strong>, we are committed to making academic preparation easier
          and more accessible for students at <strong>BBDU</strong>. Our platform provides a centralized
          repository of previous year question papers, helping students prepare for exams efficiently.
        </h5>
        <h5 className="about-description">
          With a focus on simplicity and usability, we ensure that our website is easy to navigate, offering
          quick access to a wide range of semester-wise and subject-specific papers. Whether you’re looking for
          recent exam papers or older archives, you’ll find everything you need with just a few clicks.
        </h5>

        <h2 className="about-mission-title">Our Mission</h2>
        <h5 className="about-description">
          We aim to support the academic success of BBDU students by bridging the gap between students and
          essential resources. By creating a collaborative platform, we encourage knowledge sharing and active participation.
        </h5>

        <h2 className="about-why-title" >Why Choose Us?</h2>
        <ul className="about-why-list">
          <li>
            📚 <strong>Comprehensive Database:</strong> Explore question papers across various years and subjects.
          </li>
          <li>
            🙌 <strong>User Contribution:</strong> Students can upload papers or request specific ones, fostering a collaborative community.
          </li>
          <li>
            ⚡ <strong>Seamless Access:</strong> Download papers effortlessly with a clean, organized interface.
          </li>
        </ul>

        <h5 className="about-description">
          We believe in the power of shared resources to unlock academic excellence. Join us in creating a hub for success, one paper at a time.
        </h5>
          </div>
          <div>
              
                  <MeetTheDevelopers />          </div>
      </div>
    
    );

};

export default About;
