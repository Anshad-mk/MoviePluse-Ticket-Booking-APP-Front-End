import axios from 'axios'
import {baseUrl} from '../assets/Constents'
const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance