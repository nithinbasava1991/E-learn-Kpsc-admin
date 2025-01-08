// src/components/HomePage.js
import React from 'react';
import ResponsiveHeader from './ResponsiveHeader';
import ResponsiveAppBar from './ResponsiveAppBar';
import CustomCarousel from './CustomCarousel';
import ResponsiveCards from './ResponsiveCards';
import CustomMarquee from './CustomMarquee';
import CustomTeams from './CustomTeams';
import CustomContact from './CustomContact';
import CustomFooter from './CustomFooter';
import CustomCard from './CustomCard';
import AboutKpsc from './AboutKpsc';
import CustomTestimonials from './CustomTestimonials';

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <ResponsiveHeader />
      <ResponsiveAppBar />
      <CustomCarousel />
      <ResponsiveCards />
      <br/>
      <CustomMarquee />
     
      <AboutKpsc/>
     <CustomCard/>
      <CustomTeams />
      <CustomTestimonials/>
      <CustomContact />
      <CustomFooter />
    </div>
  );
};

export default HomePage;