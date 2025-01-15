import axios from 'axios';
import { BaseUrl } from 'BaseUrl';

export const fetchJobPosts = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/jobpost/v1/getAllJobPost`,
    headers: headers
  });
};

export const fetchCategoriesByJobPostId = async (headers, jobPostId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/jobpost/v1/getJobPostByJobPostId/{jobPostId}?jobPostId=${jobPostId}`,
    headers: headers
  });
};
export const fetchSubCategoriesByCategoryId = async (headers, categoryId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subcategory/v1/getAllSubCategoryByCategoryId/{categoryId}?categoryId=${categoryId}`,
    headers: headers
  });
};
export const fetchSubjectsBySubCategoryId = async (headers, subCategoryId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subject/v1/getSubjectsBySubCategoryId/{subCategoryId}?subCategoryId=${subCategoryId}`,
    headers: headers
  });
};


export const fetchCategory = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/category/v1/queryAllCategory`,
    headers: headers
  });
};

export const fetchSubjectsByCategoryId = async (headers, categoryId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subject/v1/getSubjectsByCategoryId/{categoryId}?categoryId=${categoryId}`,
    headers: headers
  });
};





export const fetchSubjectsBySubjectId = async (headers, subjectId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/subject/v1/getSubjectBySubjectId/{subjectId}?subjectId=${subjectId}`,
    headers: headers
  });
};

export const fetchModulesBySubjectId = async (headers, subjectId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/module/v1/getModulesBySubjectId/{subjectId}?subjectId=${subjectId}`,
    headers: headers
  });
};
export const fetchTopicsBymoduleId = async (headers, moduleId) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/topic/v1/getAllTopicByPagination/{pageNumber}/{pageSize}/{moduleId}?moduleId=${moduleId}&pageNumber=0&pageSize=10`,
    headers: headers
  });
};

export const fetchPromos = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/promo/v1/getAllPromoByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};

export const fetchNews = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/news/v1/getAllNewsByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};
export const fetchSuccessStory = async (headers) => {
  return await axios({
    method: 'GET',
    url: `${BaseUrl}/success/v1/getAllSuccessStoryByPagination/{pageNumber}/{pageSize}?pageNumber=0&pageSize=10`,
    headers: headers
  });
};



