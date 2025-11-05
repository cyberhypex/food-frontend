import axios from 'axios'

const router='http://localhost:5000/'
const api=axios.create({
    baseURL:router,
    withCredentials:false,
    headers:{
        'Content-Type':'application/json'
    }
});
export default api;