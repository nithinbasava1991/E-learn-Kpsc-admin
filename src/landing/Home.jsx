import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useRef } from "react"; // Import useRef
import AdvertisementCarousel from "./Carousel";
import Courses from "./Courses";
import Subscribe from "./Subscribe";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
import AboutUs from "./About";

const Home = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
  // Create references for the Courses and Contact components
  const aboutUsRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  // Function to scroll to the Courses component
  const scrollToCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToAboutUs = () => {
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to scroll to the Contact component
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#f1f1f1',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '10px 10px'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <img
                style={{ marginRight: 2, marginLeft: -30, width: '70px', height: '70px' }}
                src="https://static.wixstatic.com/media/c7e800_e0d0bbdab69d43c8afeb08cbf1c95e0e~mv2.png/v1/fill/w_97,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7e800_e0d0bbdab69d43c8afeb08cbf1c95e0e~mv2.png"
              />
            </Box>
            <Typography
              variant="title"
              noWrap
              component="a"
              sx={{
                ml: 2,
                display: { xs: 'none', md: 'flex' },
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              Online Platform for KPSC Studies
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, ml: -6 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    handleHome();
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToAboutUs()
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToCourses(); // Scroll to Courses
                  }}
                >
                  Courses
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    scrollToContact(); // Scroll to Contact
                  }}
                >
                  Contact
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ display: { md: 'none', xs: 'flex' } }}>
              <img
                style={{ marginRight: 10, width: '50px', height: '50px' }}
                src="https://static.wixstatic.com/media/c7e800_e0d0bbdab69d43c8afeb08cbf1c95e0e~mv2.png/v1/fill/w_97,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c7e800_e0d0bbdab69d43c8afeb08cbf1c95e0e~mv2.png"
              />
            </Box>
            <Typography
              variant="title"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                letterSpacing: '.1rem',
                color: 'black',
                textDecoration: 'none',
                fontSize: '1.1rem'
              }}
            >
              Online Platform for KPSC Studies
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleHome} sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}>
                Home
              </Button>
              <Button
                onClick={scrollToAboutUs}
                sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}
              >
                About
              </Button>
              <Button
                onClick={scrollToCourses} // Scroll to Courses
                sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}
              >
                Courses
              </Button>
              <Button
                onClick={scrollToContact} // Scroll to Contact
                sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}
              >
                Contact
              </Button>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: 1,
                flexGrow: 0
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
                  mr: -4,
                  color: 'black',
                  fontSize: { xs: '1rem', sm: '1.2rem' },
                  cursor: 'pointer'
                }}
                onClick={handleLogin}
              >
                Login
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box>
        <AdvertisementCarousel />
        {/* Pass the ref to the Courses and Contact components */}
        <div ref={aboutUsRef}> 
          <AboutUs />
        </div>
        <div ref={coursesRef}> 
          <Courses />
        </div>
        <Subscribe />
        <div ref={contactRef}> 
          <Contact />
        </div>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
