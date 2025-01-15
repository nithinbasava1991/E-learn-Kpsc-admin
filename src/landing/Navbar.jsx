import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
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
              {/* Directly adding MenuItems */}
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
                  navigate('/about');
                }}
              >
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('/courses');
                }}
              >
                Courses
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate('/contact');
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
            {/* Directly adding Buttons */}
            <Button onClick={handleHome} sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}>
              Home
            </Button>
            <Button
              onClick={() => navigate('/about')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}
            >
              About
            </Button>
            <Button
              onClick={() => navigate('/courses')}
              sx={{ my: 2, color: 'black', display: 'block', fontSize: '1rem', ml: { md: 4, lg: 6 } }}
            >
              Courses
            </Button>
            <Button
              onClick={() => navigate('/contact')}
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
  );
}

export default Navbar;
