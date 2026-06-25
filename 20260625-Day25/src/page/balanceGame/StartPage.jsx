// StartPage.jsx
// 밸런스게임 앱느낌
// 여행을 떠나는 스타일!

import React, { useState } from "react";

export default function StartPage({set현재페이지}) {
  console.log(set현재페이지);
  console.log("StartPage");
    return (
    <div className="modal">
      <h1>✈️ Travel Style Test</h1>

      <p>3개의 질문으로 여행 스타일을 알아보세요.</p>

      <button
        onClick={() => {
          set현재페이지("question1");
          console.log("찍히니?");
        }}
      >
        Start
      </button>
    </div>
  );
}