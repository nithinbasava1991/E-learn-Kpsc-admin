import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MainCard from 'ui-component/cards/MainCard';
import axios from 'axios';


const Subjects = () => {
  const [details, setDetails] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [visibleDescription, setVisibleDescription] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [modules, setModules] = useState([]); // State for storing fetched modules
  const [selectedModule, setSelectedModule] = useState(null); // New state for the selected module
  const [topics, setTopics] = useState([]); // State for storing fetched topics

  const location = useLocation();
  const { jobPostId, jobPostName, details: fetchedDetails } = location.state || {};

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };

  useEffect(() => {
    if (Array.isArray(fetchedDetails)) {
      setDetails(fetchedDetails); // Use pre-fetched details if available
    } else if (jobPostId) {
      fetchData();
    }
  }, [jobPostId, fetchedDetails]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://virtullearning.cloudjiffy.net/elearnkpsuser/subject/v1/getSubjectsByJobPostId/{jobPostId}?jobPostId=${jobPostId}`,
        { headers }
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setDetails(data);
      } else {
        console.error('Expected an array, got:', data);
        setDetails([]);
      }
    } catch (error) {
      console.error('Error fetching subjects:', error);
      setDetails([]);
    }
  };

  const fetchModules = async (subjectId) => {
    try {
      const res = await fetch(
        `https://virtullearning.cloudjiffy.net/elearnkpsuser/module/v1/getModulesBySubjectId/{subjectId}?subjectId=${subjectId}`,
        { headers }
      );
      const data = await res.json();

      if (Array.isArray(data)) {
        const updatedModules = data.map((module) => ({
          ...module,
          moduleName: module.moduleName || 'No name available.',
          description: module.description || 'No description available.' // Fallback for null descriptions
        }));
        setModules(updatedModules); // Set the modules state with the updated data
        console.log('Modules state updated:', updatedModules);
      } else {
        console.error('Expected an array, but got:', data);
        setModules([]);
      }
    } catch (error) {
      console.error('Error fetching modules:', error);
      setModules([]);
    }
  };

  const fetchTopics = async (moduleId) => {
    try {
      const response = await axios.get(
        `https://virtullearning.cloudjiffy.net/elearnkpsuser/topic/v1/getAllTopicByPagination/0/10/${moduleId}?moduleId=${moduleId}&pageNumber=0&pageSize=10`,
        { headers }
      );
      if (response.data && Array.isArray(response.data.content)) {
        setTopics(response.data.content); // Set the topics state with the fetched data
      } else {
        console.error('Expected an array for topics, but got:', response.data);
        setTopics([]);
      }
    } catch (error) {
      console.error('Error fetching topics:', error);
      setTopics([]);
    }
  };

  const handleViewAll = () => setShowAll(true);

  const toggleDescription = (event, subjectId) => {
    event.stopPropagation();
    setVisibleDescription(visibleDescription === subjectId ? null : subjectId);
  };

  const handleSubjectDetails = (subject) => {
    setSelectedSubject(subject); // Set the selected subject
    console.log('Fetching modules for subjectId:', subject.subjectId); // Log the subjectId
    fetchModules(subject.subjectId); // Fetch modules for the selected subject
  };

  const handleModuleDetails = (module) => {
    setSelectedModule(module); // Set the selected module
    console.log('Fetching topics for moduleId:', module.moduleId); // Log the moduleId
    fetchTopics(module.moduleId); // Fetch topics for the selected module
  };

  const handleCloseDetails = (type) => {
    if (type === 'subject') {
      setSelectedSubject(null);  // Close subject details
      setModules([]);  // Clear modules when subject details are closed
      setSelectedModule(null);  // Clear selected module
      setTopics([]);  // Clear topics when subject details are closed
    } else if (type === 'module') {
      setSelectedModule(null);  // Close module details
      setTopics([]);  // Clear topics when module details are closed
    }
  };
  

  return (
    <>
      <MainCard>
        <Typography variant="h3" gutterBottom>
          Subject Details for {jobPostName || 'Selected Job Post'}
        </Typography>
      </MainCard>
      <Grid container spacing={2}>
        {(showAll ? details : details.slice(0, 4)).map((detail, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={detail.subjectId || index}>
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
                }
              }}
              onClick={() => handleSubjectDetails(detail)}
            >
              <CardContent>
                {detail.videoUrl && (
                  <iframe
                    title="YouTube Video"
                    src={`https://www.youtube.com/embed/${detail.videoUrl}`}
                    frameBorder="0"
                    allowFullScreen
                    style={{ width: '100%', height: '190px', marginBottom: '1rem' }}
                  ></iframe>
                )}
                <Typography variant="h4" sx={{ mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  {detail.subjectName}
                  <Button
                    sx={{
                      borderRadius: '50%',
                      backgroundColor: 'transparent',
                      minWidth: 'unset',
                      padding: '8px',
                      '&:hover': {
                        backgroundColor: 'action.hover'
                      }
                    }}
                    onClick={(e) => toggleDescription(e, detail.subjectId)}
                  >
                    <InfoOutlinedIcon sx={{ fontSize: 24 }} />
                  </Button>
                </Typography>

                {visibleDescription === detail.subjectId && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {detail.description ? detail.description : 'No description available for this subject.'}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {details.length > 4 && !showAll && (
        <Box sx={{ textAlign: { sm: 'right', xs: 'center' }, mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleViewAll}>
            View All
          </Button>
        </Box>
      )}
      {selectedSubject && (
        <Card sx={{ mt: 4, padding: 2 }}>
          <CardContent>
            <Typography variant="h5">{selectedSubject.subjectName}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {selectedSubject.description ? selectedSubject.description : 'No description available for this subject.'}
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Modules:
            </Typography>
            {modules.length > 0 ? (
              <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {modules.map((module) => (
                  <li key={module.moduleId}>
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
                        }
                      }}
                      onClick={() => handleModuleDetails(module)} // Handle module click
                    >
                      <CardContent>
                        <Typography variant="h6">{module.moduleName}</Typography>
                        <Typography variant="body2">{module.description || 'No description available.'}</Typography>
                      </CardContent>
                    </Card>
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No modules available for this subject.
              </Typography>
            )}
            <Button variant="outlined" color="secondary" onClick={() => handleCloseDetails('subject')}>
              Close
            </Button>
          </CardContent>
        </Card>
      )}

      {selectedModule && (
        <Card sx={{ mt: 4, padding: 2 }}>
          <CardContent>
            <Typography variant="h5">{selectedModule.moduleName}</Typography>
            
            <Typography variant="h6" sx={{ mb: 2 }}>
              Topics:
            </Typography>
            {topics.length > 0 ? (
              <ul >
                {topics.map((topic) => (
                  <li key={topic.topicId}>
                    <Typography variant="h6">{topic.topicName}</Typography>
                    <Typography variant="body2">{topic.description || 'No description available.'}</Typography>
                    {topic.videoUrl && (
                      <iframe
                        title="Topic Video"
                        src={`https://www.youtube.com/embed/${topic.videoUrl}`}
                        frameBorder="0"
                        allowFullScreen
                        style={{ width: '100%', height: '190px', marginBottom: '1rem' }}
                      ></iframe>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <Typography variant="body2" color="textSecondary">
                No topics available for this module.
              </Typography>
            )}
            <Button variant="outlined" color="secondary" onClick={() => handleCloseDetails('module')}>
              Close
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Subjects;
