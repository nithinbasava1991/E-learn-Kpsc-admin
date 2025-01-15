import { Box, Grid } from "@mui/material";
import React from "react";
import DailyActivities from "./Daily";
import Navbar from "../Navbar";
import Contact from "../Contact";
import Footer from "../Footer";
import ProductPerformance from "./Product";

const Class1 = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Box sx={{ background: "#e3dede" }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={4}>
              <DailyActivities />
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <ProductPerformance />
            </Grid>
          </Grid>
        </Box>
        <Contact />
        <Footer />
      </Box>
    </>
  );
};

export default Class1;
