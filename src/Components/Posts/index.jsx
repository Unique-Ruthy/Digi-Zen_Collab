import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import "./posts.css";

const PostPage = ({ imageUrl, title, description, link }) => {
  return (
    <Link to={link} className="postLink">
      <div className="entirePost">
        <div className="titlePost">
          <img src={imageUrl} className="postImage" alt="Post" />
          <div className="totalPost">
            <div className="mainPost">
              <p>{title}</p>
            </div>

            <div className="postDes">
              <p>{description}</p>
              <p className="arrowIcon">
                <FaArrowRightLong />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPage;
