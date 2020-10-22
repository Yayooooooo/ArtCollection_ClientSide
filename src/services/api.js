import axios from 'axios'
axios.defaults.withCredentials = true

export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000/'
    // baseURL: 'https://poetry-production-api.herokuapp.com/'
  })
}
