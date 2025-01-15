import { Box, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import YelpIcon from "@mui/icons-material/Star";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f1f1f1", padding: 2 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center" // Centering the entire grid content horizontally
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} // Centering this grid item content
        >
          <Typography variant="body1" sx={{ color: "black" }}>
            Designed by WakinSoftwares Bharat Pvt Ltd.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            display="flex"
            sx={{ justifyContent: { sm: "end", xs: "center" }, mt: { xs: 2, sm: 0 } }} // Centering the icons
          >
            <IconButton
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://www.youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton
              href="https://www.yelp.com"
              target="_blank"
              aria-label="Yelp"
            >
              <YelpIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
