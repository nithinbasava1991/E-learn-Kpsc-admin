import React from 'react';
import { Grid, Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import kpscimage from "../../../assets/images/kpsc/kpsc-removebg-preview.png";
import backgroundImage from "../../../assets/images/kpsc/abstract-luxury-gradient.jpg";
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";

const AboutKpsc = () => {
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
         About KPSC & Other Competitive Exams
      </Typography>
      <img src={image} alt="Description" style={{ width: '250px', height: 'auto',marginTop: '-10px',  }} />
      {/* Card with Image and Content */}
      <Card 
        sx={{ 
          maxWidth: { xs: '100%', md: 1200 }, // Adjusted width for desktop view
          mx: 'auto', 
          marginTop: '-20px', 
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
                The Karnataka Public Service Commission (KPSC) exam is a competitive examination conducted by the Government of Karnataka to recruit candidates for various administrative positions within the state. 
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                The exam is structured into three main stages: the Preliminary exam, the Main exam, and the Interview. The Preliminary exam consists of objective-type questions that assess the candidates' general knowledge and aptitude. 
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                Successful candidates then advance to the Main exam, which includes descriptive papers covering a wide range of subjects such as General Studies, Optional Subjects, and Essay Writing. 
              </Typography>
              <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
                The final stage, the Interview, evaluates the candidates' personality, communication skills, and overall suitability for public service roles. The KPSC exam is highly competitive and requires thorough preparation, dedication, and a deep understanding of the syllabus to succeed.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AboutKpsc;
