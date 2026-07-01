// Detail.jsx

import React from "react";

//상세페이지 태그가 중복되니 분리 시킨다.

export default function Detail({ pageName, title, price }) {
  return (
    <div>
      <h2>{pageName}</h2>
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}