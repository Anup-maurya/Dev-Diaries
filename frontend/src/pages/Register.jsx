import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = async (e) => {
    e.preventDefault();

    const rsp = await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify({ username, name,password }),
      headers: { "Content-Type": "application/json" },
    });

    // console.log(rsp);
    if (rsp.status !== 200) {
      alert("Registration failed");
    } else {
      alert("Registered!");
    }
  };

  return (
    <form className="register" onSubmit={register}>
      <h1>
        Register <FontAwesomeIcon icon={faUserPlus} />
      </h1>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
