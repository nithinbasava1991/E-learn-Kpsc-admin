import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { fetchNews } from 'views/API/DashboardApi';
import MainCard from 'ui-component/cards/MainCard';
import { BaseUrl } from 'BaseUrl';
import { useNavigate } from 'react-router-dom';

const ViewAllCategories = () => {
  const [details, setDetails] = useState([]);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };
  const navigate = useNavigate();

  // Fetch news data
  const fetchData = async () => {
    try {
      const res = await fetchNews(headers);
      const fetchedData = res.data.content;
      if (fetchedData) {
        setDetails(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainCard>
      <Typography variant="h3" gutterBottom>
        Category
      </Typography>

      <Grid container spacing={2}>
        {details.map((category) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={category.categoryId}>
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
                margin: 2
              }}
            >
              <CardContent>
                <Typography variant="h4" sx={{ mb: 2 }}>
                  {category.categoryName}
                </Typography>
                <Typography variant="body2">{category.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default ViewAllCategories;
