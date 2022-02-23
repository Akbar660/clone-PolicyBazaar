
import React from "react";

// import { useNavigate } from "react-router-dom";

const Navbar = () => {


const handleClick=()=>{
window.location.href="/login"
}

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>navbar</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Navbar;
