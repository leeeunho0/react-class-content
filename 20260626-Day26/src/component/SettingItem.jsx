// SettingItem.jsx
// HTML 태그를 반복적으로 복사하지 말고! HTML에 새로운 태그를만들어서
// 가져가 사용하기  - 컴포넌트

import React from "react";

//  중복되는 태그들을 작은 조각으로 쪼갰다.
// 새로운 태그를 만들었더니 안에 내용이 똑같다.
// 각각 다른 내용들을 가져와서 사용하기 위해서 우리는 props
// 기능을 이용해서 Lab1.jsx-> SettingItem.jsx 데이터를
// 받아온다.(이동시킨다.)

export default function SettingItem({ icon, title, value, setValue }) {
  return (
    <div className="item">
      <span>
        {icon} {title}
      </span>
      <button onClick={() => setValue(!value)}>{value ? "ON" : "OFF"}</button>
    </div>
  );
}