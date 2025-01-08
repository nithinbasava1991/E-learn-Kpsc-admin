import axios from 'axios';
import { BaseUrl } from 'BaseUrl';



export const fetchModules = async (headers) => {
    return await axios({
      method: 'GET',
      url: `${BaseUrl}/module/v1/getAllModuleByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
      headers: headers
    });
  };
  
  export const fetchAllModules = async (headers) => {
    return await axios({
      method: 'GET',
      url: `${BaseUrl}/module/v1/getAllModuleByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
      headers: headers
    });
  };
  
  export const addModule = async (data, headers) => {
    try {
      return await axios({
        method: 'POST',
        url: `${BaseUrl}/module/v1/createModule`,
        headers,
        data: data
      }).then(function (res) {
        if (res.data.responseCode === 201) {
          alert(res.data.message);
        } else if (res.data.responseCode === 400) {
          alert(res.data.errorMessage);
        }
      });
    } catch (error) {
      alert(error);
    }
  };
  
  export const fetchModuleById = async (subjectId, headers) => {
    return await axios({
      method: 'GET',
      url: `${BaseUrl}/module/v1/getModuleByModuleId/{moduleId}?moduleId=${subjectId}`,
      headers: headers
    });
  };
  
  export const updatedModule = async (updatedData, headers) => {
    console.log(updatedData);
    return await axios({
      method: 'PUT',
      url: `${BaseUrl}/module/v1/updateModule`,
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
  
  export const deleteModule = async (id, headers) => {
    return await axios({
      method: 'delete',
      url: `${BaseUrl}/module/v1/deleteModuleById/${id}`,
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
  