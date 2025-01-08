import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Container,
  IconButton,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  DialogContent
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteForever, Edit } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';

import {  deleteSubject, fetchSubjectById, fetchSubjects, updatedSubject } from 'views/API/kpscApi';
import { fetchAllJobPosts } from 'views/API/kpscApi'; // Import the fetchAllJobPosts function
import { postSubject } from 'views/API/SubjectApi';

const columns = [
  { id: 'subjectId', label: 'ID', align: 'center' },
  { id: 'subjectName', label: 'Name', align: 'center' },
  { id: 'description', label: 'Description', minWidth: 100, align: 'center' },
  { id: 'jobPostName', label: 'JobPost', minWidth: 200, align: 'center' },
  { id: 'createdBy', label: 'Created By', align: 'center' },
  { id: 'updatedBy', label: 'Updated By', align: 'center' },
  { id: 'insertedDate', label: 'Created Date', align: 'center' },
  { id: 'updatedDate', label: 'Modified Date', align: 'center' },
  { id: 'actions', label: 'Actions', align: 'center' }
];

const Subject = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [courses, setCourses] = useState([]);
  const [jobPosts, setJobPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userdata, setUserData] = useState({
    subjectName: '',
    description: '',
    jobPostId: '' // Removed videoUrl
  });
  const [errors, setErrors] = useState({});
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [subjectId, setSubjectId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const headers = {
    'Content-type': 'application/json',
    Authorization: 'Bearer ' + user.accessToken
  };


 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
};




  const FetchData = async () => {
    try {
      const res = await fetchSubjects(headers);
      const fetchedData = res.data.content;
      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          subjectId: p.subjectId,
          subjectName: p.subjectName,
          description: p.description,
          jobPostId: p.jobPostDtoList ? p.jobPostDtoList.jobPostId : null,
          insertedDate: moment(p.insertedDate).format('L'),
          updatedDate: moment(p.updatedDate).format('L'),
          createdBy: p.createdBy ? p.createdBy.userName : 'No User',
          updatedBy: p.updatedBy ? p.updatedBy.userName : 'No User'
        }));
        setCourses(tableData);
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchJobPosts = async () => {
    try {
      const res = await fetchAllJobPosts(headers);
      if (res.data) {
        setJobPosts(res.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching job posts:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    FetchData();
    fetchJobPosts();
  }, [refreshTrigger]);

  const validateForm = () => {
    const newErrors = {};
    if (!userdata.subjectName || userdata.subjectName.trim() === '') {
      newErrors.subjectName = 'Enter the subject name';
    }
    if (!userdata.description || userdata.description.trim() === '') {
      newErrors.description = 'Enter the description';
    }
    if (!userdata.jobPostId) {
      newErrors.jobPostId = 'Select a job post';
    }
    return newErrors;
  };

  const changeHandler = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: null
    });
  };

  const handleAddBanner = () => {
    setEditMode(false);
    setUserData({
      subjectName: '',
      description: '',
      jobPostId: ''
    });
    setOpen(true);
  };

  const postData = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const dataToPost = {
      subjectName: userdata.subjectName,
      description: userdata.description,
      jobPostDtoList: { jobPostId: userdata.jobPostId },
      createdBy: { userId: user.userId }
    };

    try {
      const response = await postSubject(dataToPost, headers);
      if (response.data.responseCode === 200) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        FetchData();
      } else {
        alert(response.data.errorMessage || 'Failed to add subject.');
      }
    } catch (error) {
      console.error('Error posting data:', error);
    } finally {
      FetchData();
      setOpen(false);
    }
  };

  const handleEdit = async (subjectId) => {
    setEditMode(true);
    setOpen(true);
    try {
        const res = await fetchSubjectById(subjectId, headers);
        const det = res.data;

        setSubjectId(det.subjectId);

        setUserData({
            subjectName: det.subjectName,
            description: det.description,
            jobPostId: det.jobPostDtoList ? det.jobPostDtoList.jobPostId : ''
        });
    } catch (error) {
        console.error('Error fetching subject details:', error);
    }
};


const updateData = async (e) => {
  e.preventDefault();

  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  const dataToPost = {
    subjectId,
    subjectName: userdata.subjectName,
    description: userdata.description,
    jobPostDtoList: { jobPostId: userdata.jobPostId },
    updatedBy: { userId: user.userId }
  };

  try {
    const response = await updatedSubject(dataToPost, headers);
    if (response.data.responseCode === 201) {
      setRefreshTrigger(!refreshTrigger);
      setOpen(false);
      FetchData();
    } else {
      alert(response.data.errorMessage || 'Failed to update subject.');
    }
  } catch (error) {
    console.error('Error updating data:', error);
  } finally {
    FetchData();
    setOpen(false);
  }
};

// Handle delete logic
const deleteItem = async (subjectId) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this item?');
  if (confirmDelete) {
    try {
      const response = await deleteSubject(subjectId, headers);
      if (response.data.responseCode === 200) {
        setRefreshTrigger(!refreshTrigger);
      } else {
        alert(response.data.errorMessage || 'Failed to delete subject.');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
};

  return (
    <MainCard title="Subjects">
      <Container>
        <Box sx={{ py: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddBanner} startIcon={<AddIcon />}>
            Add Subject
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => {
                const jobPost = jobPosts.find((jobPost) => jobPost.jobPostId === course.jobPostId);
                return (
                  <TableRow key={course.subjectId}>
                    <TableCell>{course.subjectId}</TableCell>
                    <TableCell>{course.subjectName}</TableCell>
                    <TableCell>{course.description}</TableCell>
                    <TableCell>{jobPost ? jobPost.jobPostName : 'No Job Post'}</TableCell>
                    <TableCell>{course.createdBy}</TableCell>
                    <TableCell>{course.updatedBy}</TableCell>
                    <TableCell>{course.insertedDate}</TableCell>
                    <TableCell>{course.updatedDate}</TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => handleEdit(course.subjectId)}>
                        <Edit />
                      </IconButton>
                      <IconButton color="secondary" onClick={() => deleteItem(course.subjectId)}>
                        <DeleteForever />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={courses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editMode ? 'Edit Subject' : 'Add Subject'}</DialogTitle>
        <DialogContent>
          <form onSubmit={editMode ? updateData : postData}>
            <TextField
              label="Subject Name"
              name="subjectName"
              value={userdata.subjectName}
              onChange={changeHandler}
              fullWidth
              error={!!errors.subjectName}
              helperText={errors.subjectName}
              margin="normal"
            />

            <TextField
              label="Description"
              name="description"
              value={userdata.description}
              onChange={changeHandler}
              fullWidth
              error={!!errors.description}
              helperText={errors.description}
              margin="normal"
            />

            <FormControl fullWidth margin="normal" error={!!errors.jobPostId}>
              <InputLabel>Job Post</InputLabel>
              <Select value={userdata.jobPostId} onChange={changeHandler} name="jobPostId">
                {jobPosts.map((jobPost) => (
                  <MenuItem key={jobPost.jobPostId} value={jobPost.jobPostId}>
                    {jobPost.jobPostName}
                  </MenuItem>
                ))}
              </Select>
              {errors.jobPostId && <p>{errors.jobPostId}</p>}
            </FormControl>

            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {editMode ? 'Update' : 'Add'}
              </Button>
              <Button onClick={() => setOpen(false)} color="secondary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </MainCard>
  );
};

export default Subject;

