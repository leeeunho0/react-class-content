import { useState } from 'react';

export default function App() {
  // 자바스크립트 변수는 화면에 안보인다.
  let 체크박스값 = "";
  
  // 리액트에서 값을 저장할 때는 useState()
  // checked 는 변수 값을 사용할 때
  // setChecked 값 바꾸고 화면도 다시 적용해!(리렌더링)

  // 실제 체크 박스들은 태그 안에 설정으로 태그가 되었는지 안 되었는지 저장하는 설정값!
  let [checked, setChecked] = useState(false);
  return (
    <div>
      <h2>체크박스를 클릭할때마다 값을 저장</h2>
      
      <label>
        <input type="checkbox" 
               onChange={(이벤트정보)=>{
                setChecked(이벤트정보.target.checked);
        }}/>
        약관에 동의합니다.
      </label>

      <h3>체크란 값 확인 : {checked + ""}</h3>
    </div>
  );
}
// HTML도 리액트 똑같다!
// 태그 내용은(content)부분 true, false, null 은 화면에 안보인다.
// 화면에 안 보인다. 문자만!
// true -> 1
// false -> 0
// 컴퓨터는 숫자만 알고 있다. 거짓은 무조건 0