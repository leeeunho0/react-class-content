// NaverBlogPage.jsx

import React from 'react'
import Blog from '../component/Blog'

export default function NaverBlogPage() {
  return (
    <div className="naver-blog-box">
      {/* 1. HTML코드로 컴포넌트 나누지 말기! */}
      <div className="naver-blog-content-box">
        <h2>Naver Blog</h2>
        <ul>
          <li><span>전체</span></li>
          <li>스포츠</li>
          <li>스타/연예인</li>
          <li>국내여행</li>
          <li>자동차</li>
          <li>음악</li>
          <li>원예/재배</li>
          <li>어학/외국어</li>
        </ul>
      </div>

      <div className="blogs">
        <Blog title="[진주]펑거 탑마트에서 겟! 돼지고기 전용 와인'돈블랑&돈블랙' 솔직 후기"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ex reprehenderit unde rerum? Deserunt laudantium ducimus dolor voluptate ipsum repellat odit dolorem expedita debitis! Quae unde distinctio eaque assumenda non!"
              image="https://postfiles.pstatic.net/MjAyNjA2MjJfMjY1/MDAxNzgyMTA1MDY3NDEw.YfyakN5E98zom7gQJ1PGwJs2kBPrq51sDfctD4MJdqAg.X6G_q4MwvX_Wqno735X8Pa30NtcFsR3O54fyyc3uq48g.PNG/900_%EC%97%AC%ED%96%89_%EC%82%AC%EC%A7%84_%EB%B0%B0%EA%B2%BD_%EA%B5%AD%EB%82%B4%EC%97%AC%ED%96%89_%EC%B6%94%EC%B2%9C_%EC%9E%A5%EC%86%8C_%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8_%EA%B2%8C%EC%8B%9C%EB%AC%BC_20260622_140947_0000.png?type=w966"
              comment="공감 8 댓글 9"
              
        />
        <Blog title="포켓몬 챔피언스 포챔스 메가리아츄Y 샘플 랭크 게임 실전 강의"
              content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus soluta, voluptates dolores nostrum in blanditiis. Iure eveniet totam nulla obcaecati nemo esse dicta ipsa pariatur debitis dolores fugit, corporis consequatur?"
              image="https://postfiles.pstatic.net/MjAyNjA2MjFfMTk1/MDAxNzgyMDI3NjU3MjQ3.TUuqd_r6qj53ZtiqOCQ4c1gzVeb5cQ-asSBAyGYwB9wg.CHERxAisuIM5Qn5ABmvZTJ1Pe14s3UknQ3wXsXo5ldsg.PNG/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94..png?type=w966"
              comment="공감 12 댓글 1"
        
        />
        <Blog title="창원 상남동 맛집 창원 회식장소로 좋은, 부자회관 더블랙 후기"
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia maxime praesentium sed voluptas distinctio, consequatur aliquam earum cumque repellat, dolor quae inventore perferendis eveniet ducimus alias asperiores eaque a consectetur."
              image="https://postfiles.pstatic.net/MjAyNjA2MjJfNTgg/MDAxNzgyMDk4NTA4MDU5.nqONg_JVsMoqyt_ToRPUjiLDXXS6ZGILp-ysHCIEf5Ug.LUdiUI0986j-7aFfoLXmlgTKhOea2iy9YshmTsWVCuUg.JPEG/20260619_131248.jpg?type=w466"
              comment="공감 217 댓글 18"
        
        />

      </div>
      
    </div>
  )
}