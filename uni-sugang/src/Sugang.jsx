// Sugang.jsx
// 수강 신청 페이지!
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LectureRow from "./components/LectureRow";

export default function Sugang() {
  // 1. 개설 강좌 마스터 데이터 정의
  // const 고정한다.
const ALL_LECTURES = [
  {
    id: 1,
    category: "전공필수",
    name: "웹 프로그래밍",
    professor: "김철수 교수",
    time: { day: "월", periods: [1, 2] },
    credit: 3,
    bgClass: "bg-blue-100 text-blue-700 border-blue-300",
  },
  {
    id: 2,
    category: "전공선택",
    name: "데이터베이스",
    professor: "이영희 교수",
    time: { day: "화", periods: [3, 4] },
    credit: 3,
    bgClass: "bg-green-100 text-green-700 border-green-300",
  },
  {
    id: 3,
    category: "전공선택",
    name: "인공지능 개론",
    professor: "정진우 교수",
    time: { day: "월", periods: [3, 4] },
    credit: 3,
    bgClass: "bg-purple-100 text-purple-700 border-purple-300",
  },
  {
    id: 4,
    category: "교양선택",
    name: "글쓰기 소통",
    professor: "김민재 교수",
    time: { day: "수", periods: [2] },
    credit: 2,
    bgClass: "bg-amber-100 text-amber-700 border-amber-300",
  },
  {
    id: 5,
    category: "전공필수",
    name: "알고리즘",
    professor: "최승우 교수",
    time: { day: "목", periods: [5, 6, 7] },
    credit: 4,
    bgClass: "bg-rose-100 text-rose-700 border-rose-300",
  },
  {
    id: 6,
    category: "교양선택",
    name: "기초 선형대수",
    professor: "박찬혁 교수",
    time: { day: "금", periods: [1, 2] },
    credit: 3,
    bgClass: "bg-teal-100 text-teal-700 border-teal-300",
  },
  {
    id: 7,
    category: "전공선택",
    name: "네트워크 기초",
    professor: "성진호 교수",
    time: { day: "화", periods: [3, 4] },
    credit: 3,
    bgClass: "bg-cyan-100 text-cyan-700 border-cyan-300",
  }, // 데이터베이스와 시간 중복용
  {
    id: 8,
    category: "교양선택",
    name: "현대 심리학",
    professor: "한혜진 교수",
    time: { day: "목", periods: [1, 2] },
    credit: 2,
    bgClass: "bg-orange-100 text-orange-700 border-orange-300",
  },
];

//신청과목을 여러개 저장해야되니 배열을 이용한다.
let [신청과목, set신청과목] = useState([]);

console.log(신청과목);
  return (
    <div className="wrap">
      <div className="sugang-box">
        <Link to="/dashboard"> &lt; 수강신청 메인페이지</Link>

        <div>
          <p>개설 강좌 검색</p>

          <select>
            <option value="">이수 구분(전체)</option>
            <option value="">전공필수</option>
            <option value="">전공선택</option>
            <option value="">교양선택</option>
          </select>
          <input type="text" placeholder="과목명 또는 교수명 입력..." />
        </div>

        <div className="과목 조회 결과">
          <h3>과목 조회 결과</h3>
          <table>
            <tr>
              <th>구분</th>
              <th>과목명</th>
              <th>교수</th>
              <th>시간</th>
              <th>학점</th>
              <th>신청</th>
            </tr>
            <LectureRow 과목정보={ALL_LECTURES[0]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[1]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[2]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[3]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[4]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[5]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[6]} 변수공유={set신청과목} 신청과목={신청과목} />
            <LectureRow 과목정보={ALL_LECTURES[7]} 변수공유={set신청과목} 신청과목={신청과목} />
          </table>
        </div>

        <div className="최종 신청 내역">
          <h3>최종 신청 내역</h3>
          <table>
            <tr>
              <th>구분</th>
              <th>과목명</th>
              <th>시간</th>
              <th>학점</th>
              <th>취소</th>
            </tr>
            {/* 신청과목 배열에 저장된 데이터들을 보이기 */}

            {/* 신청과목의 배열의 개수만큼 자동으로 태그를 만들어주는 map */}
            {신청과목.map((과목) => {
              return (
                <tr>
                  <td>{과목.category}</td>
                  <td>{과목.name}</td>
                  <td>{과목.professor}</td>
                  <td>
                    {과목.time.day} {과목.time.periods.join(",")}교시
                  </td>
                  <td>{과목.credit}</td>
                  <td>
                    <button
                      onClick={() => {
                        변수공유([...신청과목, 과목정보]);
                      }}
                    >
                      신청
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
