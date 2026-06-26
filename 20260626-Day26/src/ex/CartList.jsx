// CartList.jsx

import React, { useState } from "react";

// 장바구니에서 여러개의 물건을 담을 때 사용한다.

export default function CartList() {
  //장바구니 배열을 만든다.
  let [cart, setCart] = useState([]);

  return (
    <div>
      <h2>체크박스를 이용해서 물건을 담는 예제</h2>
      <p>체크 박스는 체크 상태가 바뀌었을때 실행한다</p>
      <input
        type="checkbox"
        onChange={() => {
          setCart([...cart, "새우햄버거"]);
        }}
      />
      새우햄버거
      <input
        type="checkbox"
        onChange={() => {
          setCart([...cart, "감튀"]);
        }}
      />
      감튀
      <input
        type="checkbox"
        onChange={() => {
          setCart([...cart, "콜라"]);
        }}
      />
      콜라
      <input
        type="checkbox"
        onChange={() => {
          setCart([...cart, "불고기햄버거"]);
        }}
      />
      불고기햄버거
      <br />
      <hr />
      <h3>{cart}</h3>
    </div>
  );
}