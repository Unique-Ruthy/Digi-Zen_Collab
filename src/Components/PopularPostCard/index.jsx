import { useState } from "react";
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { IoShareSocialOutline } from "react-icons/io5";
import "./postCard.css";

const PopularPostCard = ({
  title,
  imageUrl,
  description,
  date,
  indentation,
  readingTime,
}) => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Handle submitting the comment to the backend or wherever you need to
    const newComment = {
      id: commentsList.length + 1,
      text: comment,
    };
    setCommentsList((prevComments) => [...prevComments, newComment]);
    // Clear the comment input field after submission
    setComment("");
  };

  return (
    <div className="mainStyle">
      <div className="totalStyle">
        <div className="titleStyle">
          <img src={imageUrl} className="cardImage" alt="Post" />
          <div>
            <p className="textT">{title}</p>
            <p className="textD">{description}</p>
          </div>
        </div>
        <div className="bottomStyle">
          <div className="dateStyle">
            <div className="commentStyling">
              <p>{date}</p>
              <p>{indentation}</p>
              <p>{readingTime}</p>
            </div>
            <div className="iconStyle">
              <p onClick={handleLikeToggle}>
                {isLiked ? <GoThumbsdown /> : <GoThumbsup />}
                {isLiked ? " Unlike" : " Like"}
              </p>
              <p>{likes} Likes</p>
              <button onClick={toggleComments}>
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
              <p>
                <IoShareSocialOutline />
              </p>
            </div>
          </div>
        </div>
      </div>
      {showComments && (
        <div className="commentsSection">
          <form onSubmit={handleSubmitComment}>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              rows={3}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="commentsList">
            <h3>Comments:</h3>
            {commentsList.map((commentItem) => (
              <p key={commentItem.id}>{commentItem.text}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularPostCard;
