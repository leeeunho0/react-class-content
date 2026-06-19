// Info.jsx
// 매번
// 우리가 만든 페이지를 다른 곳에서도 또 사용
import Member from "./component/Member";
import "./Info.css";


function Info(){
  // 페이지 만들면 main에게 보내줘야된다.
  // return 현재 페이지를 보낸다!
  // 여러개를 한꺼번에 묶어서 그룹을 지어서!
  return (
    <>
    <Member />
    <Member />
    <Member />
    </>
  )
}
// 메인한테 위에서 만든 return 값을 내보내기 하겠다.
// 위에서 만든 페이지 태그들을 내보내기 하겠다.
export default Info;

// <div className="profiles">
//     <div className="profile">
//       <img src="https://pbs.twimg.com/media/HIMS7KCbIAAQHdc.jpg" alt="1" />
//       <h2>Kotaro</h2>
//       <p>full-stack</p>
//     </div>

//     <div className="profile">
//       <img src="https://pbs.twimg.com/profile_images/1127053896197726208/bfMvgfMR_400x400.jpg" alt="1" />
//       <h2>Aty</h2>
//       <p>front-end</p>
//     </div>

//     <div className="profile">
//       <img src="https://pbs.twimg.com/media/G5jHTqgbkAABmvs.jpg" alt="1" />
//       <h2>Hana</h2>
//       <p>back-end</p>
//     </div>

//     <div className="profile">
//       <img src="https://m.health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg" alt="1" />
//       <p className="new"><span>New</span></p>
//       <h2>Neko</h2>
//       <p>front-end</p>
//     </div>
//     {/* 나만의 태그를 만들기! */}
//     </div>
