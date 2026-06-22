import "./Reviews.css";

interface ReviewsProps {
  comment: string;
  userName?: string;
  userDescription?: string;
  userPp?: string;
  dataAos?: string;
  dataAosDelay?: string;
}

function Reviews({
  comment,
  userPp,
  userName,
  userDescription,
  dataAos,
  dataAosDelay,
}: ReviewsProps) {
  return (
    <div
      className="review-card"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <div style={{ display: "flex", gap: "5px", marginBottom: "18px" }}>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#DEA368"
            stroke="#DEA368"
            strokeWidth="1.6"
            strokeLinejoin="round"
          >
            <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.3l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94z" />
          </svg>
        ))}
      </div>

      <div className="comment">"{comment}"</div>
      <div className="user-info">
        <div className="pp-icon">{userPp}</div>

        <div>
          <p className="user-name">{userName}</p>
          <p className="user-description">{userDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
