import { useEffect } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { json } from "react-router-dom";

function RegisterView(setUser) {
  //const [loading, setLoading] = useState(false);

  const [register, setRegister] = useState(false);
  const [firstname, setFirstname] = useState([""]);
  const [lastname, setLastname] = useState([""]);
  const [email, setEmail] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [error, setError] = useState();

  const user = {
    firstname,
    lastname,
    email,
    password,
  };

  axios("user/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(user),
  });
}

export default RegisterView;

/*
  axios
      .post("/user/register")
      .then((res) => {
        setRegister("OK" + JSON.stringify(res, user)); // Turning Javascript objekt to Json Format
        console.log("User succsesfully Registered");
      })
      .catch((error) => {
        setError(error);
      });

      */
