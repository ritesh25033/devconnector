// import axios from "axios";

// const setAuthToken = token => {
//   if (token) {
//     axios.defaults.headers.common["x-auth-token"] = token;
//   } else {
//     delete axios.defaults.headers.common["x-auth-token"];
//   }
// };

// export default setAuthToken;

import axios from "axios";

// Use the correct backend URL from the environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
