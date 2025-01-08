import axios from 'axios';
import { BaseUrl } from 'BaseUrl';

//Jobpost
export const fetchJobPost = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/jobpost/v1/getAllJobPostByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};
export const fetchAllJobPosts = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/jobpost/v1/getAllJobPost`,
    headers: headers
  });
};

export const fetchJobPostById = async (jobPostId, headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/jobpost/v1/getJobPostByJobPostId/{jobPostId}?jobPostId=${jobPostId}`,
    headers: headers
  });
};

export const addJobPost = async (data, headers) => {
  try {
    return await axios({
      method: 'POST',
      url: `${BaseUrl}/jobpost/v1/createJobPost`,
      headers,
      data: JSON.stringify(data)
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

export const updatedJobPost = async (updatedData, headers) => {
  console.log(updatedData);
  return await axios({
    method: 'PUT',
    url: `${BaseUrl}/jobpost/v1/updateJobPost`,
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

export const deleteJobPost = async (id, headers) => {
  return await axios({
    method: 'delete',
    url: `${BaseUrl}/jobpost/v1/deleteJobPostById/${id}`,
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

//category
export const fetchCategories = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/category/v1/getAllCategoryByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};

export const fetchCategoryById = async (categoryId, headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/category/v1/getCategoryByCategoryId/{categoryId}?categoryId=${categoryId}`,
    headers: headers
  });
};

export const addCategory = async (data, headers) => {
  try {
    return await axios({
      method: 'POST',
      url: `${BaseUrl}/category/v1/createCategory`,
      headers,
      data: JSON.stringify(data)
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

export const updatedCategory = async (updatedData, headers) => {
  console.log(updatedData);
  return await axios({
    method: 'PUT',
    url: `${BaseUrl}/category/v1/updateCategory`,
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

export const deleteCategory = async (id, headers) => {
  return await axios({
    method: 'delete',
    url: `${BaseUrl}/category/v1/deleteCategoryById/${id}`,
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
//sub category
export const fetchsubCategories = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subcategory/v1/getAllSubCategoryByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};

export const fetchAllCategories = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/category/v1/queryAllCategory`,
    headers: headers
  });
};

export const fetchAllSubCategories = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subcategory/v1/getAllSubCategory`,
    headers: headers
  });
};

export const fetchsubCategoryById = async (categoryId, headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subcategory/v1/getSubCategoryBySubCategoryId/{subCategoryId}?subCategoryId=${categoryId}`,
    headers: headers
  });
};

export const addsubCategory = async (data, headers) => {
  try {
    return await axios({
      method: 'POST',
      url: `${BaseUrl}/subcategory/v1/createSubCategory`,
      headers,
      data: JSON.stringify(data)
    }).then(function (res) {
      console.log(res);
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

export const updatedsubCategory = async (updatedData, headers) => {
  console.log(updatedData);
  return await axios({
    method: 'PUT',
    url: `${BaseUrl}/subcategory/v1/updateSubCategory`,
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

export const deletesubCategory = async (id, headers) => {
  return await axios({
    method: 'delete',
    url: `${BaseUrl}/subcategory/v1/deleteSubCategoryById/${id}`,
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

// subjects
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

export const addSubject = async (data, headers) => {
  try {
    return await axios({
      method: 'POST',
      url: `${BaseUrl}/subject/v1/createSubject`,
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





