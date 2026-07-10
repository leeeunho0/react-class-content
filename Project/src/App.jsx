import { useEffect, useRef, useState } from "react";

export default function App() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // 방향 전환 로직용 Ref
  const directionRef = useRef({ dx: 0, dy: 0 });
  // 게임 루프 타이머 저장용 Ref
  const timeoutRef = useRef(null);

  // 게임 상태 변수들을 Ref로 관리하여 재시작 시 초기화 용이하게 처리
  const gameStateRef = useRef({
    snake: [{ x: 10, y: 10 }],
    food: { x: 5, y: 5 },
    currentScore: 0,
    tileCount: 20, // 340 / 17 = 20칸
    gridSize: 17
  });

  const changeDirection = (direction) => {
    if (isGameOver) return;
    const { dx, dy } = directionRef.current;
    switch (direction) {
      case "UP":
        if (dy !== 1) { directionRef.current = { dx: 0, dy: -1 }; }
        break;
      case "DOWN":
        if (dy !== -1) { directionRef.current = { dx: 0, dy: 1 }; }
        break;
      case "LEFT":
        if (dx !== 1) { directionRef.current = { dx: -1, dy: 0 }; }
        break;
      case "RIGHT":
        if (dx !== -1) { directionRef.current = { dx: 1, dy: 0 }; }
        break;
      default:
        break;
    }
  };

  // 게임 초기화 및 재시작 함수
  const resetGame = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    gameStateRef.current.snake = [{ x: 10, y: 10 }];
    gameStateRef.current.currentScore = 0;
    directionRef.current = { dx: 0, dy: 0 };
    
    setScore(0);
    setIsGameOver(false);
    generateFood();
    
    // 재시작 후 루프 재가동
    gameLoop();
  };

  const generateFood = () => {
    const { tileCount } = gameStateRef.current;
    gameStateRef.current.food.x = Math.floor(Math.random() * tileCount);
    gameStateRef.current.food.y = Math.floor(Math.random() * tileCount);
  };

  function gameLoop() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { snake, gridSize, tileCount, food } = gameStateRef.current;
    const { dx, dy } = directionRef.current;

    // 1. 뱀 위치 업데이트
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();

    // 2. 게임 오버 체크
    let crashed = false;
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      crashed = true;
    }
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        crashed = true;
      }
    }

    if (crashed) {
      setIsGameOver(true);
      return; // 루프 중단
    }

    // 3. 먹이 체크
    if (head.x === food.x && head.y === food.y) {
      gameStateRef.current.currentScore += 10;
      setScore(gameStateRef.current.currentScore);
      snake.push({});
      generateFood();
    }

    // 4. 그리기
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 먹이 그리기
    ctx.fillStyle = "#FF5252";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);

    // 뱀 그리기
    snake.forEach((part, index) => {
      ctx.fillStyle = index === 0 ? "#2E7D32" : "#4CAF50";
      ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
    });

    // 이동 속도 설정: 기존 100에서 70으로 축소 (속도 2.0 수준으로 빨라짐)
    timeoutRef.current = setTimeout(gameLoop, 200);
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp": changeDirection("UP"); break;
        case "ArrowDown": changeDirection("DOWN"); break;
        case "ArrowLeft": changeDirection("LEFT"); break;
        case "ArrowRight": changeDirection("RIGHT"); break;
        default: break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    gameLoop();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isGameOver]);

  // 📱 모바일 버튼 공통 스타일
  const btnStyle = {
    width: "65px",
    height: "65px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "50%", // 동글동글하고 이쁜 버튼 스타일
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
    touchAction: "manipulation",
    outline: "none",
    WebkitTapHighlightColor: "transparent"
  };

  
// 🔄 다시 시작 버튼 스타일
  const resetBtnStyle = {
    marginTop: "15px",
    padding: "10px 24px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#2E7D32",
    color: "white",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px"
  };

  return (
    <div style={{ textAlign: "center", color: "white", fontFamily: "Arial, sans-serif", padding: "10px", backgroundColor: "lightgreen", minHeight: "90vh" }}>
      <h1 style={{ margin: "10px 0 5px 0" }}>🐍 스네이크 게임</h1>
      <p style={{ color: "#000000", fontSize: "17px", margin: "15px 0 10px 0" }}>PC 방향키 또는 하단 패드로 조작하세요!</p>
      
      <h2 style={{ margin: "5px 0" }}>점수: {score}</h2>
      
      <div style={{ position: "relative", display: "inline-block" }}>
        <canvas
          ref={canvasRef}
          width="340"
          height="340"
          style={{ border: "4px solid #fff", backgroundColor: "#111", display: "block", borderRadius: "8px" }}
        />
        {/* 게임오버 시 캔버스 위에 투명 레이어 팝업 */}
        {isGameOver && (
          <div style={{
            position: "absolute", top: 0, left: 0, width: "340px", height: "340px",
            backgroundColor: "rgba(0,0,0,0.85)", borderRadius: "4px",
            display: "table"
          }}>
            <div style={{ display: "table-cell", verticalAlign: "middle" }}>
              <h2 style={{ color: "#FF5252", fontSize: "28px", margin: "0 0 10px 0" }}>GAME OVER</h2>
              <p style={{ margin: "0 0 20px 0", fontSize: "16px" }}>최종 점수: <span style={{ color: "#4CAF50", fontWeight: "bold" }}>{score}</span>점</p>
              <button style={resetBtnStyle} onClick={resetGame}>🔄 다시 시작</button>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop: "10px" }}>
        {!isGameOver && <button style={{ ...resetBtnStyle, backgroundColor: "#555" }} onClick={resetGame}>🔄 리셋하기</button>}
      </div>

      {/* 🎮 정렬이 이쁜 십자형 키패드 컨트롤러 (Flex/Grid 대용 테이블 배치 구조) */}
      <div style={{ marginTop: "20px", display: "inline-block" }}>
        <div style={{ display: "table", borderCollapse: "separate", borderSpacing: "8px" }}>
          <div style={{ display: "table-row" }}>
            <div style={{ display: "table-cell" }}></div>
            <div style={{ display: "table-cell" }}>
              <button style={btnStyle} onClick={() => changeDirection("UP")}>▲</button>
            </div>
            <div style={{ display: "table-cell" }}></div>
          </div>
          <div style={{ display: "table-row" }}>
            <div style={{ display: "table-cell" }}>
              <button style={btnStyle} onClick={() => changeDirection("LEFT")}>◀</button>
            </div>
            <div style={{ display: "table-cell" }}></div>
            <div style={{ display: "table-cell" }}>
              <button style={btnStyle} onClick={() => changeDirection("RIGHT")}>▶</button>
            </div>
          </div>
          <div style={{ display: "table-row" }}>
            <div style={{ display: "table-cell" }}></div>
            <div style={{ display: "table-cell" }}>
              <button style={btnStyle} onClick={() => changeDirection("DOWN")}>▼</button>
            </div>
            <div style={{ display: "table-cell" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}