import axios from "axios";
const token = localStorage.getItem('Cinematoken')
// console.log(token,"hgasfh")
const baseURL= "http://localhost:4000"
const instance = axios.create({
  baseURL,
  withCredentials:true
});

export default instance;