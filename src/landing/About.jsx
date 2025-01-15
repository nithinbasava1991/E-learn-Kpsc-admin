        
        
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import image from '../assets/images/u4.jpg';

const AboutUs = () => {
  return (
    <>
    <Typography
    variant='h3'
        sx={{
          textTransform: "uppercase",
          color: "black",
          textAlign: {md:"start",xs:'center'},
            pl:{md:' 50px',xs:'0px'},
          fontWeight:400
        }}
      >
       About Us
      </Typography>
    <Box sx={{ padding: {xs:3,md:4} }}>
      <Grid container spacing={2} alignItems="center">
        {/* Left Side: Image */}
        <Grid item xs={12} md={4}>
          <img
            src={image}// Replace with your image URL
            alt="About Us"
            style={{
              width: '100%', 
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Grid>
        
        {/* Right Side: Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:'justify',mt:2}}>
            Welcome to our platform! We are dedicated to providing top-notch services and resources for our users. Our mission is to enhance your learning experience by offering a wide range of tools and materials to help you succeed.
          </Typography>
          <Typography variant="body1" paragraph sx={{textAlign:'justify'}}>
            Our team consists of experienced professionals who are passionate about education and technology. We strive to create an engaging and supportive environment where you can achieve your goals.
          </Typography>
          <Typography variant="body1" sx={{textAlign:'justify'}}>
            Thank you for choosing us as your learning partner. We look forward to supporting you on your educational journey!
          </Typography>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default AboutUs;
