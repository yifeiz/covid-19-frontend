import axios from "axios";

export default axios.create({
  baseURL: "https://backend-staging-dot-flatten-staging-271921.appspot.com/",
  withCredentials: true
});
