import React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  Grid,
  CardMedia,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Subscribe = () => {
  // Define the bullet point items in an array
  const bulletPoints = [
    "1 . Subject-wise Videos",
    "2 . Soft Copies of Study Materials",
    "3 . Previous Exam's Question Papers",
    "4 . Weekly Mock Tests",
    "5 . Mock Interviews",
    "6 . Soft Skills required to face the interview",
  ];

  return (
    <Box
      sx={{
        p: { xs: "2rem" },
        position: "relative",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12}>
          <CardMedia
            component="img"
            sx={{
              height: { xs: "150px", sm: "200px" },
              width: { xs: "auto", sm: "300px" },
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              position: "absolute",
              top: { xs: 30, sm: 30 },
              left: { xs: 20, sm: 50 },
              zIndex: 1000,
            }}
            image="https://static.wixstatic.com/media/11062b_d3d868fbc805475dbe8cdc1b9100ef3e~mv2.jpg/v1/crop/x_6,y_0,w_6261,h_4181/fill/w_344,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Business%20Person.jpg"
            title="Subscribe"
          />
        </Grid>

        <Grid item xs={12} md={10}>
          <Card
            sx={{
              background: "#f1f1f1",
              borderRadius: "2rem",
              p: { xs: 4, sm: "200px 20px", md: 8 },
              mb: 2,
              position: "relative",
              mt: { xs: 10, sm: 0, md: 10 },
            }}
          >
            <Box sx={{ textAlign: "center", mt: { xs: 4, sm: 0 } }}>
              <Typography
                variant="h4"
                component="div"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Subscribe
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Subscribe to a course as per your job aspiration. Every course
                differs in its level of difficulty and comes with different
                course material.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                We will provide everything required to clear the exams in flying
                colors:
              </Typography>

              {/* Centered Bullet Points using map */}
              <List sx={{ display: "inline-block", textAlign: "left", mb: 2 }}>
                {bulletPoints.map((point, index) => (
                  <ListItem key={index} sx={{ display: "list-item" }}>
                    <ListItemText primary={point} />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ textAlign: "center", mt: 2, mb: -4 }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#2A7E45",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  Subscribe Now
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Subscribe;
