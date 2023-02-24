import { useEffect } from "react";
import { useState } from "react";
//import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarView from "./components/views/RegisterView";
import HomePageView from "./components/views/HomePageView";
import LoginView from "./components/views/LoginView;";
import RegisterView from "./components/views/RegisterView";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null); // JWT token after login/register

  return (
    <div className="App">
      <Router>
        <NavbarView />
        <Routes>
          <Route exact path="/" element={<HomePageView />} />
          <Route exact path="/login" element={<LoginView />} />
          <Route exact path="/register" element={<RegisterView />} />
        </Routes>
        <HomePageView />
      </Router>
    </div>
  );
}

export default App;

// Stefans kod Kopia

/*import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    console.log(data);
    setLoading(true);
    axios
      .get("/semester/")
      .then((res) => {
        setData("OK" + JSON.stringify(res, null, 2));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {loading && <div>Laddar...</div>}
        {error && (
          <div style={{ whiteSpace: "pre" }}>
            {JSON.stringify(error, null, 2)}
          </div>
        )}
        {data && (
          <div style={{ whiteSpace: "pre" }}>
            {JSON.stringify(data, null, 2)}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
*/
