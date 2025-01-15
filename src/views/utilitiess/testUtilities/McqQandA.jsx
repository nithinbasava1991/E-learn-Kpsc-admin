import React, { useEffect, useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import {
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

import PrintIcon from '@mui/icons-material/Print';
import {  useNavigate } from 'react-router-dom';
import { fetchQuestions } from 'views/API/McqApi';

const McqQuestionandanswers = () => {
  const [questions, setQuestions] = useState([]);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };

  const printRef = useRef();
  const navigate = useNavigate();

  // const handleDownload = () => {
  //   navigate('/papers/mcq/set-paper/details/download');
  // };

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
          d: p.d,
          ansOption: p.ansOption,
          answer: p.answer
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

  if (!questions) {
    return <Typography>Loading...</Typography>;
  }

  const cellStyle = { border: '1px solid gray', textAlign: 'center', padding: 1, width: '100px', minHeight: '60px' };

  return (
    <MainCard ref={printRef}>
      <style>
        {`
          @media print {
            .no-print {
              display: none !important;
            }
          }
        `}
      </style>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2"> MCQ Questions</Typography>
        </Grid>

        <Grid item xs={12} container justifyContent="flex-end">
          {/* <Grid item className="no-print" 
          onClick={handleDownload}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                background: '#00563B',
                padding: 1,
                textAlign: 'center',
                borderRadius: '5px',
                width: { xs: '100%', sm: '100%' },
                mb: { xs: 1, sm: 0 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              Save
              <TurnedInNotIcon sx={{ ml: 1 }} />
            </Typography>
          </Grid> */}
          <Grid item className="no-print" sx={{ ml: { xs: 2 } }}>
            <ReactToPrint
              trigger={() => (
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    background: '#00563B',
                    padding: 1,
                    textAlign: 'center',
                    borderRadius: '5px',
                    width: { xs: '100%', sm: '100%' },
                    mb: { xs: 1, sm: 0 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  Print
                  <PrintIcon sx={{ ml: 1,fontSize:'1.1rem' }} />
                </Typography>
              )}
              content={() => printRef.current}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <TableContainer component={Paper} sx={{ border: '1px solid gray', borderRadius: '5px', mt: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: '1px solid gray', textAlign: 'center', padding: 1, width: '100px' }}>
                    <Typography sx={{ color: '#00563B', fontWeight: 600 }} variant="h3">
                      Q No.
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={6} sx={{ border: '1px solid gray', textAlign: 'center', padding: 1 }}>
                    <Typography variant="h3" sx={{ fontWeight: 600, color: '#00563B' }}>
                    Questions
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {questions.map((item, index) => (
                  <React.Fragment key={index}>
                    <TableRow>
                      <TableCell sx={cellStyle}>
                        <Typography sx={{ color: '#00563B' }} variant="h4">
                          {index + 1}
                        </Typography>
                      </TableCell>
                      <TableCell colSpan={6} sx={{ border: '1px solid gray', textAlign: 'start', padding: '20px 6px' }}>
                        <Typography variant="h4" sx={{ color: '#800080', fontWeight: 600 }}>
                          {item.question}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    {['a', 'b', 'c', 'd'].map((option, optIndex) => (
                      <TableRow key={optIndex}>
                        <TableCell sx={cellStyle}>
                          <Typography sx={{ color: '#00563B' }} variant="h4">
                            {option.toUpperCase()}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={6} sx={{ border: '1px solid gray', textAlign: 'start', padding: 1 }}>
                          <Typography variant="h4" sx={{ color: '#800080', fontWeight: 600 }}>
                            {item[option]}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}

                    <TableRow>
                      <TableCell sx={cellStyle}>
                        <Typography sx={{ color: '#00563B' }} variant="h5">
                          Correct Option
                        </Typography>
                      </TableCell>
                      <TableCell colSpan={6} sx={{ border: '1px solid gray', textAlign: 'start', padding: 1 }}>
                        <Typography variant="h4" sx={{ color: '#00563B', fontWeight: 600 }}>
                          {item.ansOption}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={cellStyle}>
                        <Typography sx={{ color: '#00563B' }} variant="h5">
                          Answer
                        </Typography>
                      </TableCell>
                      <TableCell colSpan={6} sx={{ border: '1px solid gray', textAlign: 'start', padding: 1 }}>
                        <Typography variant="h4" sx={{ color: '#00563B', fontWeight: 600 }}>
                          {item.answer}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default McqQuestionandanswers;
