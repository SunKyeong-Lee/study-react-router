import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext, SetContext } from "../context/ContextComp";

const Writeform = () => {
  const boarlist = useContext(StateContext);
  const setBoard = useContext(SetContext);
  const [context, setContext] = useState("");
  const navigate = useNavigate();

  // 데이터와 관련된 내용은 서버측에서 관리하는 내용
  // 서버를 사용하고 있지 않기 때문에, 전체 데이터를 리액트에서 관리
  const addBoard = () => {
    const newList = boarlist.concat({  // 게시물 데이터 추가
      id: boarlist.length + 1,         // 게시물 id
      context: context,                // 게시물 내용
    });
    setBoard(newList);
    // Link와 같은 일을 할 수 있다.
    // -1 값을 넣어주면 뒤로가기도 가능
    navigate("/boardlist");
  };

  return (
    <div>
      <h1>Wirteform 입니다</h1>
      <textarea
        cols="70" rows="20"
        onChange={(e) => {setContext(e.target.value);}}
      ></textarea>
      <p>{context}</p>
      <button onClick={addBoard}>발행</button>
    </div>
  );
};

export default Writeform;
