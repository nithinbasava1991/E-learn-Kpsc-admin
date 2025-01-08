import React from 'react';
import { Typography } from '@mui/material';

const CustomMarquee = () => {
  return (
    <div
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        width: '100%',
        marginTop:"-20px"
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'marquee 20s linear infinite', // Adjusted duration for smooth sliding
        }}
      >
        {/* Combined Container for Both Sentences */}
        <div style={{ display: 'flex' }}>
          {/* First Sentence */}
          <div
            style={{
              display: 'inline-block',
              paddingRight: '50px', // Space between sentences
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                backgroundColor: '#ffdccc', // Background color added here
                padding: '0 10px', // Padding to add space inside the sentence box
                '@media (max-width: 600px)': {
                  animation: 'marquee-item 25s linear infinite',
                },
                '@media (max-width: 400px)': {
                  fontSize: '1rem',
                },
              }}
            >
              20+ Years of Coaching Experience.
            </Typography>
          </div>

          {/* Second Sentence */}
          <div
            style={{
              display: 'inline-block',
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                backgroundColor: '#ffdccc', // Background color added here
                padding: '0 10px', // Padding to add space inside the sentence box
                '@media (max-width: 600px)': {
                  animation: 'marquee-item 25s linear infinite',
                },
                '@media (max-width: 400px)': {
                  fontSize: '1rem',
                },
              }}
            >
              1000s of our students are working in the government of Karnataka.
            </Typography>
          </div>
        </div>
      </div>

      {/* Keyframes to animate the sentences */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default CustomMarquee;
