import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function LoginView(setUser, setToken) {
  //const [loading, setLoading] = useState(false);

  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [jwt, setJwt] = useState([""]);
  const [error, setError] = useState();

  useEffect(() => {
    const user = {
      email,
      password,
    };

    axios
      .post("/user/authenticate", {
        password: "Joel12345",
        email: "Joel@mail.com", // credentials are from database
      })

      .then((res) => {
        localStorage.setItem("Authorization", "value");
        console.log(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // Code in useEffect runs 1 time when app starts
}
