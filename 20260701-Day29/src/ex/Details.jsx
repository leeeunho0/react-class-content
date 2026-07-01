// Details.jsx
import React, { useState } from 'react';
import Detail from '../components/Detail';
import { useParams } from 'react-router-dom';

export default function Details() {
  const 상품목록 = [
    { id: 1, pageName: "첫번째 페이지", title: "청귤", price: 12000 },
    { id: 2, pageName: "두번째 페이지", title: "체리", price: 12000 },
    { id: 3, pageName: "세번째 페이지", title: "사과", price: 12000 },
  ];
  // URL에서 :id 값을 가져오는 함수
  // useParams() 값들을 객체 형식인 key : value으로 저장한다.
  // { id } -> 객체 타입으로 뽑아줘 그리고 key id 다!
  let { id } = useParams();
  console.log(id);
  let { num } = useParams();
  console.log("/post/:", num);
  // let { id, num } = useParams();
  // console.log(id);
  // console.log("/post/:", num);

  // map은 배열에서 하나씩 꺼내오면서 반복! 개수만큼 반복만!
  // find() 도 map처럼 자동 반복이 된다.
  // 배열에서 조건에 맞는 첫 번째 데이터를 찾아주는 함수!
  let 상품 = 상품목록.find((물건하나)=> 물건하나.id == id);
  console.log(상품);
  return (
    <div>
      <Detail title={상품.title} price={상품.price} pageName={상품.pageName}/>
    </div>
  );
}

/*
Props로 데이터를 넘기게 되면 고객들이 URL을 치고 들어오거나 
혹은 새로고침을 하면 데이터가 리셋되는 상황!
데이터가 없는경우 발생할 수 있다.
*/
/* <button onClick={()=>{
  set상품({
    pageName : "첫번째 페이지",
    title : "청귤",
    price : 12000,
  });
}}>첫번째 상품</button>
<button onClick={()=>{
  set상품({
    pageName : "두번째 페이지",
    title : "체리",
    price : 12000,
  });
}}>두번째 상품</button>
<button onClick={()=>{
  set상품({
    pageName : "세번째 페이지",
    title : "사과",
    price : 12000,
  });
}}>세번째 상품</button>
*/