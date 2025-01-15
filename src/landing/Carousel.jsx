import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

const AdvertisementCarousel = () => {
  const advertisements = [
    "https://static.wixstatic.com/media/11062b_4bbeb076691b4370bc020616b5613edd~mv2.jpg/v1/fill/w_954,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_4bbeb076691b4370bc020616b5613edd~mv2.jpg",
    "https://static.wixstatic.com/media/11062b_4bbeb076691b4370bc020616b5613edd~mv2.jpg/v1/fill/w_954,h_400,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_4bbeb076691b4370bc020616b5613edd~mv2.jpg",
  ];

  return (
    <Grid container justifyContent="center" spacing={4}>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontSize: { sm: "30px", xs: "18px" },
            padding: "20px 0px",
            textTransform: "uppercase",
            color: "black",
            textAlign: "center",
          }}
        >
          Program Exclusively Designed for <br /> Working Professionals
        </Typography>

        {/* Responsive sizes for different screens */}
        <Card variant="outlined" sx={{ border: "none" }}>
          <CardContent>
            <Box
              sx={{
                margin: "0 auto", 
                maxWidth: "100%",
                padding: { xs: "0px", sm: "0 10px" }, 
              }}
            >
              <Carousel
                autoPlay
                interval={5000}
                infiniteLoop
                showStatus={false}
                showThumbs={false}
                swipeable={true}
                emulateTouch={true}
                dynamicHeight={true}
                useKeyboardArrows={true}
              >
                {advertisements.map((image, index) => (
                  <div key={index}>
                    <Box
                      component="img"
                      src={image}
                      alt={`Advertisement ${index + 1}`}
                      sx={{
                        width: "100%",
                        height: { xs: "auto", md: "350px" },
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AdvertisementCarousel;
