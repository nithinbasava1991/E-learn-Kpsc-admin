import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, Alert } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { fetchCategoriesByJobPostId, fetchSubCategoriesByCategoryId } from 'views/API/DashboardApi';
import MainCard from 'ui-component/cards/MainCard';

const Categories = () => {
  const [details, setDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { jobPostId, categoryName, jobPostName } = location.state || {}; // Ensure jobPostName is extracted

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${user?.accessToken}`
  };

  const navigate = useNavigate();

  const fetchData = async () => {
    setError(null); // Clear previous errors
    try {
      const res = await fetchCategoriesByJobPostId(headers, jobPostId);
      const fetchedData = res.data;
      if (fetchedData) {
        setDetails(fetchedData);
      } else {
        setError('No categories found for this job post.');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories.');
    }
  };

  useEffect(() => {
    if (jobPostId) {
      fetchData();
    }
  }, [jobPostId]);

  const handleViewAll = () => {
    setShowAll(true);
  };

  const toggleDescription = (event, categoryId) => {
    event.stopPropagation();
    setVisibleDescription(visibleDescription === categoryId ? null : categoryId);
  };

  const handleCategoriesDetails = async (categoryId, categoryName) => {
    setError(null); // Clear previous errors
    try {
      const res = await fetchSubCategoriesByCategoryId(headers, categoryId);
      const fetchedData = res.data;
      if (fetchedData?.length > 0) {
        navigate('subCategories', { state: { categoryId, categoryName, details: fetchedData } });
      } else {
        setError('No subcategories found for this category.');
      }
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      setError('Failed to fetch subcategories.');
    }
  };

  return (
    <>
      <MainCard>
        <Typography variant="h3" gutterBottom>
          Category Details for {jobPostName || 'Unknown Job Post'}
        </Typography>
      </MainCard>
      {error && (
        <Box sx={{ mb: 2 }}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      <Grid container spacing={2}>
        {(showAll ? details : details.slice(0, 4)).map((detail) => (
          <Grid item xs={12} sm={6} md={6} key={detail.categoryId}>
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
                margin: { sm: 2, xs: 0 },
                mt: { xs: 2, sm: 2 }
              }}
              onClick={() => handleCategoriesDetails(detail.categoryId, detail.categoryName)}
            >
              <CardContent>
                {detail.videoUrl && (
                  <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${detail.videoUrl}`}
                    frameBorder="0"
                    allowFullScreen
                    style={{ width: '100%', height: '190px', marginBottom: '1rem' }}
                  ></iframe>
                )}
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {detail.categoryName}
                  {/* <Button
                    sx={{
                      ml: 1,
                      borderRadius: '50%',
                      backgroundColor: 'transparent',
                      '&:hover': { backgroundColor: 'action.hover' }
                    }}
                    onClick={(e) => toggleDescription(e, detail.categoryId)}
                  >
                    <InfoOutlinedIcon sx={{ fontSize: 24 }} />
                  </Button> */}
                </Typography>
                {/* {visibleDescription === detail.categoryId && ( */}
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {detail.description}
                  </Typography>
                {/* )} */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {details.length > 4 && !showAll && (
        <Box sx={{ textAlign: { sm: 'right', xs: 'center' }, mt: 2, mr: 2 }}>
          <Button variant="contained" color="primary" onClick={handleViewAll}>
            View All
          </Button>
        </Box>
      )}
    </>
  );
};

export default Categories;
