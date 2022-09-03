import { useNavigate } from "react-router";

function Logout({ setSuccess, setValues }) {
  const navigate = useNavigate();

  function handlesubmit(event) {
    event.preventDefault();
    // alert("boo");
    localStorage.removeItem("accessToken");
    navigate("/");
    setSuccess(false);
    setValues({ email: "", password: "" });
  }

  return (
    <div className="logout">
      <button onClick={handlesubmit}>Logout </button>
    </div>
  );
}

export default Logout;
