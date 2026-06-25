//Question2.jsx
import React from "react";

export default function Question2({set현재페이지}) {
  return (
    <div className="modal">
      <p>Question 2 / 3</p>

      <h1>✈️ Travel Style Test</h1>

      <h2>숙소를 고른다면?</h2>

      <button
        onClick={() => {
          set현재페이지("question3");
        }}>
        🏨 Hotel
      </button>

      <button
        onClick={() => {
          set현재페이지("question3");
        }}>
        🏕️ Camping
      </button>
    </div>
  );
}