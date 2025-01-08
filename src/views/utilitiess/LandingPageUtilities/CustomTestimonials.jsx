import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bash from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";
import backgroundImage from "../../../assets/images/testimonials/hand-painted-watercolor-background-with-sky-clouds-shape.jpg"; // Import the background image

// Default video URL (use a placeholder or sample video URL)
const DEFAULT_VIDEO_URL = 'https://www.w3schools.com/html/mov_bbb.mp4';

const CustomTestimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1200, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const videos = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4'
  ];

  // Add your image URL here
  const image = 'https://via.placeholder.com/250';

  return (
    <Box 
      sx={{ 
        border: '2px solid #ccc', 
        borderRadius: '8px',  
        py: { xs: 3, sm: 5 }, // Adjust padding for different screen sizes
        px: { xs: 2, sm: 3 },  // Adjust padding for different screen sizes
        textAlign: 'center', 
        backgroundColor: '#f9fafb', 
        boxShadow: 2,
        backgroundImage: `url(${backgroundImage})`, // Apply the background image here
        backgroundSize: 'cover', // Ensure the image covers the entire background
        backgroundPosition: 'center', // Center the background image
        backgroundAttachment: 'fixed' // Keep the background fixed while scrolling
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ 
          fontWeight: 'bold', 
          color: '#1a202c', 
          marginTop: '20px', 
          fontSize: { xs: '1.5rem', sm: '2rem' } // Adjust font size for mobile and larger screens
        }}
      >
        Testimonials from Malnad Academy Students
      </Typography>

      <img 
        src={bash} 
        alt="Description" 
        style={{ 
          width: '100%', 
          maxWidth: '250px', // Limit the width of the image on larger screens
          height: 'auto', 
          marginBottom: '20px'
        }} 
      />
      <div style={{marginTop:"-40px"}}>
      <Carousel responsive={responsive} >
        {videos.map((video, index) => (
          <div key={index} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <Card sx={{ 
              maxWidth: 300, 
              padding: 0, 
              margin: { xs: '10px auto', sm: '20px auto' }, // Adjust margins for mobile devices
              boxShadow: 2
            }}>
              <video
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  objectFit: 'cover' 
                }}
                controls
                poster={video || DEFAULT_VIDEO_URL}
              >
                <source src={video || DEFAULT_VIDEO_URL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <CardContent>
                <Typography variant="h6" align="center">
                  {index === 0 ? 'SUNIL K SHIVANAGI' : ''}
                  {index === 1 ? 'PRAJWAL S BANDI' : ''}
                  {index === 2 ? 'JYOTI MANANKALAGI' : ''}
                  {index === 3 ? 'RAKESH ARAVIND' : ''}
                  {index === 4 ? 'ADITYA TALAWAR' : ''}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
        </div>
      
    </Box>
  );
};

export default CustomTestimonials;
