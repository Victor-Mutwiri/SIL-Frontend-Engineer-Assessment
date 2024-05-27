import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../components/Usercontext";

const Login = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext);
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`
            },
          }
        );
        console.log(res);
        const userData = {
          name: res.data.name,
          picture: res.data.picture,
        };
        setUser(userData);
        navigate('/home');
      } catch (err) {
        console.error(err);
        window.alert('Login failed. Please try again.');
      }
    },
    onError: (error) => {
      console.error(error);
      window.alert('Login failed. Please try again.');
    }
  });
  

  return (
    <button onClick={() => login()} style={{ background: "red", color: 'white', padding: '10px' }}>
      Sign in with Google
    </button>
  );
};

export default Login;

