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
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
  Container,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteForever, DetailsSharp, Edit } from '@mui/icons-material';
import { fetchCategories, fetchCategoryById, addCategory, updatedCategory, deleteCategory, fetchAllJobPosts } from 'views/API/kpscApi';
import ReactPlayer from 'react-player';

const columns = [
  { id: 'categoryId', label: 'ID', align: 'center' },
  { id: 'categoryName', label: 'Name', align: 'center' },
  { id: 'description', label: 'Description', minWidth: 100, align: 'center' },
  { id: 'jobPostName', label: 'Job Post', align: 'center' },
  { id: 'categoryMrp', label: 'Mrp', align: 'center' },
  { id: 'discount', label: 'Discount', align: 'center' },
  { id: 'sellingPrice', label: 'SellingPrice', align: 'center' },
  { id: 'gst', label: 'GST', align: 'center' },
  { id: 'gstAmount', label: 'GST Amount', align: 'center' },
  { id: 'trailPeriod', label: 'TrailPeriod', align: 'center' },
  { id: 'activePeriod', label: 'activePeriod', align: 'center' },
  { id: 'videoUrl', label: 'videoUrl', align: 'center' },
  { id: 'createdBy', label: 'Created By', align: 'center' },
  { id: 'updatedBy', label: 'Updated By', align: 'center' },
  { id: 'insertedDate', label: 'Inserted Date', align: 'center' },
  { id: 'updatedDate', label: 'Updated Date', align: 'center' },
  { id: 'actions', label: 'Actions', align: 'center' }
];

const Category = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userdata, setUserData] = useState({
    categoryName: '',
    description: '',
    jobPostId: '',
    categoryMrp: '',
    discount: '',
    sellingPrice: '',
    gst: '',
    gstAmount: '',
    trailPeriod: '',
    activePeriod: '',
    videoUrl: ''
  });
  const [errors, setErrors] = useState({});
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [jobPost, setJobPost] = useState([]);

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
      const res = await fetchCategories(headers);
      const fetchedData = res.data.content;

      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          categoryId: p.categoryId,
          categoryName: p.categoryName,
          description: p.description,
          jobPostName: p.jobPostDtoList ? p.jobPostDtoList.jobPostName : 'Not Found',
          categoryMrp: p.categoryMrp ? p.categoryMrp : 'Not Found',
          discount: p.discount ? p.discount : 'Not Found',
          sellingPrice: p.sellingPrice ? p.sellingPrice : 'Not Found',
          gst: p.gst ? p.gst : 'Not Found',
          gstAmount: p.gstAmount ? p.gstAmount : 'Not Found',
          trailPeriod: p.trailPeriod,
          activePeriod: p.activePeriod,
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
    fetchJobPosts();
  }, [refreshTrigger]);

  const validateForm = () => {
    const newErrors = {};

    if (!userdata.categoryName || userdata.categoryName.trim() === '') {
      newErrors.categoryName = 'Enter the category name';
    }

    if (!userdata.description || userdata.description.trim() === '') {
      newErrors.description = 'Enter the description';
    }
    if (!userdata.categoryMrp || userdata.categoryMrp.trim() === '') {
      newErrors.categoryMrp = 'Enter the category Mrp';
    }
    if (!userdata.discount || userdata.discount.trim() === '') {
      newErrors.discount = 'Enter the discount';
    }
    if (!userdata.sellingPrice || userdata.sellingPrice.trim() === '') {
      newErrors.sellingPrice = 'Enter the sellingPrice';
    }
    if (!userdata.gst || userdata.gst.trim() === '') {
      newErrors.gst = 'Enter the gst';
    }
    if (!userdata.gstAmount || userdata.gstAmount.trim() === '') {
      newErrors.gstAmount = 'Enter the gstAmount';
    }
    if (!userdata.trailPeriod || userdata.trailPeriod.trim() === '') {
      newErrors.trailPeriod = 'Enter the trailPeriod';
    }
    if (!userdata.activePeriod || userdata.activePeriod.trim() === '') {
      newErrors.activePeriod = 'Enter the activePeriod';
    }
    if (!userdata.videoUrl || userdata.videoUrl.trim() === '') {
      newErrors.videoUrl = 'Enter the videoUrl';
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
      categoryName: '',
      description: '',
      jobPostId: '',
      categoryMrp: '',
      discount: '',
      sellingPrice: '',
      gst: '',
      gstAmount: '',
      trailPeriod: '',
      activePeriod: '',
      videoUrl: ''
    });
    setOpen(true);
  };

  const handleEdit = async (categoryId) => {
    setEditMode(true);
    setOpen(true);
    try {
      const res = await fetchCategoryById(categoryId, headers);
      const det = res.data;

      console.log(det);

      setCategoryId(det.categoryId);
      setUserData({
        categoryName: det.categoryName,
        description: det.description,
        categoryMrp: det.categoryMrp,
        discount: det.discount,
        sellingPrice: det.sellingPrice,
        gst: det.gst,
        gstAmount: det.gstAmount,
        trailPeriod: det.trailPeriod,
        activePeriod: det.activePeriod,
        videoUrl: det.videoUrl,
        jobPostId: det.jobPostDtoList ? det.jobPostDtoList.jobPostId : ''
      });
    } catch (error) {
      console.error('Error fetching category details:', error);
    }
  };

  const fetchJobPosts = async () => {
    try {
      const res = await fetchAllJobPosts(headers);
      const fetchedData = res.data;
      console.log(fetchedData);
      if (fetchedData) {
        const sortedData = fetchedData.sort((a, b) => a.jobPostName.localeCompare(b.jobPostName));
        const jobPostData = sortedData.map((c) => ({
          jobPostId: c.jobPostId,
          jobPostName: c.jobPostName
        }));
        setJobPost(jobPostData);
      }
    } catch (error) {
      console.error('Error fetching jobPosts:', error);
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
      categoryName: userdata.categoryName,
      activePeriod: userdata.activePeriod,
      categoryMrp: userdata.categoryMrp,
      discount: userdata.discount,
      gst: userdata.gst,
      gstAmount: userdata.gstAmount,
      sellingPrice: userdata.sellingPrice,
      trailPeriod: userdata.trailPeriod,
      description: userdata.description,
      videoUrl: userdata.videoUrl,
      jobPostDtoList: { jobPostId: userdata.jobPostId },
      createdBy: { userId: user.userId }
    };
    console.log(dataToPost);
    try {
      const response = await addCategory(dataToPost, headers);
      console.log(response);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        FetchData();
      } else {
        alert(response.data.errorMessage);
      }
    } catch (error) {}
    FetchData();
    setOpen(false);
  };

  const updateData = async (e) => {
    e.preventDefault();

    const updatedDataPayload = {
      categoryId: categoryId,
      categoryName: userdata.categoryName,
      description: userdata.description,
      categoryMrp: userdata.categoryMrp,
      discount: userdata.discount,
      sellingPrice: userdata.sellingPrice,
      gst: userdata.gst,
      gstAmount: userdata.gstAmount,
      trailPeriod: userdata.trailPeriod,
      activePeriod: userdata.activePeriod,
      videoUrl: userdata.videoUrl,
      jobPostDtoList: { jobPostId: userdata.jobPostId },
      updatedBy: { userId: user.userId }
    };

    try {
      const response = await updatedCategory(updatedDataPayload, headers);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        setEditMode(false);
        setCategoryId(null);
      }
    } catch (error) {
      console.error('Error updating category:', error);
    }
    FetchData();
    setOpen(false);
  };

  const handleDelete = async (categoryId) => {
    try {
      await deleteCategory(categoryId, headers);
      FetchData();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <MainCard
      title={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Category</span>
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.categoryId}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'actions' ? (
                        <>
                          <IconButton
                            color="primary"
                            onClick={() => {
                              handleEdit(row.categoryId);
                            }}
                          >
                            <Edit />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => {
                              handleDelete(row.categoryId);
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
          count={category.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontSize: '16px' }}>{editMode ? 'Edit Category' : 'Add Category'}</DialogTitle>
        <Box component="form" onSubmit={editMode ? updateData : postData} noValidate sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category Name"
                name="categoryName"
                value={userdata.categoryName}
                onChange={changeHandler}
                error={!!errors.categoryName}
                helperText={errors.categoryName}
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
              <FormControl fullWidth error={!!errors.jobPostId} sx={{ mb: 2 }}>
                <InputLabel>Job Post</InputLabel>
                <Select name="jobPostId" value={userdata.jobPostId} onChange={changeHandler} label="jobPostName">
                  {jobPost.map((jobs) => (
                    <MenuItem key={jobs.jobPostId} value={jobs.jobPostId}>
                      {jobs.jobPostName}
                    </MenuItem>
                  ))}
                </Select>
                {errors.jobPostId && (
                  <Box component="span" sx={{ color: 'error.main', fontSize: '0.75rem', mt: 1 }}>
                    {errors.jobPostId}
                  </Box>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="MRP"
                name="categoryMrp"
                value={userdata.categoryMrp}
                onChange={changeHandler}
                error={!!errors.categoryMrp}
                helperText={errors.categoryMrp}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Discount"
                name="discount"
                value={userdata.discount}
                onChange={changeHandler}
                error={!!errors.discount}
                helperText={errors.discount}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Selling Price"
                name="sellingPrice"
                value={userdata.sellingPrice}
                onChange={changeHandler}
                error={!!errors.sellingPrice}
                helperText={errors.sellingPrice}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="GST"
                name="gst"
                value={userdata.gst}
                onChange={changeHandler}
                error={!!errors.gst}
                helperText={errors.gst}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="GST Amount"
                name="gstAmount"
                value={userdata.gstAmount}
                onChange={changeHandler}
                error={!!errors.gstAmount}
                helperText={errors.gstAmount}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Trail Period"
                name="trailPeriod"
                value={userdata.trailPeriod}
                onChange={changeHandler}
                error={!!errors.trailPeriod}
                helperText={errors.trailPeriod}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Active Period"
                name="activePeriod"
                value={userdata.activePeriod}
                onChange={changeHandler}
                error={!!errors.activePeriod}
                helperText={errors.activePeriod}
              />
            </Grid>
            <Grid item xs={12} md={6}>
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

export default Category;
