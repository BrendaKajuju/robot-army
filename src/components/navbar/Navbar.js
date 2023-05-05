import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink className="logo" to="/">
        Globutron Army
      </NavLink>
      <div>
        <NavLink to="/cart">Your Army</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
