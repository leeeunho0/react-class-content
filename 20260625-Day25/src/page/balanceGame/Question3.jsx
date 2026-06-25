// Question3.jsx
import React from "react";

export default function Question3({ set현재페이지 }) {
  return (
    <div className="modal">
      <p>Question 3 / 3</p>

      <h1>✈️ Travel Style Test</h1>

      <h2>누구와 여행을 가고 싶나요?</h2>

      <button
        onClick={() => {
          set현재페이지("result");
        }}>
        👨‍👩‍👧 Friends
      </button>

      <button
        onClick={() => {
          set현재페이지("result");
        }}>
        🙋 Alone
      </button>
    </div>
  );
}