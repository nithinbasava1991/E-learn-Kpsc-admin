import React from 'react';
import { Grid, Card, Typography, Box } from '@mui/material';
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png"

const items = [
  { title: 'UPSC', color: '#f0fdfa', icon: '/path/to/upsc-icon.svg' },
  { title: 'STATE PSC', color: '#fff5f5', icon: '/path/to/state-psc-icon.svg' },
  { title: 'DEFENCE', color: '#f0fdf4', icon: '/path/to/defence-icon.svg' },
  { title: 'SSC', color: '#fffbea', icon: '/path/to/ssc-icon.svg' },
  { title: 'GK/GS', color: '#f5f3ff', icon: '/path/to/gk-icon.svg' },
  { title: 'SCIENCE', color: '#fff0f5', icon: '/path/to/science-icon.svg' },
  { title: 'MAP', color: '#f0f4ff', icon: '/path/to/map-icon.svg' },
  { title: 'POLICE', color: '#fffaf0', icon: '/path/to/police-icon.svg' },
  { title: 'RECORDED COURSES', color: '#f0fbff', icon: '/path/to/recorded-courses-icon.svg' },
];

const CustomContent = () => {
  return (
    <Box sx={{ py: 5, px: 2, textAlign: 'center', backgroundColor: '#f9fafb' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#1a202c' }}
      >
        Our Content Helps You To Prepare
      </Typography>
      <img
        src={image} // Replace with your image path
        alt="Description"
        style={{ width: '250px', height: 'auto' }} // Adjust styles as needed
      />
      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ padding: 2 }}>
            <Card
              sx={{
                backgroundColor: item.color,
                padding: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                style={{ width: 40, height: 40, marginBottom: 16 }}
              />
              <Typography
                variant="h6"
                mt={1}
                sx={{ fontWeight: '500', color: '#2d3748' }}
              >
                {item.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomContent;
