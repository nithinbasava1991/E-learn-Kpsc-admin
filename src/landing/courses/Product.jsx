import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ProductPerformance = () => {
  const governmentPosts = [
    "Assistant Commissioner - Revenue",
    "Assistant Commissioner - Commercial Tax",
    "Assistant Controller - State Accounts",
    "DYSP / ACP - KSPS",
    "DYSP - Excise",
    "District Social Welfare Officers",
    "District Treasury Officers",
    "Tahsildar",
    "Commercial Tax Officer (CTO)",
    "Taluk Social Welfare Officers",
    "Sports & Youth Affairs Officer",
  ];
  return (
    <Card
      variant="outlined"
      sx={{
        m: { xs: 1, md: 4 },
        borderRadius: 2, // Optional: Adds rounded corners to the card
        overflow: "hidden", // Ensures no overflow from the card
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ textAlign: "center", fontWeight: "bold" }}
            >
              Government Posts - Class I & II (Grade A & B)
            </Typography>
            <List sx={{ listStyleType: "disc", pl: { md: 10, xs: 2 }, mt: 2 }}>
              {governmentPosts.map((post, index) => (
                <ListItem key={index} sx={{ display: "list-item" }}>
                  <ListItemText primary={post} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default ProductPerformance;
