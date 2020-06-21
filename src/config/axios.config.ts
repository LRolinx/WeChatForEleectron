// axios 配置封装
import axios from "axios"
import qs from "qs"

// 配置环境
switch (process.env.NODE_ENV) {
  case "development": 
    axios.defaults.baseURL = 'http://***';
    break;
  case "debug": 
    axios.defaults.baseURL = "***";
    break;
  case "production":
    axios.defaults.baseURL = 'https://www.production.com'
    break;
}

axios.defaults.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
   config => {
      // Use the qs module to convert to parameters JSON string.
      config.data = qs.stringify(config.data);
      return config;
   },
   error => {
      return Promise.reject(error)
   }
)

export default axios;
