// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';

const Topics = () => {
  const theme = useTheme();

  return (
    <MainCard title="Topics">
      <Grid container spacing={gridSpacing}></Grid>
    </MainCard>
  );
};

export default Topics;
