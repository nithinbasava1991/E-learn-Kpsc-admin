import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

// Import images for team members and background
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";
import keshva from "../../../assets/images/teams/keshavamurthy-removebg-preview.png";
import guru from "../../../assets/images/teams/Gurudath_R_-removebg-preview.png";
import ramesh from "../../../assets/images/teams/rameshpatil-removebg-preview.png";
import vishwa from "../../../assets/images/teams/vishwanath-removebg-preview-2.png";
import anand from "../../../assets/images/teams/anan_gk-removebg-preview.png";
import raga from "../../../assets/images/teams/ragavendra-removebg-preview.png";
import katti from "../../../assets/images/teams/kattimani_khan-removebg-preview.png";
import Ningappa from "../../../assets/images/teams/ningappa-removebg-preview.png";
import backgroundImage from "../../../assets/images/teams/blue-abstract-gradient-wave-wallpaper.jpg"; // Import background image here

const CustomTeams = () => {
  const courses = [
    { title: "Mr. Keshavamurthy", image: keshva,description: "GK,Indian Polity,History & Geography ,Essays"},
    { title: "Mr. Kattimani Khan", image: katti ,description: "English Language"},
    { title: "Mr. Vishwanath Biradar", image: vishwa,description: "Science,Physics & Chemistry"},
    { title: "Mr. Ningappa", image: Ningappa,description: "Mental Ability"},
    { title: "Mr. Anand GK", image: anand,description: "GK & Current Affairs"},
    { title: "Mr. Raghavendra Garani", image: raga ,description: "Economics"},
    { title: "Mr. Gurudath", image: guru ,description: "Tech Support, QA & Marketing" },
    { title: "Mr. Ramesh Patil", image: ramesh,description: "Tech Support & Marketing" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1a202c",fontSize: { xs: '1.8rem', md: '2.4rem' } }}
        >
          Team of Malnad Academy
        </Typography>
        <img
          src={image}
          alt="Description"
          style={{ width: "250px", height: "auto" }}
        />
      </div>
      <Grid container spacing={3} justifyContent="center" style={{marginTop:"-40px"}}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                height="300" // Adjust the height as needed
                image={course.image}
                alt={course.title}
                sx={{
                  objectFit: "cover", // Ensures the image covers the space
                  objectPosition: "center top", // Moves the image's focus to the top center
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomTeams;
