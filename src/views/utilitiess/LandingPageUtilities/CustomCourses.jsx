import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

import kpsc from "../../../assets/images/courses/kpsc.jpg";
import kea from "../../../assets/images/courses/kea.jpg";
import apti from "../../../assets/images/courses/apti.png";
import neet from "../../../assets/images/courses/neet exam.jpg";
import image from "../../../assets/images/CustomContent/Screenshot__133_-transformed-removebg-preview.png";
import backgroundImage from "../../../assets/images/courses/blue-abstract-layered-stripes-background.jpg"; // Add your background image here

const courses = [
  {
    date: "21 Dec, 2024",
    time: "06:00 AM",
    title:
      "21 December Current Affairs | Daily Current Affairs in Hindi | Current Affairs Today by Khushboo Mam",
    image: kpsc, // Replace with your image path
  },
  {
    date: "20 Dec, 2024",
    time: "06:00 AM",
    title:
      "20 December Current Affairs | Daily Current Affairs in Hindi | Current Affairs Today by Khushboo Mam",
    image: kea,
  },
  {
    date: "19 Dec, 2024",
    time: "06:00 AM",
    title:
      "19 December Current Affairs | Daily Current Affairs in Hindi | Current Affairs Today by Khushboo Mam",
    image: neet,
  },
  {
    date: "17 Dec, 2024",
    time: "06:00 AM",
    title:
      "17 December Current Affairs | Daily Current Affairs in Hindi | Current Affairs Today by Khushboo Mam",
    image: apti,
  },
];

const CustomCourses = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Ensures the background covers the entire area
        backgroundPosition: "center", // Centers the background image
        minHeight: "100vh", // Ensures the background covers the whole height of the page
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          variant="subtitle1"
          style={{
            color: "#757575",
          }}
        >
          POPULAR COURSES
        </Typography>
        <br />
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1a202c" }}
        >
          Pick A Course To Get Started
        </Typography>
        <img
          src={image} // Replace with your image path
          alt="Description"
          style={{ width: "250px", height: "auto" }} // Adjust styles as needed
        />
      </div>

      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt="Course Thumbnail"
                height="140"
                image={course.image}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.date} | {course.time}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.title}
                </Typography>
              </CardContent>
              <Box sx={{ margin: "10px" }}>
                <Button variant="contained" color="primary" fullWidth>
                  Watch Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CustomCourses;
