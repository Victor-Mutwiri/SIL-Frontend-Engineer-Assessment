import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
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
        navigate('/home');
      } catch (err) {
        console.error(err);
      }
    }
  });
  

  return (
    <button onClick={() => login()} style={{ background: "red", color: 'white', padding: '10px' }}>
      Sign in with Google
    </button>
  );
};

export default Login;

