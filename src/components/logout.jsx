import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Usercontext";

const Logout = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>
        <i className="bi bi-box-arrow-in-right"> Sign Out</i>
    </button>
  );
};

export default Logout;
