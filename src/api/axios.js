import axios from 'axios';
import config from '../common/env.config';

const instance = axios.create({
  baseURL: config.apiEndpoint
});

export default instance;
