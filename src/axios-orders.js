import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-36418-default-rtdb.firebaseio.com/",
});

export default instance;
