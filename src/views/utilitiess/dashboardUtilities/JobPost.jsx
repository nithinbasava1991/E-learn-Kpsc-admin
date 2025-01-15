import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, Alert } from '@mui/material';
import { fetchCategoriesByJobPostId, fetchJobPosts } from 'views/API/DashboardApi';
import MainCard from 'ui-component/cards/MainCard';

const JobPosts = () => {
  const [showAll, setShowAll] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const fetchCategories = async () => {
    try {
      const res = await fetchJobPosts(headers);
      const fetchedData = res.data;
      if (fetchedData) {
        const sortedData = fetchedData.sort((a, b) => a.jobPostName.localeCompare(b.jobPostName));
        const categoryData = sortedData.map((c) => ({
          jobPostId: c.jobPostId,
          jobPostName: c.jobPostName
        }));
        setCategories(categoryData);
      }
    } catch (error) {
      console.error('Error fetching jobposts:', error);
      setError('Failed to fetch jobposts.');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCardClick = async (jobPostId, jobPostName) => {
    try {
      const res = await fetchCategoriesByJobPostId(headers, jobPostId);
      const fetchedData = res.data;
      console.log(fetchedData);
     
        navigate('/dashboard/subjects', { state: { jobPostId, jobPostName, details: fetchedData } });
      } 
      
     catch (error) {
      console.error('Error fetching modules:', error);
      setError('Failed to fetch modules.');
    }
  };
  

  return (
    <>
    <MainCard>
      <Typography variant="h3" gutterBottom>
        Job Posts
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2}>
        {(showAll ? categories : categories.slice(0, 8)).map((category) => (
          <Grid item xs={12} sm={6} md={4}  key={category.jobPostId}>
            <Card
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer'
                },
                margin: {sm:2,xs:0},
                mt:{xs:2,sm:0}
              }}
              onClick={() => handleCardClick(category.jobPostId, category.jobPostName)}
            >
              <CardContent>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {category.jobPostName}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {categories.length > 8 && !showAll && (
        <Box sx={{ textAlign: { sm: 'right', xs: 'center' }, mt: 2, mr: 2 }}>
          <Button variant="contained" color="primary" onClick={handleViewAll}>
            View All
          </Button>
        </Box>
      )}
      </MainCard>
    </>
  );
};

export default JobPosts;
