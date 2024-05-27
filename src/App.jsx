import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/login";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { UserProvider } from "./components/Usercontext";
import AlbumDetails from "./components/albumdetails";

const App = () => {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/albums/:albumId" element={<AlbumDetails/>}/>
            <Route path="/profiles/:userId" element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
};

export default App;
