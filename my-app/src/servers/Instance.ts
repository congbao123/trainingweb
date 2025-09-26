import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://newsdata.io/api/1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Instance;