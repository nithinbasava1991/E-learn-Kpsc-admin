// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';
import { useLocation } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const Modules = () => {
  const theme = useTheme();

  const location = useLocation();
  const { jobPostId, jobPostName, details } = location.state || {};

  if (!jobPostId || !jobPostName) {
    return <Typography variant="h6">No job post selected.</Typography>;
  }

  const handleCardClick = (id, name) => {
    // Handle card click logic here
    console.log(`Card clicked: ${id}, ${name}`);
  };

  return (
    <MainCard title="modules">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Card
            sx={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width:"30%",
                height:"100%",
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                cursor: 'pointer',
                
              },
              margin: { sm: 2, xs: 0 },
              mt: { xs: 2, sm: 0 }
            }}
            onClick={() => handleCardClick(jobPostId, jobPostName)}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Modules for {jobPostName}
              </Typography>
              <Typography variant="subtitle1">
                Job Post ID: {jobPostId}
              </Typography>
              <Typography variant="body1">
                {details?.length > 0
                  ? `Details: ${JSON.stringify(details)}`
                  : 'No details available for this job post.'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default Modules;