import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { BaseUrl } from 'BaseUrl';
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Box, Button, Dialog, DialogActions, DialogTitle, TextField, Container, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteForever, DetailsSharp, Edit } from '@mui/icons-material';
import { fetchJobPost, fetchJobPostById, updatedJobPost, deleteJobPost, addJobPost } from 'views/API/kpscApi';
import ReactPlayer from 'react-player';

const columns = [
  { id: 'jobPostId', label: 'ID', align: 'center' },
  { id: 'jobPostName', label: 'Name', align: 'center' },
  { id: 'description', label: 'Description', minWidth: 100, align: 'center' },
  // { id: 'videoUrl', label: 'videoUrl', align: 'center' },
  { id: 'createdBy', label: 'Created By', align: 'center' },
  { id: 'updatedBy', label: 'Updated By', align: 'center' },
  { id: 'insertedDate', label: 'Created Date', align: 'center' },
  { id: 'updatedDate', label: 'Modified Date', align: 'center' },
  { id: 'actions', label: 'Actions', align: 'center' }
];

const JobPost = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userdata, setUserData] = useState({
    jobPostName: '',
    description: '',
    videoUrl: ''
  });
  const [errors, setErrors] = useState({});
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [jobPostId, setjobPostId] = useState(null);

  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const handleVideoClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl); // Set the current video URL
  };

  const videoRef = useRef(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };

  const FetchData = async () => {
    try {
      const res = await fetchJobPost(headers);
      const fetchedData = res.data.content;
      console.log(fetchedData);

      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          jobPostId: p.jobPostId,
          jobPostName: p.jobPostName,
          description: p.description,
          videoUrl: p.videoUrl ? p.videoUrl : 'Not Found',
          insertedDate: moment(p.insertedDate).format('L'),
          updatedDate: moment(p.updatedDate).format('L'),
          createdBy: p.createdBy ? p.createdBy.userName : 'No User',
          updatedBy: p.updatedBy ? p.updatedBy.userName : 'No User'
        }));
        setCategory(tableData);
      } else {
        setCategory([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    FetchData();
  }, [refreshTrigger]);

  const validateForm = () => {
    const newErrors = {};

    if (!userdata.jobPostName || userdata.jobPostName.trim() === '') {
      newErrors.jobPostName = 'Enter the category name';
    }

    if (!userdata.description || userdata.description.trim() === '') {
      newErrors.description = 'Enter the description';
    }

   

    return newErrors;
  };

  const changeHandler = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value,
      createdBy: { userId: user.userId }
    });

    setErrors({
      ...errors,
      [e.target.name]: null
    });
  };

  const handleAddBanner = () => {
    setEditMode(false);
    setUserData({
      jobPostName: '',
      description: '',
      videoUrl: ''
    });
    setOpen(true);
  };

  const handleEdit = async (jobPostId) => {
    setEditMode(true);
    setOpen(true);
    try {
      const res = await fetchJobPostById(jobPostId, headers);
      const det = res.data;

      setjobPostId(det.jobPostId);
      setUserData({
        jobPostName: det.jobPostName,
        description: det.description,

        videoUrl: det.videoUrl
      });
    } catch (error) {
      console.error('Error fetching category details:', error);
    }
  };

  const postData = async (e) => {
    e.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const dataToPost = {
      jobPostName: userdata.jobPostName,
      description: userdata.description,
      createdBy: { userId: user.userId },
      ...(userdata.videoUrl && { videoUrl: userdata.videoUrl }) // Include videoUrl only if it has a value
    };
  
    try {
      const response = await addJobPost(dataToPost, headers);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  
    FetchData();
    setOpen(false);
  };
  

  const updateData = async (e) => {
    e.preventDefault();
  
    const updatedDataPayload = {
      jobPostId: jobPostId,
      jobPostName: userdata.jobPostName,
      description: userdata.description,
      updatedBy: { userId: user.userId },
      ...(userdata.videoUrl && { videoUrl: userdata.videoUrl }) // Include videoUrl only if it has a value
    };
  
    try {
      const response = await updatedJobPost(updatedDataPayload, headers);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        setEditMode(false);
        setjobPostId(null);
      }
    } catch (error) {
      console.error(error);
    }
  
    FetchData();
    setOpen(false);
  };
  

  const handleDelete = async (jobPostId) => {
    try {
      await deleteJobPost(jobPostId, headers);
      FetchData();
    } catch (error) {
      console.error('Error deleting job post:', error);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setCurrentVideoUrl(''); // Close the video
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <MainCard
      title={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Job Post</span>
          <Button
            variant="contained"
            color="primary"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}
            onClick={handleAddBanner}
          >
            Add
            <AddIcon sx={{ color: '#fff' }} />
          </Button>
        </Box>
      }
    >
      <Grid container spacing={gridSpacing}></Grid>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontWeight: 600, fontSize: 15 }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {category.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.jobPostId}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'videoUrl' ? (
                        <Button onClick={() => handleVideoClick(row.videoUrl)}>{row.videoUrl}</Button>
                      ) : column.id === 'actions' ? (
                        <>
                          <IconButton onClick={() => handleEdit(row.jobPostId)} color="primary">
                            <Edit />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDelete(row.jobPostId)}>
                            <DeleteForever />
                          </IconButton>
                        </>
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={category.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {currentVideoUrl && (
        <Box
          ref={videoRef} // Assign the ref here
          sx={{
            position: 'absolute',
            bottom: { sm: 0, xs: 100 },
            left: { sm: 100, xs: 50 },
            right: { sm: 100, xs: 50 },
            height: { sm: '450px', xs: '300px' },
            zIndex: 1000
          }}
        >
          <ReactPlayer
            url={currentVideoUrl}
            playing={true}
            controls={true}
            width="100%"
            height="100%"
            onEnded={() => setCurrentVideoUrl('')} // Clear URL when video ends
          />
        </Box>
      )}

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: '16px' }}>{editMode ? 'Edit Job Post' : 'Add Job Post'}</DialogTitle>
        <Box component="form" onSubmit={editMode ? updateData : postData} noValidate sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Job Post Name"
                name="jobPostName"
                value={userdata.jobPostName}
                onChange={changeHandler}
                error={!!errors.jobPostName}
                helperText={errors.jobPostName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={userdata.description}
                onChange={changeHandler}
                error={!!errors.description}
                helperText={errors.description}
                multiline
                rows={3}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <TextField
                fullWidth
                label="Video URL (Optional)"
                name="videoUrl"
                value={userdata.videoUrl}
                onChange={changeHandler}
                error={!!errors.videoUrl}
                helperText={errors.videoUrl || 'Leave blank if not applicable'}
              />
            </Grid> */}
          </Grid>
          <DialogActions sx={{ mt: 2 }}>

          <Button type="submit" variant="contained" color="primary">
              {editMode ? 'Update' : 'Add'}
            </Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            
          </DialogActions>
        </Box>
      </Dialog>
    </MainCard>
  );
};

export default JobPost;
