import axios from "axios";
import { BaseUrl } from "BaseUrl";

export const fetchQuestions = async (headers) => {
    return await axios({
      method: 'GET',
      url: `https://virtullearning.cloudjiffy.net/edukartorg/mcqfile/v1/getMCQTest`,
      headers: headers
    });
  };