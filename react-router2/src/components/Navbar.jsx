import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "lightgray", padding: "10px" }}>
      <h1>Navbar 입니다</h1>
      <NavLink to="/">Home</NavLink>
      <span> | </span>
      <NavLink to="/writeform">Write</NavLink>
      <span> | </span>
      <NavLink to="/boardlist">Board</NavLink>
    </div>
  );
};

export default Navbar;
