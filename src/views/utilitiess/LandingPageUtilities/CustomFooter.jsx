import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import SocialBar from "./SocialBar";
// Importing the image
import footerBackgroundImage from '../../../assets/images/footer/35481295_v915-wit-002-g.jpg'; // Replace with your actual image path

const CustomFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        color: "#333", 
        position: "relative", // Required for fixed SocialBar
        backgroundImage: `url(${footerBackgroundImage})`, // Use imported image here
        backgroundSize: "cover", // This makes sure the image covers the entire area
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Ensures the image doesn't repeat
      }}
    >
      {/* Card to enclose all the footer content without padding and margin */}
      <Card sx={{ boxShadow: 3, backgroundColor: "rgba(248, 249, 250, 0.3)" }}> {/* Semi-transparent background */}
        <CardContent sx={{ padding: 0 }}>
          <Grid container spacing={4} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
            {/* Brand Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
               E-Learning KPSC
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "20px" }}>
                We are dedicated to helping you prepare for your upcoming government
                competitive exams in India.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                <strong>Address:</strong> At/p Koujalagi, Gokak Taluk, Belagavi Dist.
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "5px" }}>
                <strong>Call:</strong> +91 86602 41366
              </Typography>
              <Typography variant="body2">
                <strong>Email:</strong> ningappaacademy@gmail.com
              </Typography>
            </Grid>

            {/* Links Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Online Platform
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
                <Link href="/about" color="inherit" underline="hover">
                  About Us
                </Link>
                <Link href="/course" color="inherit" underline="hover">
                  Courses
                </Link>
                <Link href="/testseries" color="inherit" underline="hover">
                  Test Series
                </Link>
                <Link href="/buybook" color="inherit" underline="hover">
                  Buy Book
                </Link>
                <Link href="/contact" color="inherit" underline="hover">
                  Contact Us
                </Link>
              </Box>
            </Grid>

            {/* Contact/Subscribe Section */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Contacts
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                Enter your email address to register for our newsletter subscription
              </Typography>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "10px", marginBottom: "20px" }}>
                <TextField
                  variant="outlined"
                  placeholder="Your email"
                  size="small"
                  fullWidth
                  sx={{
                    backgroundColor: "#fff",
                    maxWidth: "250px",
                    marginBottom: { xs: "10px", sm: "0" },
                  }}
                />
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ padding: "0 20px", width: { xs: "80%", sm: "auto" } }}
                >
                  Subscribe
                </Button>
              </Box>
              {/* <Box sx={{ display: "flex", gap: "10px" }}>
                <IconButton
                  href="#"
                  sx={{ color: "#4267B2", backgroundColor: "#e9f4ff" }}
                >
                  <IconBrandFacebook />
                </IconButton>
                <IconButton
                  href="#"
                  sx={{ color: "#0077B5", backgroundColor: "#e9f4ff" }}
                >
                  <IconBrandLinkedin />
                </IconButton>
                <IconButton
                  href="#"
                  sx={{ color: "#E4405F", backgroundColor: "#ffe9f4" }}
                >
                  <IconBrandInstagram />
                </IconButton>
                <IconButton
                  href="#"
                  sx={{ color: "#1DA1F2", backgroundColor: "#e9f4ff" }}
                >
                  <IconBrandTwitter />
                </IconButton>
                <IconButton
                  href="#"
                  sx={{ color: "#FF0000", backgroundColor: "#ffe9e9" }}
                >
                  <IconBrandYoutube />
                </IconButton>
              </Box> */}
            </Grid>
          </Grid>
        </CardContent>

        {/* Bottom Section */}
        <Box
          sx={{
            textAlign: "center",
            marginTop: "30px",
            borderTop: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} | Developed By WalkinSoftware Bharat
            Pvt. Ltd. All Rights Reserved
          </Typography>
        </Box>
      </Card>
      <SocialBar />
    </Box>
  );
};

export default CustomFooter;
