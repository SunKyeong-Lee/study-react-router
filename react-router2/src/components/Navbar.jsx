import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = { color: "tomato" };

  return (
    <div
      style={{ width: "100%", backgroundColor: "lightgray", padding: "10px" }}
    >
      {/* NavLink는 isActive라는 값을 통해서 활성화 되었을 때 디자인 추가 */}
      {/* className도 동일한 형태로 작성할 수 있다. */}
      <h1>Navbar 입니다</h1>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        end
      >
        Home
      </NavLink>
      <span> | </span>
      <NavLink
        to="/writeform"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Write
      </NavLink>
      <span> | </span>
      <NavLink
        to="/boardlist"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Board
      </NavLink>
    </div>
  );
};

export default Navbar;
