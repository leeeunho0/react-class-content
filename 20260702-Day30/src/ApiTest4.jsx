// ApiTest4.jsx
import React from 'react';

export default function ApiTest4() {

let 인벤토리 = {
  player: {
    name: "용사",
    inventory: [
      { item: "물약", count: 3, effect: { hp: 50 } },
      { item: "검", count: 1, effect: { attack: 20 } },
    ],
  },
};
// 검의 공격력(attack)을 콘솔에 찍어보세요. 그리고 inventory를 map()으로 순회하며 
// 각 아이템 이름과 효과(hp 또는 attack)를 화면에 렌더링하세요.
console.log(인벤토리.player.inventory[1].effect);


let 시청목록 = {
  data: [
    { title: "오징어게임", episodes: 9, cast: ["이정재", "박해수"] },
    { title: "더글로리", episodes: 16, cast: ["송혜교"] },
  ],
};
//  오징어게임의 두번째 출연진을 콘솔에 찍어보세요. 
// 그리고 map()으로 전체 작품의 제목과 출연진 전체를 화면에 렌더링하세요. 
// (출연진은 배열이므로 다시 한번 map() 또는 join() 활용)
console.log(시청목록.data[0].cast[1]);

let 편의점재고 = {
  store: "GS25",
  products: [
    { name: "삼각김밥", stock: 15, price: 1500 },
    { name: "콜라", stock: 0, price: 2000 },
  ],
};
// 재고가 0인 상품만 걸러서 화면에 렌더링하세요.

let 품절상품 = 편의점재고.products.filter((상품) => 상품.stock === 0);
  return (
    <div>
      <h2>실습 페이지</h2>
      <h3>중급문제1</h3>
      <p>아이템 이름: {인벤토리.player.inventory[0].item}</p>
      {인벤토리.player.inventory.map((item, index) => (
      <p key={index}>
        {item.item} : {item.effect.hp && `HP +${item.effect.hp}`}
        {item.effect.attack && `공격력 +${item.effect.attack}`}
      </p>
))}
      <br /><br /><br />
      <hr />

      <h3>중급문제2</h3>
      {시청목록.data.map((작품, index) => (
      <div key={index}>
        <p>{작품.title}</p>
        <p>출연진: {작품.cast.join(", ")}</p>
      </div>
      ))}
      <br /><br /><br />
      <hr />

      <h3>중급문제3</h3>
      {품절상품.map((상품, index) => (
        <p key={index}>{상품.name} - 품절</p>
      ))}

    </div>
  );
}
