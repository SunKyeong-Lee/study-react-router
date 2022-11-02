import "./App.css";
import { StateContext, SetContext } from "./context/ContextComp";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Writeform from "./pages/Writeform";
import BoardList from "./pages/BoardList";
import BoardContext from "./pages/BoardContext";

function App() {
  const [boardlist, setBoardlist] = useState([]);

  // 실행하자마자 ajax를 통해 값을 들고올 수 있다.
  useEffect(() => {
    // Fetch를 사용한 ajax
    async function getData() {
      // reponse로 값을 받아오는 시간이 걸림
      const response = await fetch("boardlistdata.json");
      const data = await response.json();
      console.log(data);
      setBoardlist(data.boardlist);
    }
    getData();
  }, []);

  return (
    <div className="App">
      {/* 데이터를 전체적으로 관리하기 위해 Context 사용 */}
      <StateContext.Provider value={boardlist}>
        <SetContext.Provider value={setBoardlist}>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* path='/'대신 index 사용 */}
              {/* index : 해당 루트 내에서 가장 첫 페이지를 의미 */}
              <Route index element={<Home />} />
              <Route path="writeform" element={<Writeform />} />
              <Route path="boardlist" element={<BoardList />}>
                <Route path=":id" element={<BoardContext />} />
              </Route>
            </Route>
          </Routes>
        </SetContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
