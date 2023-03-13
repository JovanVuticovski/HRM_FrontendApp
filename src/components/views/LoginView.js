import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import HomePageView from "./HomePageView";
//import { useLocalState } from "../../storage/LocalStorage";

export default function LoginView(setUser, setToken) {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  //const [email, setEmail] = useState([""]);
  // const [password, setPassword] = useState([""]);
  const [semesters, setSemesters] = useState(); // List of all semesters
  const [jwt, setJwt] = useState("");
  const [error, setError] = useState();

  // Fetch Post
  const loginCB = useCallback(() => {
    axios
      .post("/user/authenticate", {
        password: "Joel12345",
        email: "Joel@mail.com", // credentials are from database
      })

      .then((res) => {
        setJwt(res.data.token);
        //localStorage.setItem("Authorization", "value");
        console.log(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // Code in useEffect runs 1 time when app starts

  // Fetch Get
  useEffect(() => {
    setLoading(true);
    if (jwt) {
      axios
        .get("/semester/", {
          headers: { Authorization: `Bearer ${jwt}` },
        })

        .then((res) => {
          setSemesters(res.data);
          console.log(res);
          //localStorage.setItem("Authorization", "value");
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [jwt]); // Represent current Jwt Value

  // Run code below if Jwt exist
  if (jwt) {
    if (loading) {
      return <div>loading...</div>;
    }
    // Error Handling
    else if (error) {
      return (
        <div style={{ whiteSpace: "pre" }}>
          {JSON.stringify(error, null, 2)}
        </div>
      );
    } else {
      // Getting list of semesters
      return <HomePageView value={semesters} />;
    }

    return (
      <div className="LoginView">
        <h1>User is logged in</h1>
        <div> JWT value is {jwt} </div>
      </div>
    );
  } else {
    return (
      <div className="LoginView">
        <h1>Log in</h1>
        <button onClick={loginCB}>Press to login</button>
      </div>
    );
  }
}

/*
 //Show fetched data response from backend
 return (
  <div style={{ whiteSpace: "pre" }}>
    {JSON.stringify(semesters, null, 2)}
  </div>
);*/

/*

else {
  return <HomePageView Value={semesters} />;
}
*/
