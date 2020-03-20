import axios from "axios";

export default axios.create({
  baseURL: "https://flatten-backend.azurewebsites.net"
});
