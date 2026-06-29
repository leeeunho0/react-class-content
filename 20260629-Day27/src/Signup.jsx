import React, { useState } from 'react';

export default function Signup() {

  const [selectedDate, setSelectedDate] = useState('');
  const [create, setCreate] = useState('');
  const [gender, setGender] = useState("");

  let [develop, setDevelop] = useState(false);
  let [design, setDesign] = useState(false);
  let [marketing, setMarketing] = useState(false);
  let [business, setBusiness] = useState(false);

  let [checked, setChecked] = useState(false);



  return (
    <div className="box">
      <div className="account">
        <div className="title">
          <h2>회원가입</h2>
          <p>✖</p>
        </div>
        <div className="account-con">
          
          <p>이름</p>
          <input className='wid' type="text" placeholder="이름을 입력해주세요." />
          
          <p>이메일</p>
          <input className='wid' type="text" placeholder="OOO@email.com" />
          
          <p>생년월일</p>
          <input className='wid' type="date" value={selectedDate}
                 onChange={(e) => setSelectedDate(e.target.value)}/>
          
          <p>가입 경로</p>
          <select className='wid' onChange={(e)=>{
            setCreate(e.target.value);
          }}>
            <option value="">선택하세요</option>
            <option value="네이버">네이버</option>
            <option value="광고">광고</option>
            <option value="소개">소개</option>
          </select>

          <p>성별</p>
          <input type="radio" name="gender" onChange={(e)=>{
            setGender("남성");
          }} />남성
          <input type="radio" name="gender" onChange={(e)=>{
            setGender("여성");
          }} />여성
          <input type="radio" name="gender" onChange={(e)=>{
            setGender("선택안함");
          }} />선택안함

          <p>관심 분야 (중복 선택 가능)</p>
          <div className="check-1">
          <label>
            <input type="checkbox" onChange={(e)=>{
              setDevelop(e.target.checked);
            }}/>개발 / IT
          </label>
          <label>
            <input type="checkbox" onChange={(e)=>{
              setDesign(e.target.checked);
            }}/>디자인
          </label>
          </div>
          <br />
          <div className="check-2">
          <label>
            <input type="checkbox" onChange={(e)=>{
              setMarketing(e.target.checked);
            }}/>마케팅
          </label>
          <label>
            <input type="checkbox" onChange={(e)=>{
              setBusiness(e.target.checked);
            }}/>비지니스 / 기획
          </label>
          </div>
            <br /><br />

          <label>
            <input type="checkbox" 
               onChange={(e)=>{
                 setChecked(e.target.checked);
            }}/>
            [필수] 개인정보 수집 및 이용약관에 동의합니다.
          </label>
            <br /><br />

        <button className="can">취소</button>
        <button className="fin">가입 완료</button>

        </div>
      </div>
    </div>
  );
}
