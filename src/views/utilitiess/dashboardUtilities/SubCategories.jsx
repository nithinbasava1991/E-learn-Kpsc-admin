import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box, Alert } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { fetchSubCategoriesByCategoryId, fetchSubjectsBySubCategoryId } from 'views/API/DashboardApi';
import MainCard from 'ui-component/cards/MainCard';

const SubCategories = () => {
  const [details, setDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { categoryId, categoryName } = location.state || {};

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${user?.accessToken}`,
  };

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await fetchSubCategoriesByCategoryId(headers, categoryId);
      const fetchedData = res?.data || [];
      setDetails(fetchedData);
    } catch (err) {
      console.error('Error fetching subcategories:', err);
      setError('Failed to fetch subcategories. Please try again later.');
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchData();
    }
  }, [categoryId]);

  const handleViewAll = () => setShowAll(true);

  const toggleDescription = (event, subCategoryId) => {
    event.stopPropagation();
    setVisibleDescription(visibleDescription === subCategoryId ? null : subCategoryId);
  };

  const handleSubjectDetails = async (subCategoryId, subCategoryName) => {
    setError(null);
    try {
      const res = await fetchSubjectsBySubCategoryId(headers, subCategoryId);
      const fetchedData = res?.data || [];
      if (fetchedData.length > 0) {
        navigate('subjects', { state: { subCategoryId, subCategoryName, details: fetchedData } });
      } else {
        setError('No subjects found for this subcategory.');
      }
    } catch (err) {
      console.error('Error fetching subjects:', err);
      setError('Failed to fetch subjects. Please try again later.');
    }
  };

  return (
    <>
      <MainCard>
        <Typography variant="h3" gutterBottom>
          Subcategory Details for {categoryName || 'Unknown Category'}
        </Typography>
        {error && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error">{error}</Alert>
          </Box>
        )}
      </MainCard>
      <Grid container spacing={2}>
        {(showAll ? details : details.slice(0, 4)).map((detail) => (
          <Grid item xs={12} sm={6} md={6} key={detail.subCategoryId}>
            <Card
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                },
                margin: { sm: 2, xs: 0 },
                mt: { xs: 2, sm: 2 },
              }}
              onClick={() => handleSubjectDetails(detail.subCategoryId, detail.subCategoryName)}
            >
              <CardContent>
                {detail.videoUrl && (
                  <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${detail.videoUrl}`}
                    frameBorder="0"
                    allowFullScreen
                    style={{ width: '100%', height: '250px', marginBottom: '1rem' }}
                  ></iframe>
                )}
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {detail.subCategoryName}
                  <Button
                    sx={{
                      ml: 1,
                      minWidth: 0,
                      padding: 0,
                      borderRadius: '50%',
                      backgroundColor: 'transparent',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                    onClick={(e) => toggleDescription(e, detail.subCategoryId)}
                  >
                    <InfoOutlinedIcon sx={{ fontSize: 24 }} />
                  </Button>
                </Typography>
                {visibleDescription === detail.subCategoryId && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {detail.description}
                  </Typography>
                )}
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

export default SubCategories;
