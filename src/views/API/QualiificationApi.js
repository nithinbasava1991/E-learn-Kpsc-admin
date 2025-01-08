import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

//todo ==> POST Qualification DATA
export const postQualificationData = async (pdata, headers) => {
    try {
      const res = await axios({
        method: 'POST',
        url: `${BaseUrl}/qualification/v1/createQualification`,
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

//todo ==> GET  Qualification DATA
export const fetchQualification = async (headers) => {
  try {
    const response = await axios.get(`${BaseUrl}/qualification/v1/getAllQualificationByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`, {
      headers: headers
    });
    return response.data; // Extract and return the data from the response
  } catch (error) {
    throw error; // Handle errors appropriately
  }
};

//todo ==> GET DATA BY Qualification ID
export const getQualificationById = async (headers, id) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/qualification/v1/getQualificationByQualificationId/{qualificationId}?qualificationId=${id}`,
    headers: headers
  });
};

// todo==> UPDATE Qualification
export const updatedQualification = async (updateddata, headers) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: `${BaseUrl}/qualification/v1/updateQualification`,
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

//todo ==> DELETE  Qualification DATA
export const deleteQualification = async (headers, id) => {
  await axios({
    method: 'DELETE',
    url: `${BaseUrl}/qualification/v1/deleteQualificationById/${id}`,
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
