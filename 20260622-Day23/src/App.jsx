// link태그 rel =stylesheet href=""이거를 한 단어로 줄였다.
// 리액트에서 파일을 포함할 떄는 import하나만 쓰면 된다.
import "./App.css";
import Drink from "./component/Drink";

function App(){
  return (
    <>
    <h1>리액트를 사용하게 된 이유!</h1>
    <h2>첫번째 이유는 html태그들이 중복이 많이 된다.</h2>

    {/* class css에는 썼는데 리액트는 className 써야함 */}
    <Drink />
    <Drink />
    <Drink />
    

    <div className="drink-menus">
      <img src="https://www.ediya.com/files/menu/IMG_1780021002320.png" alt="1" />
      <p>블루베리</p>
      <button>선물하기</button>
    </div>

    </>
  );
}
export default App;
/* 
리액트를 사용하는 이유중에 HTML코드로 물건을 디자인 하면 HTML코드들이 중복이 된다.

 새로운 내용(태그)를 추가하려고 한다.
 중복되는 태그 전부가서 수정, 추가, 삭제 해야된다 불편하다!
 그래서 리액트를 쓴다.

 리액트에 새로운 기능!
 html에 없는 기능! 생겼다! 내가 직접 태그를 만들 수 있다!
 h2, p, img 태그들을 내가 직접 만들 수 있다.

 React를 쓰는 이유는 반복되는 UI를 컴포넌트 단위로 쪼개서 재사용할 수 있기 때문!
*/
