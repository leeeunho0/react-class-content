import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter 주소가 바뀌면 알맞은 페이지로 이동해라!
     리액트한테 설정한다.
      url을 이용해서 화면을 저장하고 싶으면 아래 
      설정을 반드시 해야된다.
     */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);