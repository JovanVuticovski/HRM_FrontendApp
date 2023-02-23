import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function RegisterView(setUser, setToken) {
  //const [loading, setLoading] = useState(false);

  const [register, setRegister] = useState(false);
  const [firstname, setFirstname] = useState([""]);
  const [lastname, setLastname] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [error, setError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { firstname, lastname, email, password };

    axios
      .post("/user/register")
      .then((res) => {
        setRegister("OK" + JSON.stringify(res, user));
        console.log("User succsesfully Registered");
      })
      .catch((error) => {
        setError(error);
      });
  };
}

export default RegisterView;
