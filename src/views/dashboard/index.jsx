import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports

import Banner from './Banner';

import { gridSpacing } from 'store/constant';
import Promo from 'views/utilitiess/dashboardUtilities/Promo';
import News from 'views/utilitiess/dashboardUtilities/News';
import SuccessStory from 'views/utilitiess/dashboardUtilities/SuccessStory';
import Category from 'views/utilitiess/dashboardUtilities/Category';
import { generateToken, messaging } from 'views/utilitiess/firebase/firebase';
import { onMessage } from 'firebase/messaging';
import toast, { Toaster } from 'react-hot-toast';
import JobPosts from 'views/utilitiess/dashboardUtilities/JobPost';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    generateToken();
    onMessage(messaging,(payload)=>{
      console.log(payload)
      toast(payload.notification.body)
    })
  }, []);

  return (
    <>
     

    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
      <Toaster   position="top-right"
  reverseOrder={false}/>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <Banner isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <JobPosts isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <Promo isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <News isLoading={isLoading} />
          </Grid>
          <Grid item xs={12}>
            <SuccessStory isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default Dashboard;
