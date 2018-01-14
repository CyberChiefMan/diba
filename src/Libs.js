import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8000/administrator/api/`,
  // headers: {
  //   Authorization: 'JWT {token}'
  // }
});
