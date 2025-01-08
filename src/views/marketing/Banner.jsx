import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// material-ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import { fetchBanner } from 'views/API/BannerApi';
import { BaseUrl } from 'BaseUrl';

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const Banner = () => {
  const [advertisement, setAdvertisement] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };

  const ImageUrl = `${BaseUrl}/file/downloadFile/?filePath=`;

  const FetchData = async () => {
    try {
      const res = await fetchBanner(headers);
      const fetchedData = res.data.content;

      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          advertisementId: p.advertisementId,
          bannerImage: p.filePath ? `${ImageUrl}${p.filePath}` : null
        }));
        setAdvertisement(tableData);
      } else {
        setAdvertisement([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <MainCard border={false} content={false} sx={{ mt: 1 }}>
      <Box>
        <Grid container direction="column">
          <Grid item xs={12}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div> // Display loading message
            ) : (
              <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000} transitionTime={500}>
                {advertisement.length > 0 ? (
                  advertisement.map((ad) =>
                    ad.bannerImage ? (
                      <div key={ad.advertisementId} style={{ height: '100%' }}>
                        <img
                          src={ad.bannerImage}
                          alt={`Banner ${ad.advertisementId}`}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    ) : null
                  )
                ) : (
                  <div style={{ textAlign: 'center', padding: '20px' }}>No Data</div>
                )}
              </Carousel>
            )}
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

Banner.propTypes = {
  isLoading: PropTypes.bool
};

export default Banner;
