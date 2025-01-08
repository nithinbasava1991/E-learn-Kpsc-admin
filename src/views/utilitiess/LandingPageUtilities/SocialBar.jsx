import React from "react";
import { Box, List, ListItem, Link, IconButton } from "@mui/material";
import { IconBrandWhatsapp, IconPhone, IconArrowUp } from "@tabler/icons-react";

const SocialBar = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 10,
        zIndex: 1000,
      }}
    >
      <List sx={{ padding: 0 }}>
        {/* Back to Top Button */}
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "5px",
            width: { xs: "40px", sm: "50px", md: "60px" }, // Responsive width
            textAlign: "center",
            padding: "10px",
            borderRadius: "50%",
            transition: "all 0.5s ease",
            "&:hover": {
              transform: "translateX(-10px)",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          <IconButton
            onClick={scrollToTop}
            sx={{
              color: "#fff",
              backgroundColor: "#4CAF50", // Green color for the button
              borderRadius: "50%",
              padding: { xs: "8px", sm: "10px" },
              fontSize: { xs: "20px", sm: "24px", md: "30px" },
              "&:hover": {
                transform: "rotate(360deg)",
                backgroundColor: "#388E3C",
              },
            }}
          >
            <IconArrowUp />
          </IconButton>
        </ListItem>

        {/* WhatsApp Icon */}
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "5px",
            width: { xs: "40px", sm: "50px", md: "60px" }, // Responsive width
            textAlign: "center",
            padding: "10px",
            borderRadius: "50%",
            transition: "all 0.5s ease",
            animation: "wiggle 0.5s infinite", // Animation for wiggle effect
            "&:hover": {
              transform: "translateX(-10px)",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          <Link href="https://wa.me/yourwhatsapplink" underline="none">
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: "#25D366", // WhatsApp color
                borderRadius: "50%",
                padding: { xs: "8px", sm: "10px" },
                fontSize: { xs: "20px", sm: "24px", md: "30px" },
                "&:hover": {
                  transform: "rotate(360deg)",
                  backgroundColor: "#128C7E",
                },
              }}
            >
              <IconBrandWhatsapp />
            </IconButton>
          </Link>
        </ListItem>

        {/* Phone Icon */}
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "5px",
            width: { xs: "40px", sm: "50px", md: "60px" },
            textAlign: "center",
            padding: "10px",
            borderRadius: "50%",
            transition: "all 0.5s ease",
            animation: "wiggle 0.5s infinite", // Animation for wiggle effect
            "&:hover": {
              transform: "translateX(-10px)",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
        >
          <Link href="tel:+123456789" underline="none">
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: "#2962FF", // Phone color
                borderRadius: "50%",
                padding: { xs: "8px", sm: "10px" },
                fontSize: { xs: "20px", sm: "24px", md: "30px" },
                "&:hover": {
                  transform: "rotate(360deg)",
                  backgroundColor: "#1C54B2",
                },
              }}
            >
              <IconPhone />
            </IconButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default SocialBar;
