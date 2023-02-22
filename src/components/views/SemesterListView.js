/*import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function SemesterList({ user, token }) {
  const [loading, setLoading] = useState(false);
  const [semesters, setSemesters] = useState(); // List of all semesters
  const [error, setError] = useState();

  useEffect(() => {
    console.log(semesters);
    setLoading(true);
    axios
      .get("/semester/")
      .then((res) => {
        setSemesters("OK" + JSON.stringify(res, null, 2));
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
        {loading && <div>loading...</div>}
        {error && (
          <div style={{ whiteSpace: "pre" }}>
            {JSON.stringify(error, null, 2)}
          </div>
        )}
        {semesters && (
          <div style={{ whiteSpace: "pre" }}>
            {JSON.stringify(semesters, null, 2)}
          </div>
        )}
      </header>
    </div>
  );
}
*/
