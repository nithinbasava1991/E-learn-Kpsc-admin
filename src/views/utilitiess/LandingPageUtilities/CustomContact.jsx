import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";
import backgroundImage from "../../../assets/images/contactus/1019996_OJO4YQ0.jpg"; // Replace with your background image path

export default function ContactSection() {
  return (
    <Box
      sx={{
        padding: { xs: "1rem", md: "2rem" },
        backgroundColor: "#f9f9f9",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative", // Make sure the background image stays in place
        overflow: "hidden",
      }}
    >
      {/* Background blur overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional dark overlay
          filter: "blur(20px)", // Blur the background image
          zIndex: -1, // Keep the overlay behind the content
        }}
      ></Box>

      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1a202c", textAlign: "center",fontSize: { xs: '1.8rem', md: '2.4rem' } }}
      >
        Contact Us
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
      >
        <img
          src={image}
          alt="Description"
          style={{ width: "100%", maxWidth: "250px", height: "auto" }}
        />
      </Box>
      <Grid container spacing={3} justifyContent="center" style={{marginTop:"-70px"}}>
        {/* Address */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", padding: "1rem", boxShadow: 3 }}>
            <CardContent>
              <LocationOnIcon
                color="primary"
                sx={{ fontSize: "3rem", marginBottom: "0.5rem" }}
              />
              <Typography variant="h6">Address</Typography>
              <Typography variant="body1">
                A108 Adam Street, New York, NY 535022
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", padding: "1rem", boxShadow: 3 }}>
            <CardContent>
              <PhoneIcon
                color="primary"
                sx={{ fontSize: "3rem", marginBottom: "0.5rem" }}
              />
              <Typography variant="h6">Call Us</Typography>
              <Typography variant="body1">+1 5589 55488 55</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", padding: "1rem", boxShadow: 3 }}>
            <CardContent>
              <EmailIcon
                color="primary"
                sx={{ fontSize: "3rem", marginBottom: "0.5rem" }}
              />
              <Typography variant="h6">Email Us</Typography>
              <Typography variant="body1">info@example.com</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ padding: { xs: "1rem", md: "2rem" } }}>
        <Grid container spacing={3}>
          {/* Map Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
          >
            <Card
              sx={{
                height: "100%",
                boxShadow: 3,
                width: "100%",
                margin: "0 auto",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9990330912847!2d-74.00781748459624!3d40.710557379330795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316fe9d2d1%3A0xc2b5f104b60e159!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1692723453872!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </Card>
          </Grid>

          {/* Contact Form Section */}
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
          >
            <Card
              sx={{
                padding: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                boxShadow: 3,
                width: { xs: "90%", sm: "95%", md: "90%" },
                margin: "0 auto",
              }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{ textAlign: "center" }}
              >
                Send Us a Message
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    size="small"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#007BFF",
                        "&:hover": { backgroundColor: "#0056b3" },
                        width: { xs: "100%", sm: "75%", md: "50%" },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
