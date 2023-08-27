import axios from "axios";

const axiosClient = axios.create();
// export const config: any = {
//   header: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// };

axiosClient.defaults.baseURL = "http://13.212.52.52:8080/api/v1";

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authentication: "alo",
};

//All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

// axiosClient.defaults.withCredentials = true;

export default axiosClient;
