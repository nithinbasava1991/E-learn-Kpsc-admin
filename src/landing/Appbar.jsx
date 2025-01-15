import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f1f1f1",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        padding: "10px 10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src="https://static.wixstatic.com/media/c7e800_e0d0bbdab69d43c8afeb08cbf1c95e0e~mv2.png/v1/fill/w_97,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7e800_e0d0bbdab69d43c8afeb08cbf1c95e0e~mv2.png"
            alt="Logo"
            sx={{
              width: { xs: "50px", md: "100px" },
              height: {
                xs: "50px",
                md: "100px",
              },
              marginRight: "16px",
              cursor: "pointer",
            }}
            onClick={handleHome}
          />
          <Typography
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: "monospace",
              color: "black",
              textDecoration: "none",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
            }}
          >
            Online Platform for KPSC Studies
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "auto",
              flexGrow: 0,
            }}
          >
            <Tooltip>
              <IconButton onClick={handleLogin} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Typography
              sx={{
                ml: 1,
                color: "black",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                cursor: "pointer",
              }}
              onClick={handleLogin}
            >
              Login
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
