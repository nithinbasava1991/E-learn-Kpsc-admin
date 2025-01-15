import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";
import class1 from "../../../assets/images/programs/classI and class II.png";
import class3 from "../../../assets/images/programs/classIII.png";
import class2 from "../../../assets/images/programs/2nd PUC CLASS.png";
import backgroundImage from "../../../assets/images/programs/gray-abstract-wireframe-technology-background.jpg";

const CustomPrograms = () => {
  const navigate = useNavigate();
 

  const handleCardClick = (route) => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
    navigate(route); // Navigates to the specified route
  };

  return (
    <Box sx={{ py: 5, px: 2, textAlign: 'center', backgroundColor: '#f9fafb', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1a202c',fontSize: { xs: '1.8rem', md: '2.4rem' } }}>Our courses are tailor-made for working professionals.</Typography>
      <img src={image} alt="Description" style={{ width: '250px', height: 'auto', marginTop: "-20px" }} />
      <Grid container spacing={3} sx={{ justifyContent: 'center', marginTop: "-30px" }}>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ boxShadow: 3 }}
            onClick={() => handleCardClick('/class-one')}
            className="hover-card"
          >
            <CardContent sx={{ padding: 0 }}>
              <img src={class1} alt="Course 1" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>Class I & class II officers</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ boxShadow: 3 }}
            onClick={() => handleCardClick('/class-two')}
            className="hover-card"
          >
            <CardContent sx={{ padding: 0 }}>
              <img src={class3} alt="Course 2" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>Class III Officers</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{ boxShadow: 3 }}
            onClick={() => handleCardClick('/class-second')}
            className="hover-card"
          >
            <CardContent sx={{ padding: 0 }}>
              <img src={class2} alt="Course 3" style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '8px 8px 0 0' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>Posts for II PUC Pass Candidates</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add this style to change cursor */}
      <style jsx>{`
        .hover-card:hover {
          cursor: zoom-in; /* This will change the cursor to a zoom-in thumbnail effect */
        }
      `}</style>
    </Box>
  );
};

export default CustomPrograms;
