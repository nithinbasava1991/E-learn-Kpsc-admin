import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../../../assets/images/logo/Malnad Logo-modified.png";

const ResponsiveAppBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setOpen(!open);
  };

  // Function to handle navigation to KPSC page
  const handleNavigateToKPSC = () => {
    console.log("Navigating to KPSC")
    navigate("/kpsc-home");
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  // Function to handle navigation to Home page
  const handleNavigateToHome = () => {
    navigate("/");
    // Scroll to top after navigation
    window.scrollTo(0, 0);
  };

  return (
    <AppBar
      position="fixed" // Fixed position at the top
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        top: -5, // Ensures the AppBar is fixed at the top
        left: 0,
        right: 0,
        zIndex: 9999, // Ensures it's above other elements
        marginTop: "60px", // Add margin-top to prevent overlap with the content
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo and Title */}
        <Box display="flex" alignItems="center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "75px", marginRight: "8px" }}
          />
        </Box>

        {/* Navigation Links */}
        {isMobile ? (
          <IconButton
            edge="end"
            onClick={toggleMenu}
            sx={{
              display: { xs: "block", sm: "none" },
              color: theme.palette.primary.main,
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              sx={{ color: "#000", fontWeight: "bold" }}
              onClick={handleNavigateToHome} // Navigate to Home
            >
              Home
            </Button>
            <Button
              sx={{ color: "#000", fontWeight: "bold" }}
              onClick={() => navigate("/")} // Navigate to About Us
            >
              About Us
            </Button>
            <Button
              sx={{ color: "#000", fontWeight: "bold" }}
              onClick={handleNavigateToKPSC} // Navigate to KPSC route
            >
              KPSC
            </Button>
            <Button
              sx={{ color: "#000", fontWeight: "bold" }}
              onClick={() => navigate("/")} // Navigate to Study Material
            >
              Study Material
            </Button>
            <Button
              sx={{ color: "#000", fontWeight: "bold" }}
              onClick={() => navigate("/")} // Navigate to Contact Us
            >
              Contact Us
            </Button>
            <Button
              sx={{
                backgroundColor: "#FFC107",
                color: "white",
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: "25px",
                "&:hover": {
                  backgroundColor: "#FFA000",
                },
              }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/login")} // Navigate to Login
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      {isMobile && open && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "76px", // Adjusted to show below the app bar
            right: 0,
            backgroundColor: "white",
            width: "100%",
            boxShadow: 2,
          }}
        >
          <Button onClick={() => { handleNavigateToHome(); toggleMenu(); }} sx={{ color: theme.palette.primary.main }}>
            Home
          </Button>
          <Button onClick={() => { navigate("/about"); toggleMenu(); }} sx={{ color: theme.palette.primary.main }}>
            About Us
          </Button>
          <Button onClick={() => { handleNavigateToKPSC(); toggleMenu(); }} sx={{ color: theme.palette.primary.main }}>
            KPSC
          </Button>
          <Button onClick={() => { navigate("/study-material"); toggleMenu(); }} sx={{ color: theme.palette.primary.main }}>
            Study Material
          </Button>
          <Button onClick={() => { navigate("/contact"); toggleMenu(); }} sx={{ color: theme.palette.primary.main }}>
            Contact Us
          </Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onClick={() => {
                navigate("/login");
                toggleMenu();
              }}
              sx={{
                backgroundColor: "#FFC107",
                color: "white",
                fontWeight: "bold",
                padding: "8px 16px",
                borderRadius: "25px",
                marginTop: "8px",
                width: "200px",
                margin: "16px",
                "&:hover": {
                  backgroundColor: "#FFA000",
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Login
            </Button>
          </div>
        </Box>
      )}
    </AppBar>
  );
};

export default ResponsiveAppBar;
