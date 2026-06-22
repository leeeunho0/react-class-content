import "./App.css";

function App() {
  return (
  <>
    <h1>클론코딩</h1>
    <h2>public?</h2>
    <p>누구나 바로 꺼내 쓸 수 있는 폴더!</p>
    {/* 기본적으로 리액트는 / 
    public 폴더 안에 이미지들은 파일명만 써서 가져온다
    public 폴더는 항상 프로젝트 루트 지군으로 접근한다.
    */}
    <img src="/project1.webp" alt="1" />
    <img src="project2.webp" alt="2" />

  </>
  );
}

export default App;