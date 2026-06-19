import React from "react";
import Card from "./component/Card";
//ProductPage.jsx

export default function ProductPage() {
  return (
    <div>
      <h2>오늘의 추천 상품</h2>

      <Card path="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6b0420bd-f05e-4b51-bfdd-2dbc1caaf44b/NIKE+STRUCTURE+PLUS.png"
            title="나이키 운동화"
            price="50,000원"
      />

      <Card path="https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/997d/a180df71afb39d0c990932860ab126863507069d726c5a79274f9da1d0c6.jpg"
            title="아디다스 운동화"
            price="45,000원"
      />

      <Card path="https://image2.lotteimall.com/goods/29/99/37/2091379929_1.jpg/dims/resizemc/550x550/optimize"
            title="뉴발란스 운동화"
            price="60,000원"
      />

      <div className="card">
        <img src="https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6b0420bd-f05e-4b51-bfdd-2dbc1caaf44b/NIKE+STRUCTURE+PLUS.png" alt="" />
        <h3>나이키 운동화</h3>
        <p>50,000원</p>
      </div>

      <div className="card">
        <img src="https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/997d/a180df71afb39d0c990932860ab126863507069d726c5a79274f9da1d0c6.jpg" alt="" />
        <h3>아디다스 운동화</h3>
        <p>45,000원</p>
      </div>

      <div className="card">
        <img src="https://image2.lotteimall.com/goods/29/99/37/2091379929_1.jpg/dims/resizemc/550x550/optimize" alt="" />
        <h3>뉴발란스 운동화</h3>
        <p>60,000원</p>
      </div>
    </div>
  );
}