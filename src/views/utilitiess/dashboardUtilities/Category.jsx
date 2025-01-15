import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, Alert } from '@mui/material';
import { fetchCategory, fetchSubjectsByCategoryId } from 'views/API/DashboardApi';
import MainCard from 'ui-component/cards/MainCard';

const Category = () => {
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
      const res = await fetchCategory(headers);
      const fetchedData = res;
      console.log(fetchedData);
      if (fetchedData) {
        const sortedData = fetchedData.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
        const categoryData = sortedData.map((c) => ({
          categoryId: c.categoryId,
          categoryName: c.categoryName
        }));
        setCategories(categoryData);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
      setError('Failed to fetch categories.');
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCardClick = async (categoryId, categoryName) => {
    try {
      const res = await fetchSubjectsByCategoryId(headers, categoryId);
      const fetchedData = res.data;
      if (fetchedData.length > 0) {
        navigate('subjects', { state: { categoryId, categoryName, details: fetchedData } });
      } else {
        setError('No courses found for this category.');
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      setError('Failed to fetch courses.');
    }
  };

  return (
    <>
      <MainCard>
        <Typography variant="h3" gutterBottom>
          Category
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Grid container spacing={2}>
          {(showAll ? categories : categories.slice(0, 8)).map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category.categoryId}>
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
                  mt: { xs: 2, sm: 0 }
                }}
                onClick={() => handleCardClick(category.categoryId, category.categoryName)}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {category.categoryName}
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

export default Category;
