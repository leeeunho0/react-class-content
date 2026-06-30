// LectureRow.jsx
import React from "react";

// 테이블에 들어가는 반복되는 HTML 코드를 한행을 분리 시켰다.
// 새로운 태그를 만들었다. (컴포넌트)
export default function LectureRow({ 과목정보, 변수공유, 신청과목 }) {
  return (
    <tr>
      <td>{과목정보.category}</td>
      <td>{과목정보.name}</td>
      <td>{과목정보.professor}</td>
      <td>
        {과목정보.time.day} {과목정보.time.periods.join(",")}교시
      </td>
      <td>{과목정보.credit}</td>
      <td>
        <button onClick={()=>{
          변수공유([...신청과목, 과목정보])
        }}>신청</button>
      </td>
    </tr>
  );
}