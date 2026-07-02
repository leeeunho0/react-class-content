// ApiTest3.jsx
import React, { useState } from 'react';

export default function ApiTest3() {
  
  let 약물정보 = {
    이름 : "타이레놀",
    회사 : "한국얀센",
    가격 : 5000,
  };

  let 응답데이터 = [
    {
      data : [1,2,3,4,5,6,7,8],
    },
  ];
  // 위에 데이터는 배열로 쌓여있다.
  // 처음 접근을 할 때는 배열의 순서를 가지고 접근한다.
  // console.log(응답데이터);
  // console.log(응답데이터[0]);
  // console.log(응답데이터[0].data);
  // console.log(응답데이터[0].data[3]);

  let 응답데이터2 = {
    data: {
      data : [1,2,3,4,5,6,7,8],
    },
};


 let 응답영화데이터 = {
    data: [{ title: "아바타", price: 15000 }],
  };

  // 응답영화데이 안에서 아바타의 가격을 콘솔에 찍기!
  // console.log(응답영화데이터.data[0].title,"가격은",응답영화데이터.data[0].price);

  let 응답캐릭터데이터 = {
  data: [
    { name: "전사", level: 10 },
    { name: "마법사", level: 15 },
  ],
};
  // 응답캐릭터데이터에서 콘솔에 아래처럼 찍기
  // 마법사 레벨은 15입니다.

  // console.log(응답캐릭터데이터.data[1].name,"레벨은",응답캐릭터데이터.data[1].level,"입니다.");


  let 응답데이터3 = {
    carts: [
      {
        id: 1,
        products: [
          {
            id: 162,
            title: "Blue Frock",
            price: 29.99,
            quantity: 4,
            total: 119.96,
            discountPercentage: 12.13,
            discountedTotal: 105.41,
            thumbnail:
              "https://cdn.dummyjson.com/product-images/tops/blue-frock/thumbnail.webp",
          },
          {
            id: 113,
            title: "Generic Motorcycle",
            price: 3999.99,
            quantity: 3,
            total: 11999.97,
            discountPercentage: 12.1,
            discountedTotal: 10547.97,
            thumbnail:
              "https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/thumbnail.webp",
          },
          {
            id: 122,
            title: "iPhone 6",
            price: 299.99,
            quantity: 3,
            total: 899.97,
            discountPercentage: 6.69,
            discountedTotal: 839.76,
            thumbnail:
              "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp",
          },
          {
            id: 138,
            title: "Baseball Ball",
            price: 8.99,
            quantity: 2,
            total: 17.98,
            discountPercentage: 1.71,
            discountedTotal: 17.67,
            thumbnail:
              "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/thumbnail.webp",
          },
        ],
        total: 13037.88,
        discountedTotal: 11510.81,
        userId: 1,
        totalProducts: 4,
        totalQuantity: 12,
      },
      {
        id: 2,
        products: [
          {
            id: 86,
            title: "Man Short Sleeve Shirt",
            price: 19.99,
            quantity: 5,
            total: 99.95,
            discountPercentage: 6.83,
            discountedTotal: 93.12,
            thumbnail:
              "https://cdn.dummyjson.com/product-images/mens-shirts/man-short-sleeve-shirt/thumbnail.webp",
          },
          {
            id: 104,
            title: "Apple iPhone Charger",
            price: 19.99,
            quantity: 2,
            total: 39.98,
            discountPercentage: 18.52,
            discountedTotal: 32.58,
            thumbnail:
              "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-iphone-charger/thumbnail.webp",
          },
        ],
        total: 139.93,
        discountedTotal: 125.7,
        userId: 2,
        totalProducts: 2,
        totalQuantity: 7,
      },
    ],
  };

  // 1.carts 뽑기
  console.log("carts",응답데이터3.carts);
  console.log("carts id:1",응답데이터3.carts[0]);

  // 각각의 id값을 저장하려면 타입은 객체
  let [cart, setCart] = useState(응답데이터3.carts[0]);

  return (
    <div>
      <h3>약물 정보 보이기</h3>  
      <h3>약물명: {약물정보.이름}</h3>
      <p>회사명: {약물정보.회사}</p>
      <p>가격: {약물정보.가격}원</p>
    </div>
  );
}
