// ResultPage.jsx
import React from "react";

export default function ResultPage({set현재페이지}) {
  return (
    <div className="modal">
      <h1>🎉 여행 스타일 결과</h1>

      <h2>🌴 Healing Traveler</h2>

      <p>
        당신은 여유롭게 쉬면서 자연과 풍경을 즐기는 여행을 좋아하는
        스타일입니다.
      </p>

      <button
        onClick={() => {
          set현재페이지("start");
        }}
      >
        🔄 다시 시작
      </button>
    </div>
  );
}