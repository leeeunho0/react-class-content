import ReviewCard from "./component/ReviewCard";

// ReviewPage.jsx
function ReviewPage() {
  return (
    <div>
      <h2>방문자 리뷰</h2>

      <ReviewCard />

      <div className="review">
        <div className="reviewer">
          <img src="https://via.placeholder.com/50" alt="" />
          <span>익명1</span>
        </div>
        <p>음식이 정말 맛있었어요</p>
      </div>

      <div className="review">
        <div className="reviewer">
          <img src="https://via.placeholder.com/50" alt="" />
          <span>익명1</span>
        </div>
        <p>음식이 정말 맛있었어요</p>
      </div>
    </div>
  );
}

export default ReviewPage;