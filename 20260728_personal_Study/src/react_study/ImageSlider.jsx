import { useState } from "react";

// 1. 같은 폴더(src/react_study/)에 있는 이미지 파일 가져오기 (import)
import kotaro1 from "./kotaro1.jpg";
import kotaro2 from "./kotaro2.jpg";
import kotaro3 from "./kotaro3.jpg";

// 2. 불러온 이미지 변수들을 배열에 넣습니다.
const 이미지배열 = [kotaro1, kotaro2, kotaro3];

export default function ImageSlider() {
  // 3. 현재 보여줄 이미지 순서 관리
  const [순서, set순서] = useState(0);

  // 다음 이미지로 이동하는 함수
  function handleNext() {
    if (순서 === 이미지배열.length - 1) {
      set순서(0); // 마지막이면 다시 첫 번째로
    } else {
      set순서(순서 + 1);
    }
  }

  return (
    <div>
      <img 
        src={이미지배열[순서]} 
        alt="슬라이드" 
        onClick={handleNext} 
      />
      <p>{순서 + 1} / {이미지배열.length}</p>
    </div>
  );
}

