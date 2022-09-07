
import "./App.css";
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";

import Login from "./components/Login.jsx";


import HomeComponent from './components/HomeComponent.js';

import Register from "./components/Register";


function App() {
  const [values, setValues] = useState({  email: "", password: "" });
useEffect(() => {
  console.log(values);
}, values);
const [resmail, setResmail] = useState([]);

  const [success, setSuccess] = useState(false);
if (success) {
  console.log("success true");
}
if (!success) {
  console.log("success false")
}
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <form>
          <p>E-Mail:</p>
          <input className="field" type="email"></input>
          <p>Password:</p>
          <input className="field" type="password"></input>
          <input className="submit" type="submit" value="Go!"></input>
        </form> */}
        {/* <Login /> */}
      <Routes>
      <Route path='/' element={<Login success={success} setSuccess={setSuccess} setValues={setValues} values={values}/>}/>
            <Route path="/register" element={<Register/>} />

      <Route path="/home" element={<HomeComponent setSuccess={setSuccess} setValues={setValues} setResmail={setResmail} resmail={resmail}/>} />
      </Routes>

    </div>
  );
}

export default App;
