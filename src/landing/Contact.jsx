import React from 'react';
import { Box, Grid, Typography, Link, Card } from '@mui/material';

const Contact = () => {
  return (
    <>
      <Box sx={{ padding: { md: 4, xs: 2 }, background: '#e3dede' }}>
        <Card sx={{ borderRadius: '10px', padding: 2, boxShadow: 3 }}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={2} display="flex" justifyContent="center">
              <img
                src="https://static.wixstatic.com/media/c7e800_3b967667fe4e4e76830b0b76a2b962a2~mv2.png/v1/fill/w_129,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/KeshavMurthy-Pic-modified.png"
                alt="Keshava Murthy"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '2px solid #ddd', 
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' 
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#333' }}>
                Contact
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, color: '#555', mt: 3 }}>
                Mr. Keshava Murthy
              </Typography>
              <Typography sx={{ color: '#444', mb: 2 }}>
                <strong>Phone: </strong>94811 00670 | 98450 68233 | 98865 79123
              </Typography>
              <Typography sx={{ color: '#444', textAlign: 'justify' }}>
                <strong>Address:</strong> No. 50, MALNAD, M H R Layout, Near Sapthagiri Engineering College, Hesaragatta Main Road,
                Kirloskar Layout, Bangalore - 560090
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d124395.8592099746!2d77.47315298976827!3d13.012055797673776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2050%2C%20MALNAD%2C%20M%20H%20R%20Layout%2C%20Near%20Sapthagiri%20Engineering%20College%2C%20Hesaragatta%20Main%20Road%2C%20Kirloskar%20Layout%2C%20Bangalore%20-%20560090!5e0!3m2!1sen!2sin!4v1729162424666!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '5px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>
        </Card>

        {/* Association  */}
        <Card sx={{ borderRadius: '10px', padding: 2, boxShadow: 3, mt: 4 }}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12} sm={2} display="flex" justifyContent="center">
              <img
                src="https://static.wixstatic.com/media/c7e800_3b967667fe4e4e76830b0b76a2b962a2~mv2.png/v1/fill/w_129,h_129,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/KeshavMurthy-Pic-modified.png"
                alt="Keshava Murthy"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '2px solid #ddd',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' 
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                In Association with Brain Labs Education Pvt Ltd.
              </Typography>
              <Typography variant="h4" sx={{ mb: 2, color: '#555', mt: 3 }}>
                Mr. Keshava Murthy
              </Typography>
              <Typography sx={{ color: '#444', mb: 2 }}>
                <strong>Phone: </strong>94811 00670 | 98450 68233 | 98865 79123
              </Typography>
              <Typography sx={{ color: '#444', textAlign: 'justify' }}>
                <strong>Address:</strong> No. 50, MALNAD, M H R Layout, Near Sapthagiri Engineering College, Hesaragatta Main Road,
                Kirloskar Layout, Bangalore - 560090
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} display="flex" justifyContent="center">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.972382708279!2d77.54525611488335!3d13.012068688774207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16691828b22d%3A0x7cc541dd3c6e1e1f!2sKeshava%20Murthy%20School!5e0!3m2!1sen!2sin!4v1630343525691!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '5px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default Contact;
