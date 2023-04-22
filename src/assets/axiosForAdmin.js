import axios from "axios";
const token = localStorage.getItem('Admintoken')
const baseURL= "http://localhost:4000"
const instance = axios.create({
  baseURL,
  withCredentials:true,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default instance;