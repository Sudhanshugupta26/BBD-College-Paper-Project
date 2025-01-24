import React, { useState, useEffect } from 'react';
import { Container, Typography, Box,Button, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { supabase } from '../backend/supabaseClient'; // Adjust path if needed
import DownloadButton from '../backend/DownloadButton';
import {createTheme, ThemeProvider} from "@mui/material/styles"; // Adjust path if needed


const theme4 = createTheme({
    palette: {
        primary: {
            main: 'rgba(11,51,225,0.94)', // Red color
        },
    },
});

function BBDU() {
  const [papers, setPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);
  const [collegeFilter, setCollegeFilter] = useState('BBDU'); // Fixed to BBDU
  const [yearFilter, setYearFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [subjectCodeFilter, setSubjectCodeFilter] = useState('');

  // Array of years from 2015 to 2024, with 2024 at the top
  const years = Array.from({ length: 7 }, (_, i) => (2024 - i).toString());

  // Array of subject codes
  const subjectCodes = [ 'CYBER LAW & SECURITY','NETWORK SECURITY AND CRYPTOPGRAPHY','MANAGEMENT INFORMATION SYSTEM','COMPILER DESIGN','DIGITAL LOGIC DESIGN',
      'PREDICTIVE ANALYTICS','AGILE DEVELOPMENT METHODOLOGY','COMPUTER NETWORKS','AUTOMATA THEORY AND FORMAL LANGUAGES','WEB SERVICES','ENGINEERING AND MANAGERIAL ECONOMICS',
      'BASICS OF DOT NET FRAMEWORK AND C SHARP',
'WEB TECHNOLOGY',
'DATA WAREHOUSING AND DATA MINING',
'SOFTWARE ENGINEERING',
'DATA SCIENCE',
'BIG DATA FUNDAMENTALS',
'NOSQL AND DBAAS 101',
'DESCRIPTIVE ANALYTICS',
'ARTIFICIAL INTELLIGENCE','COMMUNICATIVE ENGLISH','ENGINEERING CHEMISTRY','ENGINEERING PHYSICS','TECHNICAL COMMUNICATION','ENVIRONMENT & ECOLOGICAL SUSTAINABILITY','BASICS OF PYTHON PROGRAMMING','PROGRAMMING CONCEPTS WITH PYTHON','DATA VISUALIZATION WITH PYTHON', 'CHEMISTRY', 'AI IN MECHANICAL ENGINEERING SYSTEM', 'DIFFERENTIAL EQUATION AND FOURIER ANALYSIS', 'PHYSICS II', 'ENVIRONMENTAL STUDIES', 'COMPLEX ANALYSIS AND INTEGRAL TRANSFORMS', 'STATISTICAL AND NUMERICAL TECHNIQUES', 'DISCRETE MATHEMATICS', 'COMPUTER CONCEPTS AND PROGRAMMING IN C', 'DATABASE MANAGEMENT SYSTEMS', 'OPERATING SYSTEM', 'DATA STRUCTURE USING C', 'BASIC ELECTRONICS ENGINEERING', 'BASIC ELECTRICAL ENGINEERING', 'INDUSTRIAL PSYCHOLOGY', 'INDUSTRIAL SOCIOLOGY', 'ENGINEERING MECHANICS', 'INTERNET OF THINGS APPLICATION DEVELOPMENT', 'JAVA FUNDAMENTAL', 'BLOCKCHAIN ESSENTIALS', 'BUSINESS LAW', 'SALES MANAGEMENT', 'PRODUCTION AND OPERATIONS MANAGEMENT', 'MARKETING MANAGEMENT', 'HUMAN RESOURCE MANAGEMENT AND DEVELOPMENT', 'OPERATIONS RESEARCH', 'MATRICES AND CALCULAS', 'PHYSICS I', 'BASIC MECHANICAL ENGINEERING', 'PROFESSIONAL PRACTICE II', 'DEVELOPMENT LEGISLATIONS', 'ARCHITECTURAL DESIGN II', 'BUILDING CONSTRUCTION AND MATERIALS II', 'ARCHITECTURAL STRUCTURE II', 'ARCHITECTURAL DRAWING II', 'VISUAL ARTS II', 'HISTORY OF ARCHITECTURE AND CULTURE I', 'ARCHITECTURAL DESIGN IV', 'BUILDING CONSTRUCTION & MATERIALS IV', 'ARCHITECTURAL STRUCTURE IV', 'RESEARCH METHODOLOGY', 'ESSENTIALS OF BUSINESS COMMUNICATION', 'COMPUTER APPLICATION IN MANAGEMENT', 'BUSINESS STATISTICS', 'ORGANIZATIONAL BEHAVIOUR', 'DATABASE MANAGEMENT SYSTEM IMBA', 'CONSTRUCTION AND MATERIALS VIII', 'ARCHITECTURAL DESIGN VIII', 'BUILDING SERVICES III', 'SPECIFICATIONS AND ESTIMATION', 'CLIMATOLOGY', 'HISTORY OF ARCHITECTURE AND CULTURE III (ISLAMIC ARCH)', 'BUILDING SERVICES II', 'ARCHITECTURAL DESIGN VI', 'THEORY OF DESIGN', 'ARCHITECTURAL STRUCTURES VI', 'CONSTRUCTION AND MATERIALS VI', 'BUILDING SERVICES I', 'HISTORY OF ARCHITECTURE II', 'ARCHITECTURAL STRUCTURES IV', 'ARCHITECTURAL STRUCTURES II', 'BUILDING CONSTRUCTION & MATERIALS VI', 'SPECIFICATION COST ESTIMATION & BUDGETING', 'WORKING DRAWING', 'BUILDING SERVICES IV'];

  useEffect(() => {
    const fetchPapers = async () => {
      const { data, error } = await supabase
        .from('papers')
        .select('id, subject_code, year, type, college, file_path');

      if (error) {
        console.error('Error fetching papers:', error);
      } else {
        setPapers(data);
      }
    };

    fetchPapers();
  }, []);

  useEffect(() => {
    let filtered = papers;
    if (collegeFilter) {
      filtered = filtered.filter(item => item.college === collegeFilter);
    }
    if (yearFilter) {
      filtered = filtered.filter(item => item.year === yearFilter);
    }
    if (typeFilter) {
      filtered = filtered.filter(item => item.type === typeFilter);
    }
    if (subjectCodeFilter) {
      filtered = filtered.filter(item => item.subject_code === subjectCodeFilter);
    }
    setFilteredPapers(filtered);
  }, [papers, collegeFilter, yearFilter, typeFilter, subjectCodeFilter]);

  return (
      <ThemeProvider theme={theme4}>
    <Container sx={{ marginY: 4 }}>
      {/* Introductory Box */}
      <Box
        sx={{
          borderRadius: '16px',
          boxShadow: 3,
          padding: { xs: 2, sm: 3, md: 4 },
          backgroundColor: 'background.paper',
          textAlign: 'center',
          maxWidth: '100%',
          width: { xs: '90%', sm: '80%', md: '70%' },
          margin: '0 auto',
          marginBottom: 4
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={'bold'}>
          BBDU Previous Year Papers
        </Typography>
        <Typography variant="h6">
          Here are the previous year papers for BBDU. You can view and download them below.
        </Typography>
      </Box>
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

        <Typography variant="h4" align={'center'} fontWeight={'bold'}>
         Attention
        </Typography>
        <Typography variant="h6" align={'center'}>
                👉 Type in Subject name (autocomplete) or select from options  (SAME as it is in  Question Papers full no short forms)
            </Typography>
            <Typography variant="h6" align={'center'}>
                👉If year on QP is 2023-2024 then it is in 2023(Filter)
            </Typography>
                  {/*<Typography variant="h6" align={'center'}>
                👉 Select Year as ALL  to check if available
            </Typography>*/}
            <Typography variant="h6" align={'center'}>
                👉 Download 📑
            </Typography>
                  
              </Box>
              

              
                  

              
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

                  
                  <Typography variant="h4" align={'center'} fontWeight={'bold'}>
                       For iPhone(ios),use safari for download
                  </Typography>
              </Box>


      {/* Filter UI */}
      <Box sx={{
        backgroundColor: 'white',
        padding: 3,
        borderRadius: '16px',
        boxShadow: 2,
        marginBottom: 4
      }}>
        <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>College</InputLabel>
          <Select
            value={collegeFilter}
            onChange={(e) => setCollegeFilter(e.target.value)}
            label="College"
            disabled
            sx={{
                mt: 2,
                border: '2px solid black', // Adds a black border
                borderRadius: '10px',
            }}>
            <MenuItem value="BBDU">BBDU</MenuItem>
          </Select>
        </FormControl>
          <FormControl variant="outlined" fullWidth >
              <Autocomplete
                  freeSolo
                  options={subjectCodes.map((code) => code)}
                  inputValue={subjectCodeFilter}
                  onInputChange={(e, newValue) => setSubjectCodeFilter(newValue.toUpperCase())}
                  renderInput={(params) => <TextField {...params} label="Subject Name" variant="outlined" sx={{
                      mt: 2,
                      border: '2px solid black', // Adds a black border
                      borderRadius: '10px', // Sets the border radius
                      '&:hover': {
                          border: '2px solid black', // Maintain border color on hover
                      },
                  }}/>}
              />
          </FormControl>

                  {/*<FormControl variant="outlined" fullWidth sx={{
            mt: 2,
            border: '2px solid black', // Adds a black border
            borderRadius: '10px', // Sets the border radius
            '&:hover': {
                border: '2px solid black', // Maintain border color on hover
            },
        }}>
          <InputLabel>Year</InputLabel>
          <Select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            label="Year"
          >
            <MenuItem value="">All</MenuItem>
            {years.map((year) => (
              <MenuItem key={year} value={year}>{year}</MenuItem>
            ))}
          </Select>
        </FormControl>*/}




      </Box>

      {/* Papers List */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {filteredPapers.length > 0 ? (
          filteredPapers.map((paper) => (
            <Box
              key={paper.id}
              sx={{
                borderRadius: '16px',
                boxShadow: 2,
                padding: 2,
                backgroundColor: 'background.default',
                textAlign: 'center',
                width: '100%',
                height: 300, // Adjust this value as needed
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
                boxSizing: 'border-box'
              }}
            >
              <Typography variant="h5" gutterBottom>
                Subject Name: {paper.subject_code}
              </Typography>
              <Typography variant="h6">
                Year: {paper.year}
              </Typography>
              <Typography variant="h6">
                Type: {paper.type}
              </Typography>
              <Typography variant="h6">
                College: {paper.college}
              </Typography>
              {/* Use the DownloadButton component */}
              <DownloadButton fileId={paper.id} />
            </Box>
          ))
        ) : (
          <Typography variant="body2">
            No papers available
          </Typography>
        )}
      </Box>

    </Container>
      </ThemeProvider>
  );
}

export default BBDU;
