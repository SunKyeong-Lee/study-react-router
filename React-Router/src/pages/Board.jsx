import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Borad = () => {
  const [memolist, setMemolist] = useState([
    { id: 1, memo: "첫번째 내용입니다" },
    { id: 2, memo: "두번째 내용입니다" },
    { id: 3, memo: "세번째 내용입니다" },
  ]);

  return (
    <div>
      <h2>Board 페이지입니다</h2>
      {memolist.map((item) => (
        <Link to={"/board/" + item.id}> {item.id}{" "} </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Borad;
