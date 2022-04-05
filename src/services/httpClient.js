import axios from 'axios';

class HttpClient {
  axios = axios.create({});

  constructor(url) {
    this.axios.defaults.baseURL = url;
  }

  findDomain = async ({domain}) => {
    try {
      const res = await this.axios.get(`/domain/find`, {
        params: {domain},
      });
      return res;
    } catch (err) {

        return err?.response?.data;

    }
  };
  addDomain = async (domainData) => {
    try {
      const res = await this.axios.post(`/domain/find/add`, {
        ...domainData
      });
      return res;
    } catch (err) {

        return err?.response?.data;

    }
  };
  domainList = async () => {
    try {
      const res = await this.axios.get(`/domain/list`);
      return res;
    } catch (err) {

        return err?.response?.data;

    }
  };
}

const httpClient = new HttpClient('http://localhost:4002/api/v1');
export default httpClient;
