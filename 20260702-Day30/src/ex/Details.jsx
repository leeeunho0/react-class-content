// Details.jsx
// 상세페이지를 만든다.

import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  // 변경되는 URL값을 꺼내서 제주도 제주도에 대한 내용들을 가져오고
  // 서울이면 서울에 대한 내용들로 페이지를 구성!
  // url에서 :city의 값을 꺼내기!
  let { city } = useParams();
  console.log("현재 url 담긴 city 값:", city);

  const 여행지 = [
    {
      id: 1,
      url: "jeju",
      이름: "제주도",
      관광지: "성산일출봉",
      대표음식: "흑돼지",
      추천계절: "봄",
      특징: "맑은 바다와 아름다운 자연을 즐길 수 있는 섬",
      이미지:
        "https://dimg.donga.com/wps/NEWS/IMAGE/2025/02/26/131107122.1.jpg",
    },
    {
      id: 2,
      url: "seoul",
      이름: "서울",
      관광지: "경복궁",
      대표음식: "불고기",
      추천계절: "가을",
      특징: "대한민국의 수도로 역사와 현대 문화가 함께 있는 도시",
      이미지:
        "https://www.kh.or.kr/jnrepo/namo/img/images/000045/20230405103334542_MPZHA77B.jpg",
    },
    {
      id: 3,
      url: "busan",
      이름: "부산",
      관광지: "해운대",
      대표음식: "돼지국밥",
      추천계절: "여름",
      특징: "넓은 해변과 맛있는 해산물로 유명한 항구 도시",
      이미지:
        "https://t4.ftcdn.net/jpg/04/64/79/51/360_F_464795121_xjXakRKQmL84RrQDkRfjxHuKyQyVCbRT.jpg",
    },
  ];
  // find() 자동 반복 하면서 조건에 맞는 값 찾기!
  let 찾은여행지 = 여행지.find((여행지한건) => 여행지한건.url == city);

  let { 이름, 관광지, 이미지 } = 찾은여행지;
  return (
    <div>
      <h2>{이름} 상세페이지</h2>
      <img src={이미지} alt={관광지} />
      <p>대표 관광지: {관광지}</p>
    </div>
  );
}