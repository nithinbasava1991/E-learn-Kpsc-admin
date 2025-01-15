import axios from 'axios';
import { BaseUrl } from 'BaseUrl';


export const fetchModulesBySubjectId = async (headers, subjectId) => {
    return await axios({
      method: 'GET',
      url: `${BaseUrl}/module/v1/getModulesBySubjectId/{subjectId}?subjectId=${subjectId}`,
      headers: headers
    });
  };