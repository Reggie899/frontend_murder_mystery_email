import { useState } from 'react';
import axios from "axios";
import logo from "../crowdmail.png";


// import HomeComponent from './HomeComponent.js';
// import { Routes, Route } from "react-router";

 

// Fetchers
import { useNavigate } from 'react-router';

const Login = () => {
    const [values, setValues] = useState({  email: "", password: "" });
    const navigate = useNavigate();



    const [success, setSuccess] = useState(false)


    const handleChange = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name

        setValues((val) => ({ ...val, [inputName]: inputValue }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    //    axios.post(`${process.env.REACT_APP_BASE_URL}/login`, values)
       axios.post(`https://backend-murder-mystery.herokuapp.com/login`, values)
       .then(response => {
       return response 
        }
    //     setSuccess(true);
    //    navigate("/home");
       )
        .then(response => {
            if(response.statusText === "OK") { 
            localStorage.setItem("accessToken", response.data.token); navigate("/home"); 
            return response
        }})
        .then (response => {console.log(response); return response})
        .then(response => console.log(response.data.token))
        .catch(err => console.log(err))
          };

    return (
        <>
          <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
            <input value={values.email} onChange={handleChange} name="email" type='email' placeholder="Email" />
            <input value={values.password} onChange={handleChange} name="password" type='password' placeholder="Password" />
            <button onClick={handleSubmit}>Login</button>
        </form>
        {success ? <p>Successfully logged in!</p> : null}

        </header>

      
        </>

    )
}

export default Login