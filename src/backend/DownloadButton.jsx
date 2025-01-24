import React, { useState, useEffect } from 'react';
import { Button, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { supabase } from './supabaseClient'; // Ensure the path is correct

const DownloadButton = ({ fileId }) => {
    const [filePath, setFilePath] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFirstClick, setIsFirstClick] = useState(true); // Track first click

    useEffect(() => {
        if (!fileId) {
            setError('Invalid file ID.');
            return;
        }

        const fetchFilePath = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from('papers')
                .select('file_path')
                .eq('id', fileId)
                .single();

            setLoading(false);

            if (error) {
                console.error('Error fetching file path:', error.message);
                setError('Failed to fetch file path.');
                return;
            }

            setFilePath(data.file_path);
        };

        fetchFilePath();
    }, [fileId]);

    const handleDownload = () => {
        if (!filePath) {
            alert('File path not available.');
            return;
        }

        // First, fetch and initiate the file download
        const baseUrl = 'https://tufsfubcdnwwafefhqko.supabase.co/storage/v1/object/public/';
        const bucketName = 'paper demo'; // Ensure this matches your bucket name exactly
        const encodedFilePath = encodeURIComponent(filePath);
        const pdfUrl = `${baseUrl}${bucketName}/${encodedFilePath}`;

        console.log('Download URL:', pdfUrl); // Log the URL to check if it's correctly formatted

        // If it's the first click, also open a random site
        if (isFirstClick) {
            // Open random site in a new background tab
            const randomSite = [
                'https://bbdcollegepapers.blogspot.com/2025/01/choosing-right-programming-language.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/top-productivity-tips-for-students-and.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/lucknow-city.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/confidence-is-key-unlocking-your-full.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/internships-for-students-key-to.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/wellbeing-1.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/the-tech-trends-that-are-changing-game.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/the-fun-and-fizz-of-dating-guide-to.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/real-life-college-vs-fictional-college.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/exam-pressure-on-mind-understanding-and.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/sleep-and-mental-state-understanding.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/health-and-fitness-as-student-balancing.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/financial-and-business-knowledge-for.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/programming-skills-and-projects.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/social-media-detox-reclaiming-your-time.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/instagram-reel-addiction-understanding.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/understanding-game-addiction-and-its.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/essential-skills-every-college-student.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/career-business-1.html',
                'https://bbdcollegepapers.blogspot.com/2025/01/tips-and-tricks-for-acing-bbd-college.html'
            ][Math.floor(Math.random() * 20)];
            window.open(randomSite, '_blank'); // Open the random site in a new background tab

            // After opening the site, set isFirstClick to false so subsequent clicks don't trigger redirection
            setIsFirstClick(false);
        }

        // Start the file download in the current window
        window.location.href = pdfUrl;
    };

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : (
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    onClick={handleDownload}
                    disabled={!filePath}
                    sx={{
                        backgroundColor: 'rgba(11,51,225,0.94)', // Blue color
                        border: '2px solid black', // White border
                        borderRadius: '15px', // Sets the border radius
                        '&:hover': {
                            backgroundColor: 'rgba(11,51,225,0.94)', // Darker blue on hover
                            border: '6px solid red', // White border
                            borderRadius: '15px', // Sets the border radius
                        },
                    }}
                >
                    Download PDF
                </Button>
            )}
        </div>
    );
};

export default DownloadButton;
