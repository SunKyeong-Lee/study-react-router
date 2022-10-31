import "./App.css";
// 3. Routes와 Route를 가져와서 사용
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import KoreanPage from "./pages/KoreanPage";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <div className="App">
      <h1>리액트라우터를 사용하게 된 것을 환영합니다</h1>
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
      </Routes>
    </div>
  );
}

export default App;
