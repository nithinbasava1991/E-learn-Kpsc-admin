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
import { Box } from '@mui/system';
import { Button, Dialog, DialogActions, DialogTitle, TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import axios from 'axios';
import { addNews, deleteNews, fetchNews, getNewsById, updatedNews } from 'views/API/NewsApi';

const columns = [
  { id: 'newsId', label: 'ID', align: 'center' },
  { id: 'newsName', label: 'Name', align: 'center' },
  { id: 'description', label: 'Description', minWidth: 100,align:'center' },
  { id: 'file', label: 'File',align:'center' },
  { id: 'createdBy', label: 'Created By', align: 'center' },
  { id: 'updatedBy', label: 'Updated By', align: 'center' },
  { id: 'insertedDate', label: 'Inserted Date', align: 'center' },
  { id: 'updatedDate', label: 'Updated Date', align: 'center' },
  { id: 'actions', label: 'Actions', align: 'center' }
];

const News = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [news, setNews] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [newsId, setNewsId] = useState(null);
  const [photoName, setPhotoName] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);
  const [fileError, setFileError] = useState('');
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [userdata, setUserData] = useState({
    newsName: '',
    description: ''
  });

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
    Authorization: `Bearer ${user.accessToken}`
  };

  const ImageUrl = `${BaseUrl}/file/downloadFile/?filePath=`;

  const fetchData = async () => {
    try {
      const res = await fetchNews(headers);
      const fetchedData = res.data.content;

      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          newsId: p.newsId,
          newsName: p.newsName,
          description: p.description,
          file: p.photoPath ? <img src={ImageUrl + p.photoPath} alt={p.photoName} style={{ width: 150, height: 100 }} /> : 'NO IMAGE FOUND',
          insertedDate: moment(p.insertedDate).format('L'),
          updatedDate: moment(p.updatedDate).format('L'),
          createdBy: p.createdBy ? p.createdBy.userName : 'No User',
          updatedBy: p.updatedBy ? p.updatedBy.userName : 'No User'
        }));
        setNews(tableData);
      } else {
        setNews([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshTrigger]);

  const validateForm = () => {
    const newErrors = {};

    if (!userdata.newsName.trim()) {
      newErrors.newsName = 'Enter the News';
    }

    if (!userdata.description.trim()) {
      newErrors.description = 'Enter the Description';
    }

    if (!userdata.photoName || userdata.photoName.trim() === '') {
      newErrors.photoName = 'Select the file';
    }

    return newErrors;
  };

  const changeHandler = (e) => {
    setUserData({
      ...userdata,
      [e.target.name]: e.target.value
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: null
    }));
  };

  const handleEdit = async (newsId) => {
    setEditMode(true);
    setOpen(true);
    try {
      const res = await getNewsById(newsId, headers);
      const det = res.data;

      setNewsId(det.newsId);
      setUserData({
        newsName: det.newsName,
        description: det.description,
        photoName: det.photoName
      });
    } catch (error) {
      console.error('Error fetching news by ID:', error);
    }
  };

  const onFileUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setFileError('Please select a file');
      return;
    }

    const data = new FormData();
    data.append('file', selectedFile);

    try {
      const res = await axios.post(`${BaseUrl}/file/uploadFile`, data, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${user.accessToken}`
        }
      });
      setPhotoName(res.data.fileName);
      setUserData((prevData) => ({ ...prevData, photoName: res.data.fileName }));
      setFileError('');
      alert(res.data.message);
      console.log(res.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const onFileChange = (e) => {
    setPhotoName(e.target.files[0].name);
    setSelectedFile(e.target.files[0]);
  };

  const handleAddNews = () => {
    setEditMode(false);
    setUserData({
      newsName: '',
      description: '',
      photoName: ''
    });
    setOpen(true);
  };

  const postData = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    console.log(userdata);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      try {
        if (editMode) {
          const updatedData = {
            ...userdata,
            newsId,
            updatedBy: { userId: user.userId }
          };
          await updatedNews(updatedData, headers);
        } else {
          const newData = {
            ...userdata,
            createdBy: { userId: user.userId }
          };
          await addNews(newData, headers);
        }
        setUserData({ newsName: '', description: '', photoName: '' });
        inputRef.current.value = null;
        setRefreshTrigger((prev) => !prev);
        setOpen(false);
      } catch (error) {
        console.error('Error saving news:', error);
      }
      fetchData();
      setOpen(false);
    }
  };

  const handleDelete = async (newsId) => {
    try {
      await deleteNews(newsId, headers);
      setRefreshTrigger((prev) => !prev);
    } catch (error) {
      console.error('Error deleting news:', error);
    }
  };

  return (
    <MainCard
      title={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>News</span>
          <Button
            variant="contained"
            color="primary"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}
            onClick={handleAddNews}
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
              {news.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.newsId}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'actions' ? (
                        <>
                          <IconButton onClick={() => handleEdit(row.newsId)} color="primary">
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(row.newsId)} color="error">
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
          count={news.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: '16px' }}>{editMode ? 'Edit News' : 'Add News'}</DialogTitle>
        <Box component="form" onSubmit={postData} noValidate sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="News Name"
                name="newsName"
                value={userdata.newsName}
                onChange={changeHandler}
                error={!!errors.newsName}
                helperText={errors.newsName}
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
            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                id="photoName"
                label="File Name"
                name="photoName"
                autoComplete="photoName"
                value={userdata.photoName}
                disabled
                helperText={errors.photoName}
                error={!!errors.photoName}
                InputProps={{
                  endAdornment: (
                    <Button variant="contained" color="primary" onClick={onFileUpload}>
                      Upload
                    </Button>
                  )
                }}
              />
              <input type="file" onChange={onFileChange} ref={inputRef} style={{ marginTop: 20 }} />
            </Grid>
          </Grid>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {editMode ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </MainCard>
  );
};

export default News;
