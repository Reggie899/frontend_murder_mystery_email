
import "./App.css";
import Login from "./components/Login.jsx";

import HomeComponent from './components/HomeComponent.js';
import { useNavigate } from 'react-router';

import { Routes, Route } from "react-router";

function App() {
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
      <Route path='/' element={<Login />}/>
      <Route path="/home" element={<HomeComponent/>} />
      </Routes>

    </div>
  );
}

export default App;
