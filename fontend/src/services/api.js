import axios from 'axios';
import CookieService from './cookie';

console.log(CookieService.get('access_token'));

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: CookieService.get('access_token')
    ? `Bearer ${CookieService.get('access_token')}`
    : null,
};


const defaultPath = 'http://127.0.0.1:8000/api';
export default  {
  async get(url) {
    try {
      const res = await axios.get(`${defaultPath}/${url}`, {
        headers: defaultHeaders,
      });
      return res;
    } catch (err) {
      return { error: err };
      // return { error: err.response.data.errors };
    }
  },

  post(url) {
    return {
      values: async (data) => {
        try {
          const res = await axios.post(`${defaultPath}/${url}`, data, {
            headers: defaultHeaders,
          });
          return res;
        } catch (err) {
          return err;
        }
      },
    };
  },

  update(url) {
    return {
      values: async (data) => {
        try {
          const res = await axios.post(`${defaultPath}/${url}`, data, {
            headers: defaultHeaders,
          });
          return res;
        } catch (err) {
          return { error: err.response.data.errors };
        }
      },
    };
  },

  put(url, id) {
    return {
      values: async (data) => {
        try {
          const res = await axios.put(`${defaultPath}/${url}/${id}`, data, {
            headers: defaultHeaders,
          });
          return res;
        } catch (err) {
          return { error: err.response.data.errors };
        }
      },
    };
  },

  async delete(url) {
    try {
      const res = await axios.delete(`${defaultPath}/${url}`, {
        headers: defaultHeaders,
      });
      return res;
    } catch (err) {
      return { error: err.response.data.errors };
    }
  },
};

