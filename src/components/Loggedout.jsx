import { useNavigate } from "react-router";

function Loggedout() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div className="loggedOutGeneral">
      <button className="" onClick={handleSubmit}>Login</button>
<div>
<h1 className="loggedOut">You are successfully logged out!</h1>
</div>
    </div>
  );
}

export default Loggedout;
