import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen_otp from "./screens/Loginscreen_otp";
import Loginscreen_password from "./screens/Loginscreen_password";

function App() {
  return (
    <div className="App">

      <Navbar />

    <BrowserRouter>
      <Routes>

       <Route path="/" exact element={<Homescreen />} />
       <Route path="/login" exact element={<Loginscreen />} />
       <Route path="/register" exact element={<Registerscreen />} />
       <Route path="/login_otp" exact element={<Loginscreen_otp  />} />
       <Route path="/login_password" exact element={<Loginscreen_password  />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
