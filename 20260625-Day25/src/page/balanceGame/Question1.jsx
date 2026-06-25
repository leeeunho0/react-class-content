// Question1.jsx

import React from "react";

export default function Question1({set현재페이지}) {
  return (
    <section className="wrap">
      <div className="modal">
        <p>Question 1 / 3</p>

        <h1>✈️ Travel Style Test</h1>

        <h2>휴가를 떠난다면?</h2>

        <button
          onClick={() => {
            set현재페이지("question2");
          }}
        >
          🏖️ Beach
        </button>

        <button
          onClick={() => {
            set현재페이지("question2");
          }}
        >
          ⛰️ Mountain
        </button>
      </div>
    </section>
  );
}