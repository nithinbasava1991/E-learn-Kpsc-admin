import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import bash from "../../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";
import backgroundImage from "../../../../assets/images/introduction/watercolor-texture-with-yellow-background-vector.jpg"

// Default video URL (use a placeholder or sample video URL)
const DEFAULT_VIDEO_URL = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Example placeholder YouTube video URL

const IntroductionViedos = () => {
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

  // Update the videos array with YouTube links
  const videos = [
    'https://www.youtube.com/embed/JQz0WB2jvoE',  // Replace with actual YouTube video IDs
    'https://www.youtube.com/embed/murYzmQ5M14',
    'https://www.youtube.com/embed/kmV3cHAM_B0',
    'https://www.youtube.com/embed/5-tSh9w0Pqw',
    'https://www.youtube.com/embed/DQLRMmuKZdo'
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
        Introduction-Foundation video
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
      
      <Carousel responsive={responsive}>
        {videos.map((video, index) => (
          <div key={index} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
            <Card sx={{ 
              maxWidth: 300, 
              padding: 0, 
              margin: { xs: '10px auto', sm: '20px auto' }, // Adjust margins for mobile devices
              boxShadow: 2
            }}>
              <div style={{ width: '100%', paddingTop: '56.25%', position: 'relative' }}> {/* Aspect ratio (16:9) */}
                <iframe
                  title={`Video ${index + 1}`}
                  src={video}  // Embed the video using iframe
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',  // Optional: add rounded corners
                  }}
                />
              </div>
              <CardContent>
                <Typography variant="h6" align="center">
                  {index === 0 ? 'EXAM PREPARATION' : ''}
                  {index === 1 ? 'IMPORTANT GK' : ''}
                  {index === 2 ? 'STRATEGY FOR PSI' : ''}
                  {index === 3 ? 'English Communication' : ''}
                  {index === 4 ? 'ಪುರಾತನ ಇತಿಹಾಸ' : ''}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default IntroductionViedos;
