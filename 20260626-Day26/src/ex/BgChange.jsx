// BgChange.jsx

import React, { useState } from "react";

// 현재 기본 배경은 그레이!  (false)
// 버튼을 클릭하면 본인이 원하는 배경색으로 변경(true)
export default function BgChange() {
  let [bgColor, setBgColor] = useState(false);

  return (
    <div className={bgColor ? "my-bg" : "box"}>
      <button
        onClick={() => {
          setBgColor(!bgColor);
        }}
      >
        배경색 변경
      </button>
    </div>
  );
}