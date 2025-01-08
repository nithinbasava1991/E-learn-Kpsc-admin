import axios from 'axios';
import { BaseUrl } from 'BaseUrl';




export const fetchTopics = async (headers) => {
    return await axios({
      method: 'GET',
      url: `${BaseUrl}/topic/v1/getAllTopicByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
      headers: headers
    });
  };
  
  export const addTopic = async (data, headers) => {
    try {
      return await axios({
        method: 'POST',
        url: `${BaseUrl}/topic/v1/createTopic`,
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
  
  export const fetchTopicById = async (topicId, headers) => {
    return await axios({
      method: 'GET',
      url: `${BaseUrl}/topic/v1/getTopicById/{topicId}?topicId=${topicId}`,
      headers: headers
    });
  };
  
  export const updatedTopic = async (updatedData, headers) => {
    console.log(updatedData);
    return await axios({
      method: 'PUT',
      url: `${BaseUrl}/topic/v1/updateTopic`,
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
  
  export const deleteTopic = async (id, headers) => {
    return await axios({
      method: 'delete',
      url: `${BaseUrl}/topic/v1/deleteTopicById/${id}`,
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