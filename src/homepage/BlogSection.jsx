import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const blogs = [
  {
    id: 1,
    title: 'How to Prepare for Semester Exams',
        image: 'https://static.vecteezy.com/system/resources/previews/002/173/392/non_2x/student-studying-at-home-free-vector.jpg', // Replace with the actual path to the image
    content: 'Discover the best strategies for excelling in your semester exams.',
        link: 'https://bbdcollegepapers.blogspot.com/2025/01/top-productivity-tips-for-students-and.html',
  },
  {
    id: 2,
      title: 'Top Productivity Tips for Students',
      image: 'https://www.proofhub.com/articles/wp-content/uploads/2023/11/Productivity-Tools-That-Will-Make-Your-Life-Much-Easier.jpg',
    content: 'Learn how to enhance your skills with productivity tips',
      link: 'https://bbdcollegepapers.blogspot.com/2025/01/top-productivity-tips-for-students-and.html',
  },
  {
    id: 3,
    title: 'Choosing The Right Programming Language',
      image: 'https://www.hokuapps.com/wp-content/uploads/Top-programming-languages-that-are-crucial-for-mobile-app-development.png',
    content: 'Understand and choose the right programming language/tools',
      link: 'https://bbdcollegepapers.blogspot.com/2025/01/choosing-right-programming-language.html',
  },
];

const BlogSection = () => {
  return (
    <Box
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 4,
              backgroundColor: 'white',
              borderRadius: '16px', // Added rounded corners for the outermost box
              boxShadow: 3, // Optional: Adding shadow for a subtle 3D effect
              marginBottom: '25px', // Added bottom margin for spacing
          }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" mb={4}>
        Blog
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {blogs.map((blog) => (
          <Card key={blog.id} sx={{ maxWidth: 345, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="200"
              image={blog.image}
              alt={blog.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.content}
              </Typography>
            </CardContent>
            <Button
              size="large"
              color="primary"
              sx={{ margin: 2 }}
              onClick={() => window.open(blog.link, '_self')}
            >
              Read More
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BlogSection;
