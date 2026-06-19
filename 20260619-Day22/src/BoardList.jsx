// BoardList.jsx

import Post from "./component/Post";

// BoardList로 새로운 페이지를 만든다.
// 중복되는 태그들을 새로운 태그를 만들어서 이용한다.
// 실생활에서 도장!
// 병원 접수증, 서비스센터 접수증
function BoardList(){

  return(
    <>
    <h2>게시글 페이지</h2>

    <Post />
    <Post />
    <Post />
    </>
  )
}

export default BoardList;