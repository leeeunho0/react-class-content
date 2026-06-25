// App.jsx
import './App.css';

function App() {
  
  let number = 20;
  console.log("개발자확인");

  let counter =0;
  // 입력한 검색어 저장!
  let search ="";

  // 리액트는 DOM구조 원본(딱 한번만 실행)과 DOM구조 사본을 가지고 있다.
  // 일반 변수들 let, const 화면이 처음 실행할 때 값을 보여주는데,
  // 문제가 이벤트(클릭, 입력)을 이벤트 감지를 못한다.
  // 변경된 내용을 원본에 실시간으로 지정해서 덮어쓰기 해서 화면에 보여야 된다.
  
  // 그래서 리액트가 변수들을 관리할 수 있도록 만들어줘야된다.
    // ★☆ 자바스크립트의 일반 변수들은 리액트가 감지를 못한다.☆★
  // 리액트한테 나 값이 변경됐어! 그러니깐 화면에 다시 보여줘!
  // useState()

  return (
    <>
      <h1>useState?</h1>
      <p>현재변수 number : {number}</p>
      <br />
      <h2>입력값 받기</h2>
      <input type="text" onChange={(이벤트)=>{
        console.log(이벤트.target);
        console.log(이벤트.target.value);
        search = 이벤트.target.value;
      }} />

      <br />
      <h3>입력한 값: {search}</h3>

      <br />
      <hr />


      <h2>버튼을 클릭하면 화면에 증가하기</h2>
      <h3>{counter}</h3>
      <button onClick={()=>{
        counter = counter +1;
        console.log("증가함:",counter);
      }}>눌러봐!</button>
    </>
  );
}

export default App;

// {변수명} HTML 태그에 값을 넣어주는 형태
// - 데이터 바인딩

// ()=>{} 화살표 함수
// 굳이 길게 function 이름(){} 불편하다는 거다!
// ()=>{} 키워드하고 함수명 없애라.
// 그리고 최대한 간단하게 실행하는 내용만 
// {}중괄호 안에 넣어라!
// 다른 태그들이 사용하지 않고 룰러봐 버튼에서만 한번 사용한다!

// onChange={(event)
// event는 리액트에서 어떤 이벤트가 발생했는지
// 저장하고 있는 변수다! event , e (실무함)