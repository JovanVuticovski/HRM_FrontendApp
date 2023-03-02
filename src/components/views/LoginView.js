import { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//import { useLocalState } from "../../storage/LocalStorage";

export default function LoginView(setUser, setToken) {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(false);
  //const [email, setEmail] = useState([""]);
  // const [password, setPassword] = useState([""]);
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
    if (jwt) {
      axios
        .get("/semester/", {
          // set jwt header
        })

        .then((res) => {
          setJwt(res.data.token);
          //localStorage.setItem("Authorization", "value");
          console.log(res);
        })
        .catch((error) => {
          setError(error);
        });
    }
  }, [jwt]);

  //useEffect(() => {
  //  console.log(`JWT Value is: ${jwt}`); // Check if Jwt values goes from "" to a value
  //}, []);
  if (jwt) {
    if (loading) {
      //  ...
    } else if (error) {
      //  ...
    } else {
      //show data
    }
    return (
      <div className="LoginView">
        <h1>You are logged in</h1>
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
