// CartPage.jsx
// url ="/"
import axios from 'axios';
import React, { useState } from 'react';

export default function CartPage() {

  const [ 데이터, set데이터] = useState([]);
  const [상품목록, set상품목록] = useState([]);

  return (
    <div>
      <h2>장바구니 메인 페이지</h2>

      <h3>1. Axios 이용해서 carts에서 데이터 받아서 콘솔에 찍기</h3>
      <h3>2. 그 중에 id가 1번인 사람의 products를 모두 콘솔에 찍기</h3>
      <h3>3. 그 중에 title, price, thumbnail 뽑아서 화면에 보이기</h3>
      <h3>4. 동적라우팅을 이용해서 id 1이면 상세페이지 만들기</h3>

      <br /><br />
      <hr />

{/* 1. Axios 이용해서 carts에서 데이터 받아서 콘솔에 찍기 */}
      <button onClick={()=>{
        axios.get("https://dummyjson.com/carts").then((응답)=>{
          console.log(응답);
        })
      }}>데이터 콘솔에 찍기</button>
<br />

      

{/* 2. 그 중에 id가 1번인 사람의 products를 모두 콘솔에 찍기 */}
      <h3>id 1번 꺼내기</h3>
      {
        데이터.map((아이디) => {
          return <p key={아이디.id}>{아이디.id}</p>;
        })
      }

      <button onClick={() => {
        axios.get("https://dummyjson.com/carts").then((응답) => {
          // 서버에서 가져온 전체 배열 (carts)
          let 모든카트데이터 = 응답.data.carts;
          
          // .find()는 조건에 맞는 아이템 하나를 찾아줍니다.
          let 찾은데이터 = 모든카트데이터.find((아이템) => 아이템.id == 1);
          
          // 찾은 데이터가 존재하면 콘솔에 products 출력하기
          set상품목록(찾은데이터.products);
        });
      }}>아이디 1번 콘솔에 찍기</button>
      

      {/* 3. 그 중에 title, price, thumbnail 뽑아서 화면에 보이기 */}
      <h3>[3번 결과] id 1번 장바구니 상품 목록</h3>
      {
        상품목록.map((상품) => {
          return (
            <div key={상품.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
              
              {/* 이미지 띄우기 */}
              <img src={상품.thumbnail} alt={상품.title} width="100" />
              {/* 상품명(title)과 가격(price) 띄우기 */}
              <p>상품명: {상품.title}</p>
              <p>가격: ${상품.price}</p>
            </div>
            
          );
        })
      }


    </div>
  );
}
// 1~3 까지 제미나이참고함