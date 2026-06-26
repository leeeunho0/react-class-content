// GameCharList.jsx

import React, { useState } from 'react';

export default function GameCharList() {

  const [goods, setGoods] = useState([]);
  
  const totalPrice = goods.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="box">
      <h2>귀여운 캐릭터 저장하기</h2>
      <div className="goods">
        <div className="goods-list">
          <img 
          onClick={()=>{
            setGoods([
              ...goods, 
              {
                name: "한교동",
                price: 10000,
              },
            ]);            
          }}
          src="/img1.png"
          alt="한교동"
         />
          <h3>한교동</h3>
          <p>10000원</p>
        </div>

        

        <div className="goods-list">
          <img 
          onClick={()=>{
            setGoods([
              ...goods, 
              {
                name: "치이카와",
                price: 15000,
              },
            ]);            
          }}
          src="/img2.png"
          alt="치이가와"
          />
          <h3>치이카와</h3>
          <p>15000원</p>
        </div>

        <div className="goods-list">
          <img 
          onClick={()=>{
            setGoods([
              ...goods, 
              {
                name: "코타로",
                price: 50000,
              },
            ]);            
          }}
          src="/img3.png"
          alt="코타로" />
          <h3>코타로</h3>
          <p>50000원</p>
        </div>
      </div>

      <hr />
    <h3>선택한 캐릭터</h3>
     {goods.map((item, index) => (
          <p key={index}>
            {item.name} - {item.price}원
          </p>
        ))}
      <hr />
      <h2>총 구매액: {totalPrice}원</h2>
    </div>
  );
}

