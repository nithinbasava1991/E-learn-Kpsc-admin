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
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Box, Button, Dialog, DialogActions, DialogTitle, TextField, Container, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { DeleteForever, Edit } from '@mui/icons-material';
import { deleteOccupation, fetchOccupation, getOccupationById, postOccupationData, updatedOccupation } from 'views/API/OccupationApi';

const columns = [
  { id: 'occupationId', label: 'ID', align: 'center' },
  { id: 'occupationName', label: 'Name', align: 'center' },
  { id: 'description', label: 'Description', minWidth: 100, align: 'center' },
  { id: 'createdBy', label: 'Created By', align: 'center' },
  { id: 'updatedBy', label: 'Updated By', align: 'center' },
  { id: 'insertedDate', label: 'Created Date', align: 'center' },
  { id: 'updatedDate', label: 'Modified Date', align: 'center' },
  { id: 'actions', label: 'Actions', align: 'center' }
];

const Occupation = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userdata, setUserData] = useState({
    occupationName: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [occupationId, setOccupationId] = useState(null);

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
      const res = await fetchOccupation(headers);
      console.log(res.content);
      const fetchedData = res.content;

      if (fetchedData) {
        const tableData = fetchedData.map((p) => ({
          occupationId: p.occupationId,
          occupationName: p.occupationName,
          description: p.description,
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

    if (!userdata.occupationName || userdata.occupationName.trim() === '') {
      newErrors.occupationName = 'Enter the occupation name';
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
      occupationName: '',
      description: ''
    });
    setOpen(true);
  };

  const handleEdit = async (occupationId) => {
    setEditMode(true);
    setOpen(true);
    try {
      const res = await getOccupationById(headers, occupationId);
      console.log(occupationId);
      console.log(res.data);
      const det = res.data;

      setOccupationId(det.occupationId);
      setUserData({
        occupationName: det.occupationName,
        description: det.description
      });
    } catch (error) {
      console.error('Error fetching occupation details:', error);
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
      occupationName: userdata.occupationName,
      description: userdata.description,
      createdBy: { userId: user.userId }
    };

    try {
      const response = await postOccupationData(dataToPost, headers);
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
      occupationId: occupationId,
      occupationName: userdata.occupationName,
      description: userdata.description,
      updatedBy: { userId: user.userId }
    };

    try {
      const response = await updatedOccupation(updatedDataPayload, headers);
      console.log(response);
      if (response.data.responseCode === 201) {
        setRefreshTrigger(!refreshTrigger);
        setOpen(false);
        setEditMode(false);
        setOccupationId(null);
      }
    } catch (error) {
      console.error(error);
    }

    FetchData();
    setOpen(false);
  };

  const handleDelete = async (occupationId) => {
    try {
      await deleteOccupation(headers, occupationId);
      FetchData();
    } catch (error) {
      console.error('Error deleting occupation:', error);
    }
  };

  return (
    <MainCard
      title={
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Occupation</span>
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
                  <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontWeight: 600 }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {category.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'actions' ? (
                          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <IconButton color="primary" sx={{ padding: '5px' }} onClick={() => handleEdit(row.occupationId)}>
                              <Edit />
                            </IconButton>
                            <IconButton color="secondary" sx={{ padding: '5px' }} onClick={() => handleDelete(row.occupationId)}>
                              <DeleteForever />
                            </IconButton>
                          </Box>
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
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
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>{editMode ? 'Edit Occupation' : 'Add Occupation'}</DialogTitle>
        <form onSubmit={editMode ? updateData : postData}>
          <Container>
            <TextField
              autoFocus
              required
              fullWidth
              margin="dense"
              label="Occupation Name"
              name="occupationName"
              value={userdata.occupationName}
              onChange={changeHandler}
              error={!!errors.occupationName}
              helperText={errors.occupationName}
            />
            <TextField
              required
              fullWidth
              margin="dense"
              label="Description"
              name="description"
              value={userdata.description}
              onChange={changeHandler}
              error={!!errors.description}
              helperText={errors.description}
            />
          </Container>
          <DialogActions>
            <Button type="submit">{editMode ? 'Update' : 'Add'}</Button>
            <Button variant="contained" color="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </MainCard>
  );
};

export default Occupation;
