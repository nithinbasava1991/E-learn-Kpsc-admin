import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import image from "../../../../assets/images/classone/Screenshot 2024-12-24 at 13-55-40 Class I & Class II Officers Myprojectwork 1.png";
import kpsc from "../../../../assets/images/classone/kpsc viedo.mp4";
import IntroductionViedos from "./IntroductionViedos";
import ResponsiveHeader from "../ResponsiveHeader";
import ResponsiveAppBar from "../ResponsiveAppBar";
import CustomFooter from "../CustomFooter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const ClassOne = () => {
  return (
    <>
      <ResponsiveHeader/>
      <ResponsiveAppBar/>

      {/* First Card for Class I & II Officers */}
      <Card sx={{ m: 2, p: 2, boxShadow: 3,marginTop:"180px"}}>
        <Grid
          container
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
        >
          {/* Image on top for mobile, left for desktop */}
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="Image"
              image={image}
              sx={{
                width: "100%", // Increase the width slightly on mobile
                height: { xs: 250, sm: 350 }, // Keep the height responsive
                objectFit: "cover", // Cover the container without distortion
              }}
            />
          </Grid>

          {/* Text on bottom for mobile, right for desktop */}
          <Grid item xs={12} sm={6}>
            <CardContent sx={{ textAlign: { xs: "center", sm: "left" } }}>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Government Posts - Class I & II (Grade A & B)
              </Typography>
              <ul>
                <li>Assistant Commissioner - Revenue</li>
                <li>Assistant Commissioner - Commercial Tax</li>
                <li>Assistant Controller - State Accounts</li>
                <li>DYSP / ACP - KSPS</li>
                <li>DYSP - Excise</li>
                <li>District Social Welfare Officers</li>
                <li>District Treasury Officers</li>
                <li>Tahsildar</li>
                <li>Commercial Tax Officer (CTO)</li>
                <li>Taluk Social Welfare Officers</li>
                <li>Sports & Youth Affairs Officer</li>
              </ul>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                ... many more
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Second Card for Additional Content */}
      <Card sx={{ m: 2, p: 2, boxShadow: 3 }}>
  <Grid
    container
    spacing={2}
    direction={{ xs: "column", sm: "row" }}
    alignItems="stretch" // Ensures equal height for both sides
  >
    {/* Left Side - Additional Information */}
    <Grid item xs={12} sm={6}>
      <CardContent
        sx={{
          textAlign: { xs: "center", sm: "left" },
          borderRight: { xs: "none", sm: "1px solid #ccc" },
          height: "100%", // Ensures it stretches to the full height
          paddingRight: { xs: 0, sm: 2 },
        }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Important Information
        </Typography>
        <Typography variant="body1" color="text.primary">
          <strong>Age Limits for KPSC Exams:</strong>
          <ul>
            <li>
              <strong>Class I & II:</strong>
            </li>
            <ul>
              <li>General Merit – Maximum age limit 35 years</li>
              <li>OBC – Maximum age limit 38 years</li>
              <li>SC/ST, CAT - 1 – Maximum age limit 40 years</li>
            </ul>
            <li>
              <strong>Class III (PSI, ESI):</strong>
            </li>
            <ul>
              <li>General Merit – Maximum age limit 28 years</li>
              <li>SC/ST, CAT - 1, OBC – Maximum age limit 30 years</li>
            </ul>
            <li>
              <strong>II PUC Pass (Police Constable):</strong>
            </li>
            <ul>
              <li>General Merit – Maximum age limit 25 years</li>
              <li>SC/ST, CAT - 1, OBC – Maximum age limit 27 years</li>
            </ul>
          </ul>
          <strong>Examination Attempts:</strong>
          <ul>
            <li>General Merit – Maximum 5 attempts</li>
            <li>OBC – Maximum 7 attempts</li>
            <li>SC/ST, CAT - 1 – No limitation on number of attempts</li>
          </ul>
          <strong>Physical Fitness Requirements:</strong>
          <ul>
            <li>
              <strong>For Men:</strong>
            </li>
            <ul>
              <li>
                1600 meters running within 7 minutes – only one attempt
              </li>
              <li>Long Jump – minimum 3.8 meters – maximum 3 attempts</li>
              <li>
                High Jump – minimum height 0.9 meters – maximum 3 attempts
              </li>
              <li>
                Shot put (7.26 KG) – minimum distance 5.6 meters – maximum
                3 attempts
              </li>
            </ul>
            <li>
              <strong>For Women:</strong>
            </li>
            <ul>
              <li>
                400 meters running within 2 minutes – only one attempt
              </li>
              <li>Long Jump – minimum 2.5 meters – maximum 3 attempts</li>
              <li>
                High Jump – minimum height 1.2 meters – maximum 3 attempts
              </li>
              <li>
                Shot put (4 KG) – minimum distance 3.75 meters – maximum 3
                attempts
              </li>
            </ul>
          </ul>
        </Typography>
      </CardContent>
    </Grid>

    {/* Right Side - Syllabus */}
    <Grid item xs={12} sm={6}>
      <CardContent
        sx={{
          textAlign: { xs: "center", sm: "left" },
          borderLeft: { xs: "none", sm: "1px solid #ccc" },
          height: "100%", // Ensures it stretches to the full height
          paddingLeft: { xs: 0, sm: 2 },
        }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Syllabus
        </Typography>

        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          PRELIMS
        </Typography>

        <Typography variant="body1" color="text.primary">
          <strong>Prelims Paper I</strong>
          <ul>
            <li>
              Humanities – History, Polity, Economics, Geography &
              Sociology (H E G P S) – State, National & International – 60
              Qs - 120 Marks
            </li>
            <li>
              General Studies – National & International Importance – 40
              Qs - 80 Marks
            </li>
          </ul>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Each question carries 2 marks. Total Marks – 200. Every wrong
            answer carries 0.25 penalty marks deduction.
          </Typography>

          <strong>Prelims Paper II</strong>
          <ul>
            <li>General Studies – State Importance – 40 Qs - 80 Marks</li>
            <li>
              General Science & Technology, Environment & Ecology –
              (Physics, Chemistry, Biology/Life Sciences, Basic Computer
              Science, GK, Current Affairs – (state, national,
              international)) - 30 Qs – 60 Marks
            </li>
            <li>General Mental Ability – 30 Qs - 60 Marks</li>
          </ul>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Each question carries 2 marks. Total Marks – 200. Every wrong
            answer carries 0.25 penalty marks deduction.
          </Typography>

          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            MAINS
          </Typography>

          <strong>Qualifying Papers</strong>
          <ul>
            <li>Kannada - 150 Marks - 2 hours duration</li>
            <li>English – 150 Marks - 2 hours duration</li>
          </ul>
          <Typography variant="body2" sx={{ mb: 1 }}>
            A minimum of 105 marks (35%), including both the papers,
            should be secured. If these 2 papers are not cleared, then
            evaluations of other papers will not be done by the
            authorities.
          </Typography>

          <strong>Compulsory Papers - Descriptive Answers</strong>
          <ul>
            <li>
              Essay - 250 Marks - can be written in either Kannada or
              English - 3 hours duration
            </li>
            <li>
              General Studies 1 - 250 Marks - can be written either in
              Kannada or English - 3 hours duration
            </li>
            <li>
              General Studies 2 - 250 Marks - can be written either in
              Kannada or English - 3 hours duration
            </li>
            <li>
              General Studies 3 - 250 Marks - can be written either in
              Kannada or English - 3 hours duration
            </li>
            <li>
              General Studies 4 (Ethics & Integrity) - 250 Marks - can be
              written either in Kannada or English - 3 hours duration
            </li>
            <li>Personality Test - 25 Marks</li>
          </ul>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: "bold" }}>
            <h2 style={{ margin: 0 }}>Total - 1275 Marks</h2>
          </Typography>
        </Typography>
      </CardContent>
    </Grid>
  </Grid>
</Card>

<IntroductionViedos/>

      <CustomFooter/>
    </>
  );
};

export default ClassOne;
