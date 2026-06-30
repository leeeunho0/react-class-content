import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  // 페이지를 갈아끼우는 방법!
  let [page, setPage] = useState("페이지설정");
  return (
    <div className="App">
      <h2>주소(URL)에 따라 다른 화면을 보여주는 라이브러리</h2>
      <p>페이지를 이동하는 기능!</p>

      <h2>App이라는 리액트 파일에서 여러 페이지 경로를 관리</h2>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
      </Routes>

      <br />
      <br />
      <br />
      <hr />
      <h2>URL에 화면을 저장하는 방법(실무)</h2>
      <h3>React-Router-DOM</h3>
      <p>리본 리액트 파일에 저장 안되어있다.</p>
      <p>외부에서 다운로드해야된다.</p>
      <p>다운로드를 명령어 하나로 받을 수있다.</p>
      <p>npm install react-router-dom</p>
    </div>
  );
}
/*
App 리액트 파일에서 페이지들을 한곳에서 관리한다.

Routes 태그는 여러개 경로를 모아놓는 태그다!
Route 태그는 실제 path 고정된 key  url생성 내맘대로 생성
element 어떤 페이지 보여줄래? 태그

주소마다 어떤 페이지를 보여줄지 설정을 하는 Route태그!


http://localhost:5173 --> www.쇼핑몰.com || www.naver.com
http://localhost:5173/home --> www.쇼핑몰.com/home
                               www.naver.com/email

*/