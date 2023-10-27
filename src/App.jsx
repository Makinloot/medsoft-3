import authenticateApi from "./authenticate";
import EhrRecords from "./pages/EhrRecords";

// authorize, token, getrequest
export const userCredentials = {
  id: 5184,
  password: 12344321,
};

function App() {
  const [token] = authenticateApi();
  return (
    <div className="App">
      <EhrRecords />
    </div>
  );
}

export default App;
