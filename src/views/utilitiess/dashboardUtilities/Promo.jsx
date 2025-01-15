import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { fetchPromos } from 'views/API/DashboardApi'; 
import MainCard from 'ui-component/cards/MainCard';

const Promo = () => {
  const [details, setDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const location = useLocation();
  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };
  const navigate = useNavigate();

  // Fetching promo data
  const fetchData = async () => {
    try {
      const res = await fetchPromos(headers);
      const fetchedData = res.data.content; // Assuming the data is in `content`
      console.log(res);
      if (fetchedData) {
        setDetails(fetchedData);
      }
    } catch (error) {
      console.error('Error fetching promos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleViewAll = () => {
    navigate('promo');
  };

  // Determine how many cards to display initially (3) or show all if "View All" is clicked
  const displayedPromos = showAll ? details : details.slice(0, 3);

  return (
    <MainCard>
      <Typography variant="h3" gutterBottom>
        Promo
      </Typography>

      <Grid container spacing={2}>
        {displayedPromos.map((promo) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={promo.promoId}>
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
            >
              <CardContent>
                {promo.youTube && (
                  <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${promo.youTube}`}
                    frameBorder="0"
                    allowFullScreen
                    style={{ width: '100%', height: '190px', marginBottom: '1rem' }}
                  ></iframe>
                )}
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {promo.promoName}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {promo.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Show "View All" button if there are more than 3 promos and not all are shown yet */}
      {details.length > 3 && !showAll && (
        <Box sx={{ textAlign: { sm: 'right', xs: 'center' }, mt: 2, mr: 2 }}>
          <Button variant="contained" color="primary" onClick={handleViewAll}>
            View All
          </Button>
        </Box>
      )}
    </MainCard>
  );
};

export default Promo;
