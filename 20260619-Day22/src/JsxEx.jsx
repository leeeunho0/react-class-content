// JsxEx.jsx
// import 포함하다!
// 현재 src폴더 안에 있는 JsxEx.css 파일을 포함해라.
// <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
import "./JsxEx.css";

// HTML 에서 리액트로 넘어오게된 이유!
// - 태그들이 중복적으로 나오기 때문에 불편했다.
// - 내가 직접 태그를 만들 수 있다.

function JsxEx(){
  // 간단한 블로그
  // getEl~~~~ 안해도됨!
  // 변수를 만들어서 내용(content)을 {} 이용해서 쉽게 변경할 수있다.

  let post = "강남 우동 맛집";
  let title = "곱창님";

  // 리액트에서 css 클래스명 작성할 때는 class 못쓴다.
  // 리액트가 class 설정을 다른 곳에서 사용하기 위해서 예약을 걸어둔 상태가!
  // class 디자인파일css 클래스명을 쓸때는 className = "그룹명";
  return (
    <>
      <h2>Jsx(리액트를 사용하는 이유)</h2>
      <div className="blog-post">
        <h3>{title}</h3>  
        <p>여기에 자바스크립트 변수 꽂고 싶으면?</p>
        <p>{post}</p>
      </div> 
      
      <div className="blog-post">
        <h3>블로그2임</h3>
        <p>{post}</p>
      </div>

      <h2>{post}</h2>
    </>
  )
}
// 현재 내가만든 JsxEx 페이지를 보이기 위해서 main에게 보내기
// 이 파일을 다른곳에서도 가져다 쓸 수 있게 허락한다.
export default JsxEx;