// Lab.jsx
import React, { useState } from "react";
import SettingItem from "../component/SettingItem";


export default function Lab() {
// let [darkPage, setDarkPage] = useState(false);
// let [darkPhone, setDarkPhone] = useState(false);

  const [dark, setDark] = useState(false);
  const [alarm, setAlarm] = useState(true);
  const [wifi, setWifi] = useState(true);

  // 1) 여기에 useState 3개를 선언하세요
  // - 다크모드 상태 (기본값: false)
  // - 알림 상태 (기본값: true)
  // - 와이파이 상태 (기본값: true)


  return (
    <div className={dark ? "page darkPage" : "page"}>
      <div className={dark ? "phone darkPhone" : "phone"}>
        <h2>📱 설정</h2>
        <p>오늘 배운 useState 복습</p>

        <SettingItem
          icon="🌙"
          title="다크모드"
          value={dark}
          setValue={setDark}
        />

        <SettingItem icon="🔔" title="알림" value={alarm} setValue={setAlarm} />

        <SettingItem
          icon="📶"
          title="와이파이"
          value={wifi}
          setValue={setWifi}
        />

        <div className="result">
          <h3>현재 상태</h3>
          <p>다크모드 : {dark ? "켜짐" : "꺼짐"}</p>
          <p>알림 : {alarm ? "켜짐" : "꺼짐"}</p>
          <p>와이파이 : {wifi ? "켜짐" : "꺼짐"}</p>
        </div>
      </div>
    </div>
  );
}

{/*       
      <div className={darkPhone ? "phone darkPhone":"phone"}>
        <h1>🗼설정</h1>
        <p>오늘 배운 useState 복습</p>
        <p className="item"><span>🌙다크모드</span>
        <button onClick={()=>{
          setDarkPage(!darkPage);
          setDarkPhone(!darkPhone);
        }}>{darkPage ? "on": "off"}</button></p>
        <p className="item"><span>⭐알림설정</span>
        <button onClick={()=>{
          setAlam(!alam);
        }}>{alam ? "on": "off"}</button>
        </p>
        <p className="item"><span>🛰와이파이 </span>
        <button onClick={()=>{
          setWifi(!wifi);
        }}>{wifi ? "on": "off"}</button>
        </p>

        <div className="result">
          <h3>현재상태</h3>
          <p>{darkPage ? "다크모드 : on": "다크모드 : off"}</p>
          <p>{alam ? "알람 : on": "알람 : off"}</p>
          <p>{wifi ? "와이파이: on": "와이파이 : off"}</p>
        </div> */}