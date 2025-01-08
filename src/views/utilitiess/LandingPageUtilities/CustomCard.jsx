import React from 'react';
import { Grid, Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import kpscimage from "../../../assets/images/Customcard/Malnad Logo-modified.png";
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";

const CustomCard = () => {
  return (
    <Box
      sx={{
        py: { xs: 3, md: 5 }, // Adjust padding for mobile and desktop
        px: { xs: 2, md: 4 },
        textAlign: 'center',
        backgroundColor: '#f9fafb',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#1a202c', fontSize: { xs: '1.8rem', md: '2.4rem' } }}
      >
        About Malnad Academy
      </Typography>
      <img
        src={image}
        alt="Description"
        style={{
          width: '100%',
          maxWidth: '250px', // Ensures the image scales for smaller screens
          height: 'auto',
          marginTop:"-10px"
        }}
      />
      <Card
        sx={{
          maxWidth: { xs: '100%', md: 1200 },
          mx: 'auto',
          mt: { xs: 2, md: 0 },
          boxShadow: { xs: 2, md: 4 }, // Subtle shadow for smaller screens
         
        }}
      >
        <Grid container alignItems="center">
          {/* Image Section */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: { xs: 2, md: 0 },
            }}
          >
            <CardMedia
              component="img"
              image={kpscimage}
              alt="KPSC Exam"
              sx={{
                width: { xs: '70%', sm: '85%' },
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={8}>
            <CardContent
              sx={{
                textAlign: 'justify',
                px: { xs: 2, md: 4 },
                py: { xs: 2, md: 3 },
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                Located @ Hesaraghatta Road, Bengaluru, Karnataka., is a prestigious training
                center dedicated to preparing individuals for competitive exams conducted by the
                Karnataka Public Service Commission (KPSC). With over 20 years of experience, the
                academy has established a stellar reputation for its comprehensive training
                programs, expert faculty, and exceptional success rates.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                The academy provides a rigorous curriculum that covers all aspects of the KPSC
                exams, including the prelims, mains, and interview processes. Our detailed syllabus
                encompasses a wide range of subjects, ensuring that students are well-prepared for
                every stage of the examination.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                Thousands of students trained at Malnad Academy have successfully passed the KPSC
                exams and are now serving as esteemed officers in various capacities within the
                state government. The academy's commitment to excellence and student success,
                coupled with a structured approach to exam preparation, has made it a trusted name
                in competitive exam preparation.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default CustomCard;
