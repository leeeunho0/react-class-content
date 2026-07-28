import { useState } from "react";

export default function ColorPicker() {
  const [색상, set색상] = useState("black"); // ① 초기 색상

  return (
    <div>
      <input
        type="text"
        placeholder="색깔 이름 입력 (예: red)"
        onChange={(이벤트) => {
          set색상(이벤트.target.value); // ② 입력값으로 색상 변경
        }}
      />
      <h2 style={{ color: 색상 }}>미리보기 텍스트</h2> {/* ③ 적용 */}
    </div>
  );
}