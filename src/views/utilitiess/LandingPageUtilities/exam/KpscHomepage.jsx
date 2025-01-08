import React from "react";
import ResponsiveHeader from "../ResponsiveHeader";
import ResponsiveAppBar from "../ResponsiveAppBar";
import CustomCarousel from "../CustomCarousel";
import AboutKpscExams from "./AboutKpscExams";
import CustomPrograms from "../CustomPrograms";
import CustomFooter from "../CustomFooter";




const KpscHomepage = () => {
  return (
    <>
      <ResponsiveHeader/>
      <ResponsiveAppBar/>
      <CustomCarousel/>
      <AboutKpscExams/>
      <CustomPrograms/>
      <CustomFooter/>
    </>
  );
};

export default KpscHomepage;
