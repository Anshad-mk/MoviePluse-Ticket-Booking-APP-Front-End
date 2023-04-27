import axios from "axios";
const token = localStorage.getItem('Admintoken')
const baseURL= "https://anshad.tech"
const instance = axios.create({
  baseURL,
  withCredentials:true,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default instance;