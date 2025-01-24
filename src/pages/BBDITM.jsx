import React, { useState, useEffect } from 'react';
import { Container, Typography, Box,Button, MenuItem, Select, InputLabel, FormControl, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { supabase } from '../backend/supabaseClient'; // Adjust path if needed
import DownloadButton from '../backend/DownloadButton'; // Adjust path if needed
import { subjectCodes } from '../constants/subjectCodes'; // Import subject codes


function BBDITM() {
  const [papers, setPapers] = useState([]);
  const [filteredPapers, setFilteredPapers] = useState([]);
  const [collegeFilter, setCollegeFilter] = useState('AKTU');
  const [yearFilter, setYearFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [subjectCodeFilter, setSubjectCodeFilter] = useState('');

  // Array of years from 2015 to 2024, with 2024 at the top
  const years = Array.from({ length: 7 }, (_, i) => (2024 - i).toString());

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
          BBDITM Previous Year Papers
        </Typography>
        <Typography variant="h6">
          Here are the previous year papers for BBDITM. You can view and download them below.
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
        <FormControl variant="outlined" fullWidth sx={{
            mt: 2,
            border: '2px solid black', // Adds a black border
            borderRadius: '10px', // Sets the border radius
            '&:hover': {
                border: '2px solid black', // Maintain border color on hover
            },
        }}>
          <InputLabel>College</InputLabel>
          <Select
            value={collegeFilter}
            onChange={(e) => setCollegeFilter(e.target.value)}
            label="College"
            disabled
          >
            <MenuItem value="AKTU">AKTU</MenuItem>
          </Select>
        </FormControl>





        <FormControl variant="outlined" fullWidth sx={{
            mt: 2,
            border: '2px solid black', // Adds a black border
            borderRadius: '10px', // Sets the border radius
            '&:hover': {
                border: '2px solid black', // Maintain border color on hover
            },
        }}>
          <Autocomplete
            freeSolo
            options={subjectCodes.map((code) => code)}
            inputValue={subjectCodeFilter}
            onInputChange={(e, newValue) => setSubjectCodeFilter(newValue.toUpperCase())}
            renderInput={(params) => <TextField {...params} label="Subject Name" variant="outlined" />}
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
  );
}

export default BBDITM;
