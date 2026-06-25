// BalanceMain.jsx

import React, { useState } from "react";
import "./StartPage.css";
import StartPage from "./StartPage";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import ResultPage from "./ResultPage";

export default function BalanceMain() {
  // useState 여기서만(BalanceMain.jsx) 사용 가능하다
  // 다른 페이지로 값을 전달하려고 해도 안된다.

  // 현재 페이지의 값을 각각 페이지가 변경할 수 있도록
  // 변경하는 함수인 set현재페이지 함수를 넘겨줘야 된다.
  // BalanceMain.jsx 안에 있는 저장공간인 useState()의 값을 바꾼다.
  // 바뀌면 리액트가 값이 바꿧다!
  // 그러면 화면을 다시 바꾼다.
  
  let [현재페이지, set현재페이지] = useState("start");
  console.log(현재페이지);

  return( 
  <div className="wrap">
    {현재페이지 == "start" && <StartPage set현재페이지={set현재페이지} />}
    {현재페이지 == "question1" && <Question1 set현재페이지={set현재페이지} />}
    {현재페이지 == "question2" && <Question2 set현재페이지={set현재페이지} />}
    {현재페이지 == "question3" && <Question3 set현재페이지={set현재페이지} />}
    {현재페이지 == "result" && <ResultPage set현재페이지={set현재페이지} />}
  </div>
);

}