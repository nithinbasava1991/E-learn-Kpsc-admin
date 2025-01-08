import React from "react";
import { Box, Typography, IconButton, Stack, Divider, useMediaQuery } from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram, Pinterest } from "@mui/icons-material";

const ResponsiveHeader = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundColor: "#ff9500",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 16px",
        color: "white",
        position: "fixed", // Fixes the header at the top
        top: 0, // Ensures it stays at the top of the page
        left: 0,
        right: 0,
        zIndex: 9999, // Ensures it's above other elements
      }}
    >
      {!isMobile && (
        <Stack direction="row" spacing={2} alignItems="center" divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "#a100f2" }} />}>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
            📞 +1 123-456-789
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
            📧 contactus@email.com
          </Typography>
          <Typography variant="body1" sx={{ display: "flex", alignItems: "center" }}>
            📍 Texas, Houston-TX5844
          </Typography>
        </Stack>
      )}
      <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "#a100f2" }} />}>
        <IconButton color="inherit">
          <Facebook />
        </IconButton>
        <IconButton color="inherit">
          <Twitter />
        </IconButton>
        <IconButton color="inherit">
          <YouTube />
        </IconButton>
        <IconButton color="inherit">
          <Instagram />
        </IconButton>
        <IconButton color="inherit">
          <Pinterest />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default ResponsiveHeader;
