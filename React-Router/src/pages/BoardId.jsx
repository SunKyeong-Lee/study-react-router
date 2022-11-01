import { useState } from "react";
import { useParams } from "react-router-dom";

const BoardId = () => {
  const { id } = useParams();
  const [memolist, setMemolist] = useState([
    { id: 1, memo: "첫번째 내용입니다" },
    { id: 2, memo: "두번째 내용입니다" },
    { id: 3, memo: "세번째 내용입니다" },
  ]);
  // 배열은 0부터 시작, memelist의 id는 1부터 시작하기 때문에 -1
  // 함수로 비교해서 접근하는 것이 더 좋다.
  const memo = memolist[id - 1];

  return (
    <div>
      <h3>BoardId 페이지입니다 : {memo.id}</h3>
      <p>{memo.memo}</p>
    </div>
  );
};

export default BoardId;
