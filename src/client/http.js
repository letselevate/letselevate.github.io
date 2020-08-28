import axios from 'axios'
import apiConfig from '@/config/api'

axios.defaults.baseURL = apiConfig.url

export default {
  request: axios
}
