import { useEffect, useState } from "react";
import authenticateApi from "./authenticate";
import EhrRecords from "./pages/EhrRecords";
import axios from "axios";
// authorize, token, getrequest
export const userCredentials = {
  id: 5184,
  password: 12344321,
};

function App() {
  const [token] = authenticateApi();
  const [ehrRecordsData, setEhrRecordsData] = useState(null);

  useEffect(() => {
    if (token) {
      // Create an Axios instance with the specified base URL and headers
      const instance = axios.create({
        baseURL: "http://source.medsoft.ge:8002",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });

      // Define the endpoint to make the GET request
      const endpoint = "/EHR/ListGet?HistoryID=27652";

      // Make the GET request
      instance
        .get(endpoint)
        .then((response) => {
          setEhrRecordsData(response.data.responseResult.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [token]);

  return (
    <div className="App">
      <EhrRecords data={ehrRecordsData} />
    </div>
  );
}

export default App;
