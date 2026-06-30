import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import TailwindTest from "./TailwindTest";
import Sugang from "./Sugang";

export default function App() {
  return (<div>

    <Routes>
      {/* URL을 작성 하면  localhost:5173/ 가 들어오면 자동으로
        첫번째 화면으로 로그인 페이지 보여줘! */}
      <Route path="/" element={ <Login />}></Route>

      {/* 두번째 로그인 버튼을 클릭하면 다음 페이지로 이동한다 */}
      <Route path="/dashboard" element={ <Dashboard />}></Route>

      {/* 세번째 테일윈드 페이지 보이기 */}
      <Route path="/css" element={<TailwindTest />} />
      
      {/* 네번째 수강페이지 보이기 */}
      <Route path="/sugang" element={<Sugang />} />
    </Routes>

</div>
);
}

//1. 라이브러리 다운하기
// npm install react-router-dom

// 2. App에서 경로 설정