// Post.jsx

// 게시글 한 건을 보여주는 태그!
// 컴포넌트 = 재사용!
// 반복되는 코드들 -> 태그를 추가하거나 수정하거나 삭제할 대 불편함
//  -> 컴포넌트 (역할분리) -> 재사용

function Post(){
  return(
    <div>
      <h3>첫번째 공지</h3>
      <p>HTML 마무리 잘하기</p>
    </div>
  )
}
export default Post;