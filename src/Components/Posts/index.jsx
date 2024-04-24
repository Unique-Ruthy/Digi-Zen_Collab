import "./posts.css";
import { FaArrowRightLong } from "react-icons/fa6";

const PostPage = ({ imageUrl, title, description }) => {
  return (
    <div className="entirePost">

      

      <div className="titlePost">
        <img src={imageUrl} className="postImage" />
        <div className="totalPost">
          <div className="mainPost">
            <p>{title}</p>
          </div>

          <div className="postDes">
            <p>{description}</p>
            <p className="arrowIcon">{<FaArrowRightLong />}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;