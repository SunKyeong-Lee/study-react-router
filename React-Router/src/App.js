import "./App.css";
// 3. Routes와 Route를 가져와서 사용
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import KoreanPage from "./pages/KoreanPage";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <h1>리액트라우터를 사용하게 된 것을 환영합니다</h1>
      {/* Link를 통해서 컴포넌트 간의 이동을 할 수 있다. */}
      {/* a태그도 가능하지만 새로고침이 일어나므로 데이터가 리셋된다 */}
      <div>
        <Link to="/">클릭하면 home으로 이동합니다</Link> <br />
        <Link to="/about">클릭하면 about으로 이동합니다</Link> <br />
        <a href='/about'>about - a태그는 새로고침이 일어납니다</a> <br />

        <Link to='test'>test로 이동합니다</Link> <br />
      </div>

      {/* 주소마다 하나의 화면을 가지게 됨 */}
      {/* Route에 보여질 화면을 Routes로 묶어줌 */}
      <Routes>
        {/* path를 통해서 주소를 연결, element를 통해서 컴포넌트를 연결 */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="test" element={<Test />} />
        {/* 여러 주소로 하나의 컴포넌트 연결 가능, 원하는 주소 작성 가능 */}
        <Route path='test/ko' element={<KoreanPage />} />
        <Route path='test/es' element={<KoreanPage />} />
        <Route path='test/fr' element={<KoreanPage />} />
        {/* 지정한 주소 외에 들어갔을 때, *을 통해 모든 주소접근을 확인할 수 있다. */}
        {/* 존재하는 페이지가 없다고 알려주는데 사용 */}
        <Route path='*' element={<Notfound />} />

        {/* :id는 변수이름 id를 갖는 값을 주소를 통해 전달할 수 있다.*/}
        {/* id 위치에 값을 적어주면 그 값이 id값과 같은 형태로 params에 전달 */}
      </Routes>
    </div>
  );
}

export default App;
