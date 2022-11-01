import { Outlet } from "react-router-dom";

const Number = () => {
  return (
    <div>
      <h2>NumberPage 입니다</h2>
      <Outlet />
    </div>
  );
};

export default Number;