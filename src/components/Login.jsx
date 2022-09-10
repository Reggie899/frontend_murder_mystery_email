import { useState } from "react";
import axios from "axios";
import logo from "../crowdmail.png";
import spinner from "../spinner.svg";
import { useNavigate } from "react-router";

// import HomeComponent from './HomeComponent.js';
// import { Routes, Route } from "react-router";

// Fetchers

const Login = ({ setSuccess, success, setValues, values }) => {
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;

    setValues((val) => ({ ...val, [inputName]: inputValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //    axios.post(`${process.env.REACT_APP_BASE_URL}/login`, values)

    axios
      .post(`https://backend-murder-mystery.herokuapp.com/login`, values)
      .then(
        (response) => {
          return response;
        }
        //     setSuccess(true);
        //    navigate("/home");
      )
      .then((response) => {
        if (response.statusText === "OK") {
          localStorage.setItem("accessToken", response.data.token);
          setSuccess(true);
          navigate("/home");
          return response;
        }
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((response) => console.log(response.data.token))
      .catch((err) => setError(err.response.data.message));
  };

  const register = () => {
    alert("Function >Registering< currently out of order. Please try again later!");
  };

  return (
    <>
      <header className="App-header">
        <div className="register">
          {" "}
          <p onClick={register}>Register</p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We're not perfect, but honest, free, secure and we have really cool features sometimes!</h1>
        <form>
          <input
            value={values.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            // autoFocus
            // onFocus={e => e.currentTarget.select()}
          />
          <input
            value={values.password}
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
                  {success ? null : error}

          <button className="loginButton" onClick={handleSubmit}>Login</button>
        </form>
        {/* {success ? <p>Successfully logged in!</p> : null} */}
        {success ? <img src={spinner} className="spinner" /> : null}
      </header>
    </>
  );
};

export default Login;
