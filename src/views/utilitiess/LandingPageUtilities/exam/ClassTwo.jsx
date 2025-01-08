import React from 'react'
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import image from "../../../../assets/images/classthree/images.jpg";
import ResponsiveHeader from '../ResponsiveHeader';
import ResponsiveAppBar from '../ResponsiveAppBar';
import CustomFooter from '../CustomFooter';

const ClassTwo = () => {
  return (
    <>
     <ResponsiveHeader/>
      <ResponsiveAppBar/>
      
      <Card sx={{ m: 2, p: 2, boxShadow: 3,marginTop:"180px" }}>
        <Grid
          container
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
        >
          {/* Image on top for mobile, left for desktop */}
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="Image"
              image={image}
              sx={{
                width: "100%", // Increase the width slightly on mobile
                height: { xs: 300, sm: 350 }, // Keep the height responsive
                objectFit: "cover", // Cover the container without distortion
              }}
            />
          </Grid>

          {/* Text on bottom for mobile, right for desktop */}
          <Grid item xs={12} sm={6}>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Government Posts - Class III (Grade C)
              </Typography>
              <ul>
                <li>First Division Assistant - FDA</li>
                <li>Panchayat Development Officer - PDO</li>
                <li>Cooperative Inspector</li>
                <li>PSI (CIVIL, CAR, DAR, KSRP, WIRELESS, KSISF)</li>
                <li>Excise Sub Inspector (ESI)</li>
                <li>Range Forest Officer (RFO)</li>
              </ul>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                ... many more
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

    
      <CustomFooter/>
    </>
  )
}

export default ClassTwo