// material-ui
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Box, Button, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from 'BaseUrl';
import { fetchQuestions } from 'views/API/McqApi';

const StartPracticeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [answeredNumbers, setAnsweredNumbers] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSaveNext = () => {
    // Check if an option is selected
    if (!selectedOption) {
        alert('Please select an answer before proceeding');
        return; // Exit the function if no option is selected
    }

    // Save the selected answer for the current question
    setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [currentQuestionIndex]: selectedOption,
    }));

    // Mark the current question as answered by adding its number to answeredNumbers
    setAnsweredNumbers((prevAnswered) => [...prevAnswered, currentQuestionIndex + 1]);

    // Move to the next question and reset selected option
    if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(''); // Reset selected option for the next question
    } else {
        alert("You've reached the end of the questions.");
    }
};

  const theme = useTheme();
  const numbers = Array.from({ length: questions.length }, (_, i) => i + 1);

  const fetchData = async () => {
    try {
      const res = await fetchQuestions(headers);
      const fetchedData = res.data;
      console.log(fetchedData);
      if (fetchedData) {
        const questionData = fetchedData.map((p) => ({
          mcqId: p.mcqId,
          question: p.question,
          a: p.a,
          b: p.b,
          c: p.c,
          d: p.d
        }));
        setQuestions(questionData);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainCard>
      <Box>
        <Grid container alignItems="center">
          {/* Left-aligned item */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { md: 'start', xs: 'center' }, fontSize: '1.3rem', fontWeight: 600, color: 'steelblue' }}
          >
            Start MCQ Practice Test
          </Grid>

          {/* Center-aligned item */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { md: 'start', xs: 'center' },
              fontSize: '1.2rem',
              fontWeight: 600,
              mt: { xs: 6, md: 0 },
              mb: { xs: 2, md: 0 }
            }}
          >
            Test 1
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ mt: 2, mb: -2 }} />
      {/* Content Section */}
      <Box sx={{ pt: 4, pl: { xs: 1, md: 1.5 }, mr: { xs: -1, md: 0 } }}>
        <Grid container spacing={2}>
          {/* Left side: Sections */}
          <Grid item xs={12} md={2} sx={{ background: '#FAC898', height: { md: '120px', xs: 'auto' } }}>
            <Box sx={{ textAlign: 'left', fontSize: '1.1rem', fontWeight: 600 }}>Sections</Box>
            <Grid container spacing={1}>
              <Grid item xs={12} sx={{ mt: 2 }}>
                Quantitative Aptitude{' '}
              </Grid>
              <Grid item xs={12}>
                (Pages 1 to 40){' '}
              </Grid>
            </Grid>
          </Grid>
          {/* center content  */}
          <Grid
            item
            xs={12}
            md={7.5}
            sx={{
              textAlign: 'start',
              fontSize: '1.1rem',
              fontWeight: 600,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              mb: 10,
              ml: -2
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                textAlign: 'start',
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'flex',
                flexDirection: 'row',
                alignItems: { xs: 'flex-start', sm: 'flex-start' },
                justifyContent: 'space-between',
                mb: 2
              }}
            >
              {/* Page No. and Total Pages */}
              <Box sx={{ mb: { xs: 2, md: 0 }, textAlign: 'center', display: { sm: 'flex', xs: 'none' }, p: -2 }}>
                Page No. 1 <Typography>(Total Pages: 40)</Typography>
              </Box>

              <Grid container spacing={2}>
                {/* 1st for sm and above */}
                <Grid item xs={12} display={{ xs: 'none', sm: 'block' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      gap: 0,
                      width: '100%',
                      mb: 2
                    }}
                  >
                    <Box
                      sx={{ background: '#FFBE3D', padding: '0.2rem', color: 'white', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}
                    >
                      Mark for Review & Next
                    </Box>
                    <Box
                      sx={{ background: '#F56545', padding: '0.2rem', color: 'white', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}
                    >
                      Clear Response
                    </Box>
                    <Box
                      sx={{
                        background: '#0047ab',
                        padding: '0.2rem',
                        color: 'white',
                        fontSize: '0.8rem',
                        flex: 1,
                        textAlign: 'center',
                        cursor: 'pointer'
                      }}
                      onClick={handleSaveNext}
                    >
                      Save & Next
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* Question and Answer Options */}
            <Box sx={{ mt: 2, ml: { md: 2, xs: 0 } }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {/* Add margin to separate this section */}
              {/* Assuming 'questions' is an array and you want to display the first question */}
              {questions.length > 0 && (
                <Box sx={{ mt: 2, ml: { md: 2, xs: 0 } }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '1.2rem' }}>Question</Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>(Correct Answer 1 Mark, Wrong Answer -0.25 Marks)</Typography>
                  <Typography sx={{ mt: 2, fontSize: '1rem', fontWeight: 600 }}>
                    {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
                  </Typography>
                  <Typography sx={{ mt: 3, fontWeight: 600 }}>Answer Options:</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup name="answer-options" value={selectedOption} onChange={handleOptionChange}>
                      <FormControlLabel
                        value={questions[currentQuestionIndex].a}
                        control={<Radio />}
                        label={`A. ${questions[currentQuestionIndex].a}`}
                      />
                      <FormControlLabel
                        value={questions[currentQuestionIndex].b}
                        control={<Radio />}
                        label={`B. ${questions[currentQuestionIndex].b}`}
                      />
                      <FormControlLabel
                        value={questions[currentQuestionIndex].c}
                        control={<Radio />}
                        label={`C. ${questions[currentQuestionIndex].c}`}
                      />
                      <FormControlLabel
                        value={questions[currentQuestionIndex].d}
                        control={<Radio />}
                        label={`D. ${questions[currentQuestionIndex].d}`}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              )}
              </Box>

              <Box
                sx={{
                  display: { sm: 'flex', xs: 'none' },
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: 0,
                  width: '100%',
                  mt: 4,
                  mb: -4
                }}
              >
                <Box sx={{ background: '#FFBE3D', padding: '0.2rem', color: 'white', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>
                  Mark for Review & Next
                </Box>
                <Box sx={{ background: '#F56545', padding: '0.2rem', color: 'white', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>
                  Clear Response
                </Box>
                <Box
                  sx={{
                    background: '#0047ab',
                    padding: '0.2rem',
                    color: 'white',
                    fontSize: '0.8rem',
                    flex: 1,
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                  onClick={handleSaveNext}
                >
                  Save & Next
                </Box>
                <Box sx={{ background: 'green', padding: '0.2rem', color: 'white', fontSize: '0.8rem', flex: 1, textAlign: 'center' }}>
                  Submit
                </Box>
              </Box>
            </Box>
          </Grid>
          {/* for mobile devices  */}
          <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'none' }, mt: -15 }}>
            <Box sx={{ textAlign: 'center', fontSize: '1.1rem' }}>
              Page No. 1 <Typography>(Total Pages: 40)</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} display={{ xs: 'block', sm: 'none' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 0,
                mt: -6,
                mb: 2,
                ml: -2
              }}
            >
              <Box
                sx={{
                  background: '#FFBE3D',
                  padding: '0.2rem',
                  color: 'white',
                  fontSize: '0.8rem',
                  flex: 1,
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                Mark for Review & Next
              </Box>
              <Box
                sx={{
                  background: '#F56545',
                  padding: '0.2rem',
                  color: 'white',
                  fontSize: '0.8rem',
                  flex: 1,
                  textAlign: 'center',
                  width: '100%'
                }}
              >
                Clear Response
              </Box>
              <Box
                sx={{
                  background: '#0047ab',
                  padding: '0.2rem',
                  color: 'white',
                  fontSize: '0.8rem',
                  flex: 1,
                  textAlign: 'center',
                  width: '100%',
                  cursor: 'pointer'
                }}
                onClick={handleSaveNext}
              >
                Save & Next
              </Box>
            </Box>
          </Grid>{' '}
     
            <Box sx={{ display: { sm: 'none', xs: 'block' } }}>
               {questions.length > 0 && (
                <Box sx={{ mt: 2, ml: { md: 2, xs: 0 } }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '1.2rem' }}>Question</Typography>
                  <Typography sx={{ fontSize: '0.9rem' }}>(Correct Answer 1 Mark, Wrong Answer -0.25 Marks)</Typography>
                  <Typography sx={{ mt: 2, fontSize: '1rem', fontWeight: 600 }}>
                    {currentQuestionIndex + 1}. {questions[currentQuestionIndex].question}
                  </Typography>
                  <Typography sx={{ mt: 3, fontWeight: 600 }}>Answer Options:</Typography>
                  <FormControl component="fieldset">
                    <RadioGroup name="answer-options" value={selectedOption} onChange={handleOptionChange}>
                      <FormControlLabel
                        value={questions[currentQuestionIndex].a}
                        control={<Radio />}
                        label={`A. ${questions[currentQuestionIndex].a}`}
                      />
                      <FormControlLabel
                        value={questions[currentQuestionIndex].b}
                        control={<Radio />}
                        label={`B. ${questions[currentQuestionIndex].b}`}
                      />
                      <FormControlLabel
                        value={questions[currentQuestionIndex].c}
                        control={<Radio />}
                        label={`C. ${questions[currentQuestionIndex].c}`}
                      />
                      <FormControlLabel
                        value={questions[currentQuestionIndex].d}
                        control={<Radio />}
                        label={`D. ${questions[currentQuestionIndex].d}`}
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              )}
              </Box>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0,
              width: '100%',
              mt: 4,
              mb: -4
            }}
          >
            <Box
              sx={{
                background: '#FFBE3D',
                padding: '0.2rem',
                color: 'white',
                fontSize: '0.8rem',
                flex: 1,
                textAlign: 'center',
                width: '100%'
              }}
            >
              Mark for Review & Next
            </Box>
            <Box
              sx={{
                background: '#F56545',
                padding: '0.2rem',
                color: 'white',
                fontSize: '0.8rem',
                flex: 1,
                textAlign: 'center',
                width: '100%'
              }}
            >
              Clear Response
            </Box>
            <Box
              onClick={handleSaveNext}
              sx={{
                background: '#0047ab',
                padding: '0.2rem',
                color: 'white',
                fontSize: '0.8rem',
                flex: 1,
                textAlign: 'center',
                width: '100%',
                cursor: 'pointer'
              }}
            >
              Save & Next
            </Box>
            <Box
              sx={{
                background: 'green',
                padding: '0.2rem',
                color: 'white',
                fontSize: '0.8rem',
                flex: 1,
                textAlign: 'center',
                width: '100%'
              }}
            >
              Submit
            </Box>
          </Box>
          {/* Right side: Time Remaining */}
          <Grid
            item
            xs={12}
            md={2.5}
            sx={{
              textAlign: 'center',
              fontSize: '1.1rem',
              fontWeight: 600,
              background: '#FAC898',
              mt: { xs: 8, sm: 0 },
              ml: { md: 2, xs: 0 }
            }}
          >
            <Box> 00:29:45</Box>
            <Box sx={{ fontSize: '0.7rem' }}>(Time Remaining)</Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  color: '#fff',
                  background: 'green',
                  '&:hover': {
                    background: 'darkgreen'
                  },
                  width: '120%',
                  ml: -2
                }}
              >
                Submit
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{
                  color: '#fff',
                  background: '#0047ab',
                  '&:hover': {
                    background: '#0047ab'
                  },
                  width: '120%',
                  ml: -2
                }}
              >
                Change View
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{
                  color: '#fff',
                  background: '#F56545',
                  '&:hover': {
                    background: '#F56545'
                  },
                  width: '120%',
                  ml: -2
                }}
              >
                Exit
              </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{
                  color: '#fff',
                  background: 'black',
                  '&:hover': {
                    background: 'black'
                  },
                  width: '120%',
                  ml: -2,
                  fontSize: '1rem'
                }}
              >
                Pages
              </Button>
            </Box>
            <Box>
              <Box sx={{ fontSize: '0.95rem', mb: 4, mt: 2 }}>Number of Questions Attended</Box>
              <Grid container spacing={1} sx={{ mb: 2 }}>
                {numbers.map((num, index) => (
                  <Grid
                    item
                    xs={1.8}
                    key={index}
                    sx={{
                      textAlign: 'center',
                      fontSize: '0.8rem',
                      ml: '2px',
                      mt: '2px',
                      backgroundColor: answeredNumbers.includes(num) ? 'green' : 'transparent',
                      color: answeredNumbers.includes(num) ? 'white' : 'inherit',
                      height: '35px'
                    }}
                  >
                    {num}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainCard>
  );
};

export default StartPracticeTest;
