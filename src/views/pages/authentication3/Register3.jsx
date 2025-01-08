import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';

// ===============================|| AUTH3 - REGISTER ||=============================== //

const Register = () => {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phoneNumber: '',
    education: '',
    college: '',
    university: '',
    jobChange: '',
    postalAddress: '',
    occupation: '',
    workingDetails: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#" aria-label="theme logo">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack alignItems="center" justifyContent="center" spacing={1}>
                      <Typography color="secondary.main" gutterBottom variant={downMD ? 'h3' : 'h2'}>
                        Sign up
                      </Typography>
                      <Typography variant="caption" fontSize="16px" textAlign={{ xs: 'center', md: 'inherit' }}>
                        Enter your credentials to continue
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Age"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            select
                            label="Gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                          >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </TextField>
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Email ID"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="College"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="University"
                            name="university"
                            value={formData.university}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Job Change"
                            name="jobChange"
                            value={formData.jobChange}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Postal Address"
                            name="postalAddress"
                            value={formData.postalAddress}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            select
                            label="Student or Working"
                            name="occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                          >
                            <MenuItem value="Student">Student</MenuItem>
                            <MenuItem value="Working">Working</MenuItem>
                          </TextField>
                        </Grid>
                        {formData.occupation === 'Working' && (
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Working Details"
                              name="workingDetails"
                              value={formData.workingDetails}
                              onChange={handleChange}
                            />
                          </Grid>
                        )}
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Set Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button fullWidth variant="contained" color="primary" type="submit">
                            Register
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography component={Link} to="/" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                      Already have an account?
                    </Typography>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

export default Register;
