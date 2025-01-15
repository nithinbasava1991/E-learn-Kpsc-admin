import React from "react";
import { Card, CardContent, Box } from "@mui/material";

const DailyActivities = () => {
  return (
    <Box sx={{ background: "#e3dede" }}>
      <Card
        variant="outlined"
        sx={{
          m: { xs: 1, md: 4 },
          borderRadius: 2, // Optional: Adds rounded corners to the card
          overflow: "hidden", // Ensures no overflow from the card
        }}
      >
        <CardContent
          sx={{
            padding: 0, // Remove padding from CardContent
          }}
        >
          <Box>
            <img
              src="https://static.wixstatic.com/media/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg/v1/fill/w_300,h_513,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_8d76252c90c84036bd3336137408977c~mv2.jpg"
              alt="Government Post"
              style={{
                width: "100%",
                height: "auto", // Ensure the height adjusts proportionally
                objectFit: "cover",
                marginBottom: "-2rem",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DailyActivities;
