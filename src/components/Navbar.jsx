import React from "react";
import { Link } from "react-router-dom";
import "../styles/app.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Kids Klesskap</h1>
     <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/add">Legg ut annonse</Link></li>
 
  <li><Link to="/profile">Profil</Link></li>
  <li><Link to="/register">Register</Link></li>
  <li><Link to="/login">Logg inn</Link></li> {/* <-- nyeste plassen for  logging må kanskje endres senere idk tho*/}
</ul>

    </nav>
  );
};

export default Navbar;
