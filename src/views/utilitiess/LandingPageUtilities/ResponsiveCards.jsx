import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { IconBook, IconList, IconCertificate, IconUsers } from "@tabler/icons-react";

const colors = [
  { background: "#ade8f4", border: "#FF9248" }, // Blue background, orange border
  { background: "#FF9248", border: "#0047AB" }, // Orange background, blue border
  { background: "#FFFFFF", border: "#0047AB" }, // White background, blue border
  { background: "#FF9248", border: "#FFFFFF" }, // Orange background, white border
];

const data = [
  { icon: <IconBook size={32} color="#fff" />, title: <>1000<span style={{ fontSize: '0.75em' }}>s</span></>, subtitle: "coaching Videos" },
  { icon: <IconList size={32} color="#fff" />, title: "", subtitle: <>Subject-Wise <br/> Topic-Wise content</> },
  { icon: <IconCertificate size={32} color="#fff" />, title: "", subtitle:<>Weekly Test <br/> AI Based Assessment</> },
  { icon: <IconUsers size={32} color="#fff" />, title: "", subtitle: "24X7 Access to Content" },
];

const ResponsiveIconsDescription = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFCC66", 
        padding: { xs: "10px", sm: "20px", md: "30px" }, 
        borderRadius: "10px", 
        boxShadow: 3, // Optional: Adds a shadow around the box
      }}
    >
      <Grid
        container
        spacing={2} // Adjusted spacing between the cards
        sx={{
          display: "flex",
          flexWrap: "wrap", // Prevents horizontal scrolling by wrapping items
          justifyContent: "center", // Center the cards horizontally
          alignItems: "center", // Center the cards vertically
          flexDirection: { xs: "column", sm: "row" }, // Change direction based on screen size
          gap: "16px", // Adjust the gap between the cards for all screen sizes
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "8px",
              border: `2px solid ${colors[index % colors.length].border}`,
              borderRadius: "10px",
              padding: { xs: "12px", sm: "15px", md: "20px" }, // Uniform padding for all sizes
              margin: { xs: "8px", sm: "10px", md: "12px" }, // Consistent margin for all screen sizes
              backgroundColor: colors[index % colors.length].background,
              minWidth: "220px", // Reduced the minWidth to make cards smaller
              maxWidth: "300px", // Set a maxWidth to prevent them from stretching too much on larger screens
              flex: "0 0 auto", // Ensures the cards maintain their width without stretching
            }}
          >
            {/* Icon (Circle) */}
            <Box
              sx={{
                backgroundColor: "#ff9248",
                borderRadius: "50%",
                width: { xs: "35px", sm: "45px" },
                height: { xs: "35px", sm: "45px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </Box>

            {/* Description */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color : "#333",
                  fontSize: { xs: "10px", sm: "12px", md: "14px" },
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveIconsDescription;
