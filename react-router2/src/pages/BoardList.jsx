import { Outlet } from "react-router-dom";

const BoardList = () => {
  return (
    <div>
      <h1>BoardList 입니다</h1>
      <Outlet />
    </div>
  );
}
 
export default BoardList;