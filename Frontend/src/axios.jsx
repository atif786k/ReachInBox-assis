import axios from "axios";

const token = localStorage.getItem('token');
const instance = axios.create({
    baseURL: 'https://hiring.reachinbox.xyz/api/v1',
    headers: {
        Authorization: `Bearer ${token}`,
      },
})

export default instance;