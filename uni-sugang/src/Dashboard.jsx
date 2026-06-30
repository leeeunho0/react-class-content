// Dashboard.jsx

import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="wrap">
      <div className="dash-box">
        <div className="dash-stu-info">
          <h2>학생 기본 정보</h2>
          <ul className="stu-list">
            <li>
              <span>성명</span>
              <strong>홍길동</strong>
            </li>
            <li>
              <span>학번</span>
              <strong>20212345</strong>
            </li>
            <li>
              <span>소속 대학</span>
              <strong>IT공학대학</strong>
            </li>
            <li>
              <span>소속 학과</span>
              <strong>컴퓨터공학과</strong>
            </li>
            <li>
              <span>학년 / 학기</span>
              <strong>3학년 2학기</strong>
            </li>
          </ul>
        </div>
        <div className="dash-sugang-notice">
          <div>
            <h3>수강 신청 공지사항</h3>
            <p>중요 공지 포함</p>
          </div>

          <div className="notice-imp">
            <p>
              <span>긴급</span> 컴퓨터공학과 '웹 프로그래밍' 강의실 변경 건
              <p>
                기존 공학관 302호에서 공학관 501호 전산실습실로 최종
                변경되었습니다.
              </p>
            </p>
          </div>

          <div className="notice">
            <p>
              <span>공지</span> 교양 학부 신설 과목 '창의적 문제 해결' 이수 구분
              변경
              <p>자율교양에서 기초교양 영역으로 구분 수정 완료되었습니다.</p>
            </p>
          </div>

          {/* <button>수강신청 이동하기</button> */}
          <Link to="/sugang"><button>수강 신청 이동하기</button></Link>

        </div>
      </div>
    </div>
  );
}

/*
<div className="wrap">
      <div className="dash-box">
        <div className="dash-stu-info">
          <h2>학생 기본 정보</h2>
          <p>성명 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;홍길동</p>
          <p>학번 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20212345</p>
          <p>소속 대학 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IT공학대학</p>
          <p>소속 학과 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;컴퓨터공학과</p>
          <p>학년 / 학기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3학년 2학기</p>

          <p>
            신청 가능 학점 &nbsp;&nbsp;&nbsp;&nbsp;<span>최대 18 학점</span>
          </p>
        </div>
        <div className="dash-sugang-notice">
          <div>
            <h3>수강 신청 공지사항</h3>
            <p>중요 공지 포함</p>
          </div>

          <div className="notice-imp">
            <p>
              <span>긴급</span> 컴퓨터공학과 '웹 프로그래밍' 강의실 변경 건
              <p>
                기존 공학관 302호에서 공학관 501호 전산실습실로 최종
                변경되었습니다.
              </p>
            </p>
          </div>

          <div className="notice">
            <p>
              <span>공지</span> 교양 학부 신설 과목 '창의적 문제 해결' 이수 구분
              변경
              <p>자율교양에서 기초교양 영역으로 구분 수정 완료되었습니다.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
    */




/*
    <div className="dashboard-wrap">
      <div className="dashboard-card">
        <h2>학생 기본 정보</h2>
        <div className="dashboard-card-student">
          <p>성명</p><span>홍길동</span>
        </div>
        <div className="dashboard-card-student">
          <p>학번</p><span>202112345</span>
        </div>
        <div className="dashboard-card-student">
          <p>소속 대학</p><span>IT공과대학</span>
        </div>
        <div className="dashboard-card-student">
          <p>소속 학과</p><span>컴퓨터공학과</span>
        </div>
        <div className="dashboard-card-student">
         <p>학년 / 학기</p><span>32학기</span>
        </div>
        
        <div className="dashboard-card-student-point">
          <p>신청 가능 학점 <span>최대 18 학점</span></p>
        </div>
        
      </div>
      <div className="notice-card">
        <div className="notice-card-title">
          <h2>수강신청 공지사항</h2><span>중요공지 포함</span>
        </div>
        <div className="notice notice-cont-1">
          <span className="notice-1">긴급</span>
          <div className="notice-content">
            <h3>2026-2학기 수강신청 정각 동시 접속 제한 안내</h3>
            <p>동시 다발적 트레픽 방지를 위해 선착순 대기열이 자동 적용됩니다.</p>
          </div>
        </div>
        <div className="notice">
          <span className="notice-2">공지</span>
          <div className="notice-content">
            <h3>컴퓨터공학과 '웹 프로그래밍'강의실 변경 건</h3>
            <p>기존 공학관 302호에서 공학관 501호 전산실습실로 최종 변경되었습니다.</p>
          </div>
        </div>
        <div className="notice">
          <span className="notice-2">안내</span>
          <div className="notice-content">
            <h3>교양 학부 신설 과목 '창의적 문제 해결' 이수 구분 변경</h3>
            <p>자율교양에서 기초교양 영역으로 구분 수정 완료되었습니다.</p>
          </div>
        </div>
        <button>수강신청 관리실로 지금 이동하기</button>

      </div>
    </div>
*/