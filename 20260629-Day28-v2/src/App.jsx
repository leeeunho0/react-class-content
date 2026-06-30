// App.jsx
import React from "react";
// 여러개의 경로를 관리하는 태그를 불러오기!
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import EmailPage from "./EmailPage";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";

export default function App() {
  return (
    <div>
{/* 경로들을 관리하는 설정만! 
  URL별로 어떤 화면을 보여줄지 여기서 관리할께!*/}

        <h2>다른 페이지로 이동하는 버튼!</h2>
        <Link className="nav-menu" to="/email">이메일</Link>
        <Link className="nav-menu" to="/cart">장바구니</Link>
        <Link className="nav-menu" to="/product">상품</Link>

        <br /><br /><br />
        <hr />

{/* 고객이 직접 url을 다 치고 들어와야된다. */}
      <Routes>
{/* 메인 페이지 보여줘 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

/*
 1. 각각 페이지 url을 생성해서 화면을 보여주고싶으면 리액트 라우트 돔 사용하면 된다.
 2. 라이브러리(도구) 다운로드하기
   npm install react-router-dom

 3. url을 이용해서 페이지 보여줄꺼야 리액트한테 알려주는
   설정 main.jsx 
    url이 바뀌면 다른 화면이 나오는 세팅!BrowserRouter한다
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,

 4. 한곳에서 url경로를 관리!
 5. path="/" --> www.쇼핑몰.com --> localhost:5173/
*/