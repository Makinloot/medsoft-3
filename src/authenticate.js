import axios from "axios";
import { useState } from "react";
function authenticateApi() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  // Create an Axios instance with default configuration
  const instance = axios.create({
    baseURL: "http://source.medsoft.ge:8002",
    headers: {
      accept: "*",
      Authorization: "Bearer 5184",
      "Content-Type": "application/json",
    },
  });

  // Define the data to be sent
  const data = {
    userID: 5184,
    password: "12344321",
  };

  // Make the POST request
  instance
    .post("/Authentication/Authenticate", data)
    .then((response) => {
      //   console.log("Response:", response.data);
      const authToken = response.data.responseResult.data.authToken;
      setToken(authToken);
    })
    .catch((error) => {
      console.error("Error:", error);
      setError(error);
    });

  return [token, error];
}

export default authenticateApi;
