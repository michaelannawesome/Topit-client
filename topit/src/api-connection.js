import axios from "axios";

export default axios.create({
  baseURL: "https://rocky-caverns-41537.herokuapp.com/api/magic",
  headers: {
    "Content-type": "application/json",
  },
});
