// PostPage.jsx

import React from "react";
import Post from "../component/Post";

// 배열의 개수만큼 매번(반복하면서 태그를 만들기 때문에!)
function 게시글출력(게시글) {
  // 실질적으로 게시글변수안에 있는 내용들을 보낼 때는
  // 변수의 값을 넣어주는 거기 때문에 {한번 감싸줘야된다!}
  return <Post category={게시글.category}
               date={게시글.date}
               title={게시글.title}
               content={게시글.content}
               />;
}

export default function PostPage() {
  // 데이터
  //  현재 초기 데이터들은 고정되어서 변경할 일이 없다!
  // 실무에서는 실제 테스트하는 데이터들의 변수명 대문자로
  // 사용하고 const로
  const INITIAL_POSTS = [
    {
      id: 1,
      title: "⚡ React에서 map() 함수를 마스터하는 가장 빠른 방법!",
      content:
        "안녕하세요! React 개발자 여러분. map() 함수를 사용할 때 가장 중요한 점은 바로 'key' 프로퍼티를 고유하게 부여하는 것입니다. 그렇지 않으면 React는 어떤 아이템이 변경되었는지 파악하기 어려워 전체를 다시 그리게 됩니다. 이 게시판 소스 코드를 뜯어보면서 key가 어떻게 쓰였는지 직접 확인해보세요!",
      author: "리액트마스터",
      category: "정보공유",
      date: "2026-06-23",
      likes: 24,
      views: 142,
      comments: [
        {
          id: 101,
          author: "코딩꿈나무",
          text: "상세한 설명 감사합니다! map이 한눈에 이해되네요.",
          date: "2026-06-23",
        },
        {
          id: 102,
          author: "어드밴스드",
          text: "key 값으로 index 대신 id를 쓰는 버릇을 들여야겠군요.",
          date: "2026-06-23",
        },
      ],
    },
    {
      id: 2,
      title:
        "질문있습니다: map 안에서 자식 컴포넌트를 호출할 때 성능 차이가 있나요?",
      content:
        "게시판 목록을 구현하면서 `posts.map(post => <PostCard post={post} />)` 형태로 구성하는 것과, 내부에서 직접 JSX를 리턴하는 것 사이에 성능의 유의미한 차이가 있는지 궁금합니다. 대용량 데이터 렌더링 시 최적화 팁이 있다면 공유해주세요!",
      author: "헬프미코딩",
      category: "질문/답변",
      date: "2026-06-22",
      likes: 8,
      views: 89,
      comments: [
        {
          id: 103,
          author: "시니어개발자",
          text: "JSX 직렬화나 가상 돔 비교 측면에서 성능 차이는 미미합니다. 다만 가독성과 컴포넌트 재사용성 면에서 별도 분리하는 것을 추천합니다.",
          date: "2026-06-22",
        },
      ],
    },
    {
      id: 3,
      title: "[공지] 2026년 상반기 리액트 스터디 및 토론 게시판 오픈 안내",
      content:
        "누구나 자유롭게 리액트에 대한 생각을 나누고 코드를 업로드할 수 있는 토론의 장을 개설하였습니다. 타인에 대한 존중을 기본 규칙으로 하며, 유용한 지식 공유에는 언제나 따뜻한 '좋아요'와 격려의 댓글을 남겨주세요. 활발한 참여 기대합니다!",
      author: "운영자",
      category: "공지사항",
      date: "2026-06-20",
      likes: 31,
      views: 215,
      comments: [],
    },
    {
      id: 4,
      title: "오늘 갤럭시 S26 울트라 매장 가서 구경하고 왔어요 📱",
      content:
        "이전 코드 예제에 등장한 갤럭시 S26 울트라 실물을 매장에서 직접 보고 왔습니다! 그레이 색상이 정말 고급스럽게 뽑혔더라고요. 기존 S25에 비해 얇아진 베젤과 뛰어난 그립감이 인상적이었습니다. 아이폰 17 pro 출시 전까지 고민이 아주 깊어질 것 같습니다.",
      author: "테크러버",
      category: "자유게시판",
      date: "2026-06-19",
      likes: 15,
      views: 112,
      comments: [
        {
          id: 104,
          author: "소비요정",
          text: "저도 그레이 실물 보러 가야겠어요! 지름신이 강림하네요 ㅎㅎ",
          date: "2026-06-20",
        },
      ],
    },
  ];

  return (
    <section className="postpage-section">


      <div className="post-header">
        <div className="post-header-log">
          <p className="post-logo">⚛</p>
          <div className="post-header-text">
            <h2>Js Board Hub</h2>
            <p>map() 기반 웹 컴포넌트 게시판</p>
          </div>
        </div>
        <button>+ 새 게시글 추가</button>
      </div>




      <div className="post-search-box">

        <div className="search-input">
          <input type="text" placeholder="🔍제목,작성자,내용으로 검색하세요" />
          <ul>
            <li>
              <button>전체</button>
            </li>
            <li>
              <button>공지사항</button>
            </li>
            <li>
              <button>자유게시판</button>
            </li>
            <li>
              <button>질문/답변</button>
            </li>
            <li>
              <button>정보공유</button>
            </li>

          </ul>

        </div>
          <hr />
      </div>
      <div className="post-contents">
        {
          // div 태그 안에 자바스크립트 코드를 작성할 수 있다.
          // 그래서 {} 이용한다.
          // 자바스크립트를 이용해서 태그를 만들꺼야!
          INITIAL_POSTS.map(게시글출력)
        }
      </div>
    </section>
  );
}