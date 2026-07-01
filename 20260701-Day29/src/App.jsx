import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import SelectBasic from "./ex/SelectBasic";
import SelectObjectTest from "./ex/SelectObjectTest";
import SelectArray from "./ex/SelectArray";
import SelectTotalTest from "./ex/SelectTotalTest";
import InputSearch from "./ex/InputSearch";
import InputTest from "./ex/InputTest";
import Exam from "./ex/Exam";

export default function App() {
  return (
    <div>
       {/* 버튼을 클릭하면 페이지 이동 */}
      <Link to="/select">select 테스트</Link><br />
      <Link to="/array">array 테스트</Link><br />
      <Link to="/total">total 테스트</Link><br />
      <Link to="/input">input search 테스트</Link><br />
      <Link to="/test">input 테스트</Link><br />
      <Link to="/exam">교안 예제</Link><br />

      <br /><br />
      <hr />

      {/* 한곳에서 URL경로르 관리한다. */}
      <Routes>
        {/* 메인 페이지 localhost:5173/ -> SelectBasic보여줘 */}
        <Route path="/" element={<SelectBasic />}></Route>
        {/* 새로운 페이지 추가됨 */}
        <Route path="/select" element={<SelectObjectTest />}></Route>
        <Route path="/array" element={<SelectArray />}></Route>
        <Route path="/total" element={<SelectTotalTest />}></Route>
        <Route path="/input" element={<InputSearch />}></Route>
        <Route path="/test" element={<InputTest />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
      </Routes>
    </div>
  );
}
