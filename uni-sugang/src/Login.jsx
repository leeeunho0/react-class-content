import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login-wrap">
      <div className="login-card">
        {/* 대학교 아이콘 마크 */}
        <div className="login-logo-wrap">
          <i className="fa-solid fa-university" style={{ fontSize: "36px" }}></i>
        </div>
        
        <h2>포털 로그인</h2>
        <p className="login-subtitle">2026학년도 2학기 수강신청</p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* 학번 입력란 */}
          <div className="form-group">
            <label className="form-label">학번 (ID)</label>
            <div className="input-wrapper">
              <span className="input-icon"><i className="fa-solid fa-id-card"></i></span>
              <input type="text" className="form-input" placeholder="학번을 입력하세요" defaultValue="202112345" />
            </div>
          </div>

          {/* 비밀번호 입력란 */}
          <div className="form-group">
            <label className="form-label">비밀번호 (PW)</label>
            <div className="input-wrapper">
              <span className="input-icon"><i className="fa-solid fa-lock"></i></span>
              <input type="password" className="form-input" placeholder="비밀번호를 입력하세요" defaultValue="••••••••" />
            </div>
          </div>

          {/* 하단 노란색 안내 상자 */}
          <div className="login-guide-box">
            <strong><i class="fa-solid fa-triangle-exclamation"></i> 로그인 안내</strong>
            <p>데모 버전으로 어떤 계정 정보든 로그인 버튼만 누르면 입장할 수 있습니다.</p>
          </div>

          {/* 로그인 버튼 */}
          <Link className="btn-primary" to="/dashboard">안전 로그인</Link>

        </form>
      </div>
    </div>
  );
}
/* <button type="submit" className="btn-primary">
  안전 로그인 <i className="fa-solid fa-arrow-right"></i>
</button> */