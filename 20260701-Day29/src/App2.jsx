// App2.jsx

import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ArrayFind from './ArrayFind';

export default function App2() {
  return (
    <div>
      {/* 여러개의 상세피이지 관리하는 경로들 */}

      <Link to="/">첫번째 상품</Link><br />

      <br /><br /><br />
      <hr />

      <Routes>
        {/* :id  => 변경되는 숫자를 가지고 올거야! */}
        <Route path="/" element={<ArrayFind />} ></Route>
      </Routes>
    </div>
  );
}
