import { useNavigate } from "react-router";

function Logout({ setSuccess, setValues }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // alert("boo");
    localStorage.removeItem("accessToken");
    navigate("/loggedout");
    setSuccess(false);
    setValues({ email: "", password: "" });
  }

  return (
    <div className="logout">
      <button className="logoutButton" onClick={handleSubmit}>Logout</button>
    </div>
  );
}

export default Logout;
