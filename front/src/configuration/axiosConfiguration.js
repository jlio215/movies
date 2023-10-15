import axios from 'axios'


const axiosConfiguration = axios.create({
    baseURL: process.env.REAC_APP_BASE_URL ||
     'http://localhost:4000/api/v1/'
})

export {
    axiosConfiguration
}