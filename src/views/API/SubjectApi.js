import axios from 'axios';
import { BaseUrl } from '../../BaseUrl';

//todo ==> POST PROMO DATA
export const postSubject = async (pdata, headers) => {
  try {
    await axios({
      method: 'POST',
      url: `https://virtullearning.cloudjiffy.net/elearnkpscadmin/subject/v1/createSubject`,
      headers: headers,
      data: JSON.stringify(pdata)
    }).then(function (res) {
      console.log(res);
      if (res.data.responseCode === 201) {
        alert('Subject Successfully Created');
      } else {
        alert(res);
      }
    });
  } catch (error) {
    alert(error);
  }
};

export const fetchSubjects = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subject/v1/getAllSubjectsByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};
export const fetchAllSubjects = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subject/v1/getAllSubjects`,
    headers: headers
  });
};


export const fetchSubjectById = async (subjectId, headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subject/v1/getSubjectBySubjectId/{subjectId}?subjectId=${subjectId}`,
    headers: headers
  });
};

export const updatedSubject = async (updatedData, headers) => {
  console.log(updatedData);
  return await axios({
    method: 'PUT',
    url: `${BaseUrl}/subject/v1/updateSubject`,
    headers: headers,
    data: updatedData
  })
    .then(function (res) {
      console.log(res);
      if (res.data.responseCode === 201) {
        alert(res.data.message);
      } else if (res.data.responseCode === 400) {
        alert(res.data.errorMessage);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteSubject = async (id, headers) => {
  return await axios({
    method: 'delete',
    url: `${BaseUrl}/subject/v1/deleteSubjectById/${id}`,
    headers
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
      alert(err.response.data.errorMessage);
    });
};

