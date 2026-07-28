import { useState } from "react";

function LoginCheck() {
  const [아이디, set아이디] = useState("");
  const [비밀번호, set비밀번호] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="아이디"
        onChange={(이벤트) => {
          set아이디(이벤트.target.value);
        }}
      />
      <input
        type="text"
        placeholder="비밀번호"
        onChange={(이벤트) => {
          set비밀번호(이벤트.target.value);
        }}
      />

      {아이디 !== "" && 비밀번호 !== "" && (   // ① 조건부 렌더링
        <p>입력 완료!</p>
      )}
    </div>
  );
}

export default LoginCheck;