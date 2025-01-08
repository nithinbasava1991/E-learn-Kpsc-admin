import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
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
  FormControl
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteForever, Edit } from '@mui/icons-material';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useTheme } from '@mui/material/styles';

import {
  addsubCategory,
  deletesubCategory,
  fetchsubCategoryById,
  fetchAllCategories,
  fetchsubCategories,
  updatedsubCategory
} from 'views/API/kpscApi';

const columns = [
  { id: 'subCategoryId', label: 'ID', align: 'center' },
  { id: 'subCategoryName', label: 'Name', minWidth: 150, align: 'center' },
  { id: 'description', label: 'Description', minWidth: 150, align: 'center' },
  { id: 'categoryName', label: 'Category', align: 'center' },
  { id: 'videoUrl', label: 'Video URL', minWidth: 200, align: 'center' },
  { id: 'createdBy', label: 'Created By', align: 'center' },
  { id: 'updatedBy', label: 'Updated By', align: 'center' },
  { id: 'insertedDate', label: 'Inserted Date', align: 'center' },
  { id: 'updatedDate', label: 'Updated Date', align: 'center' },
  { id: 'actions', label: 'Actions', align: 'center' }
];

const SubCategory = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userdata, setUserData] = useState({
    subCategoryName: '',
    description: '',
    videoUrl: '',
    categoryId: ''
  });
  const [errors, setErrors] = useState({});
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [subCategoryId, setsubCategoryId] = useState(null);

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
      const res = await fetchsubCategories(headers);
      const fetchedData = res.data.content;
      console.log(fetchedData);

      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          subCategoryId: p.subCategoryId,
          subCategoryName: p.subCategoryName,
          description: p.description,
          categoryName: p.categoryDtoList ? p.categoryDtoList.categoryName : 'No categoryName',
          videoUrl: p.videoUrl,
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

  const fetchCategories = async () => {
    try {
      const res = await fetchAllCategories(headers);
      const fetchedData = res.data;
      console.log(res);
      if (fetchedData) {
        const sortedData = fetchedData.sort((a, b) => a.categoryName.localeCompare(b.categoryName));
        const categoryData = sortedData.map((c) => ({
          categoryId: c.categoryId,
          categoryName: c.categoryName
        }));
        setCategories(categoryData);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    FetchData();
    fetchCategories();
  }, [refreshTrigger]);

  const validateForm = () => {
    const newErrors = {};

    if (!userdata.subCategoryName || userdata.subCategoryName.trim() === '') {
      newErrors.subCategoryName = 'Enter the sub category name';
    }

    if (!userdata.description || userdata.description.trim() === '') {
      newErrors.description = 'Enter the description';
    }
    if (!userdata.videoUrl || userdata.videoUrl.trim() === '') {
      newErrors.videoUrl = 'Enter the videoUrl';
    }

    if (!userdata.categoryId) {
      newErrors.categoryId = 'Select a category';
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
      subCategoryName: '',
      description: '',
      videoUrl: '',
      categoryId: ''
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
      subCategoryName: userdata.subCategoryName,
      description: userdata.description,
      videoUrl: userdata.videoUrl,
      categoryDtoList: { categoryId: userdata.categoryId },
      createdBy: { userId: user.userId }
    };

    console.log(dataToPost);

    try {
      const response = await addsubCategory(dataToPost, headers);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        FetchData();
      } else {
        alert(response.data.errorMessage || 'Failed to add sub category.');
      }
    } catch (error) {}
    FetchData();
    setOpen(false);
  };

  const handleEdit = async (subCategoryId) => {
    setEditMode(true);
    setOpen(true);
    try {
      const res = await fetchsubCategoryById(subCategoryId, headers);
      const det = res.data;
      console.log(det)

      setsubCategoryId(det.subCategoryId);

      setUserData({
        subCategoryName: det.subCategoryName,
        description: det.description,
        videoUrl: det.videoUrl,
        categoryId: det.categoryDtoList ? det.categoryDtoList.categoryId : ''
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
    const updatedDataPayload = {
      subCategoryId: subCategoryId,
      subCategoryName: userdata.subCategoryName,
      description: userdata.description,
      videoUrl: userdata.videoUrl,
      categoryDtoList: { categoryId: userdata.categoryId },
      updatedBy: { userId: user.userId }
    };
    try {
      const response = await updatedsubCategory(updatedDataPayload, headers);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        setEditMode(false);
        setsubCategoryId(null);
        setUserData({
          subCategoryName: '',
          description: '',
          videoUrl: '',
          categoryId: ''
        });
      } else {
        alert(response.data.errorMessage);
      }
    } catch (error) {
      console.error(error);
    } finally {
      FetchData();
      setOpen(false);
    }
  };

  const handleDelete = async (subCategoryId) => {
    try {
      await deletesubCategory(subCategoryId, headers);
      FetchData();
    } catch (error) {
      console.error('Error deleting subject:', error);
    }
  };

  return (
    <MainCard
      title={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Sub Category</span>
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
              {courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.subCategoryId}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'actions' ? (
                        <>
                          <IconButton
                            color="primary"
                            onClick={() => {
                              handleEdit(row.subCategoryId);
                            }}
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => {
                              handleDelete(row.subCategoryId);
                            }}
                          >
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
          count={courses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: '16px' }}>{editMode ? 'Edit Sub Category' : 'Add Sub Category'}</DialogTitle>
        <Box component="form" onSubmit={editMode ? updateData : postData} noValidate sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Subject Name"
                name="subCategoryName"
                value={userdata.subCategoryName}
                onChange={changeHandler}
                error={!!errors.subCategoryName}
                helperText={errors.subCategoryName}
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
              <FormControl fullWidth error={!!errors.categoryId} sx={{ mb: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select name="categoryId" value={userdata.categoryId} onChange={changeHandler} label="Category">
                  {categories.map((category) => (
                    <MenuItem key={category.categoryId} value={category.categoryId}>
                      {category.categoryName}
                    </MenuItem>
                  ))}
                </Select>
                {errors.categoryId && (
                  <Box component="span" sx={{ color: 'error.main', fontSize: '0.75rem', mt: 1 }}>
                    {errors.categoryId}
                  </Box>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="VideoUrl "
                name="videoUrl"
                value={userdata.videoUrl}
                onChange={changeHandler}
                error={!!errors.videoUrl}
                helperText={errors.videoUrl}
              />
            </Grid>
          </Grid>
          <DialogActions>

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

export default SubCategory;
