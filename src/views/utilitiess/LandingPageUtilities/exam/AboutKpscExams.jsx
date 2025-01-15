import React from 'react';
import { Grid, Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import kpscimage from "../../../../assets/images/kpsc/kpsc-removebg-preview.png";
import backgroundImage from "../../../../assets/images/kpsc/abstract-luxury-gradient.jpg";
import image from "../../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";

const AboutKpscExams = () => {
  return (
    <Box
      sx={{
        py: 5,
        px: 2,
        textAlign: 'center',
        backgroundColor: '#f9fafb',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#1a202c',fontSize: { xs: '1.8rem', md: '2.4rem' } }}
      >
        About KPSC Exams
      </Typography>
      <img src={image} alt="Description" style={{ width: '250px', height: 'auto',marginTop:"-20px" }} />
      {/* Card with Image and Content */}
      <Card 
        sx={{ 
          maxWidth: { xs: '100%', md: 1200 }, // Adjusted width for desktop view
          mx: 'auto', 
       marginTop:"-30px"
        }}
      >
        <Grid container alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              image={kpscimage}
              alt="KPSC Exam"
              sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={8}>
            <CardContent
              sx={{ 
                textAlign: { xs: 'left', md: 'justify' }, // Justify text on larger screens
              }}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ textAlign: { xs: 'center', md: 'left' } }} // Center title on smaller screens
              >
                Course Details
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                A comprehensive online platform for all the competitive exams conducted by the government of Karnataka.
              </Typography>
              
              {/* Dotted List */}
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                  <li>KAS - Prelims, Mains, Interview Preparation</li>
                  <li>PSI, ESI, Wireless, KSISF, RFO</li>
                  <li>FDA, PDO, RDPR</li>
                  <li>SDA, VAO, DRFO, PC (for II PUC paper)</li>
                </ul>
              </Typography>

              {/* Additional Sections */}
              <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                Qualifying Papers
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                The qualifying papers include subject-specific papers required to clear the exam.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                Compulsory
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                This section includes the mandatory components of the exam that every candidate must complete.
              </Typography>
              
              <Typography variant="h6" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                Interview Preparation
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                Interview preparation includes tips, guidelines, and resources to excel in the final interview stage of the KPSC exam.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AboutKpscExams;
