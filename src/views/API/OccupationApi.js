import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

//todo ==> POST Occupation DATA
export const postOccupationData = async (pdata, headers) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${BaseUrl}/gotra/v1/createOccupation`,
        headers: headers,
        data: JSON.stringify(pdata)
      });
  
      console.log(res);
      if (res.data.responseCode === 201) {
       
        alert(res.data.message);
      } else {
        alert(res.data.errorMessage || 'An error occurred'); 
      }
    } catch (error) {
      alert(error.message || 'An unexpected error occurred'); 
    }
  }

//todo ==> GET  Occupation DATA
export const fetchOccupation = async (headers) => {
  try {
    const response = await axios.get(`${BaseUrl}/gotra/v1/getAllOccupationByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`, {
      headers: headers
    });
    return response.data; // Extract and return the data from the response
  } catch (error) {
    throw error; // Handle errors appropriately
  }
};

//todo ==> GET DATA BY Occupation ID
export const getOccupationById = async (headers, id) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/gotra/v1/getOccupationByOccupationId/{occupationId}?occupationId=${id}`,
    headers: headers
  });
};

// todo==> UPDATE Occupation
export const updatedOccupation = async (updateddata, headers) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `${BaseUrl}/gotra/v1/updateOccupation`,
      headers: headers,
      data: updateddata
    });

    if (response.data.responseCode === 201) {
      alert(response.data.message);
    } else if (response.data.responseCode === 400) {
      alert(response.data.errorMessage);
    } else {
      alert('Unexpected response code');
    }
  } catch (error) {
    console.error('Error updating promo:', error);
  }
};

//todo ==> DELETE  Occupation DATA
export const deleteOccupation = async (headers, id) => {
  await axios({
    method: 'DELETE',
    url: `${BaseUrl}/gotra/v1/deleteOccupationById/1`,
    headers: headers
  })
    .then((res) => {
      if (res.data.responseCode === 200) {
        alert(res.data.message);
      } else if (res.data.responseCode === 400) {
        alert(res.data.errorMessage);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
