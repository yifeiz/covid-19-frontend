import axios from "axios";

export default axios.create({
  baseURL: "https://production-dot-flatten-271620.appspot.com/",
  withCredentials: true
});
