// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, Button, Divider } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useNavigate } from 'react-router-dom';

const PracticeTest = () => {
  const theme = useTheme();

  const navigate = useNavigate();

  // Function to handle starting the test
  const handleStartTest = () => {
    navigate('start');
  };

  return (
    <>
      <MainCard>
        <Grid container justifyContent="center">
          <Grid item sx={{ textAlign: 'center', fontSize: '1.4rem', fontWeight: 600 }}>
            MCQ Practice Test
          </Grid>
        </Grid>
      </MainCard>
      <MainCard sx={{ background: '#FAC898', padding: theme.spacing(2) }}>
        <Grid container direction="column" alignItems="center">
          <Grid item sx={{ textAlign: 'center', fontSize: '1.3rem', fontWeight: 600, pb: 2 }}>
            Test 1
          </Grid>
          <Grid item sx={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, pb: 1 }}>
            Duration: 30 minutes
          </Grid>
          <Grid item sx={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, pb: 4 }}>
            Number of sections: 1
          </Grid>
          <Divider sx={{ width: '100%', mb: 2 }} />
          <Grid item sx={{ textAlign: 'center', fontSize: '1rem', fontWeight: 600, pb: 2 }}>
            Test Instructions
          </Grid>
          <Grid item sx={{ textAlign: 'center', pb: 1 }}>
            The tests are timed and will be submitted automatically at the end of the allotted time.
          </Grid>
          <Grid item sx={{ textAlign: 'center', pb: 1 }}>
            The marks allocated for correct and incorrect answers are shown along with the questions.
          </Grid>
          <Grid item sx={{ textAlign: 'center', pb: 1 }}>
            There are no negative marks for unattempted questions.
          </Grid>
          <Grid item sx={{ textAlign: 'center', pb: 1 }}>
            Submit the test to see your score.
          </Grid>
          <Grid item onClick={handleStartTest}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                color: '#fff',
                background: 'green',
                '&:hover': {
                  background: 'darkgreen'
                }
              }}
              aria-label="Start Test"
            >
              Click here to Start Practice Test <ArrowRight />
            </Button>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
};

export default PracticeTest;
