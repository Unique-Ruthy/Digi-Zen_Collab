import { GoThumbsup } from "react-icons/go";
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
  return (
    <div className="mainStyle">
      <div className="totalStyle">
        <div className="titleStyle">
          <img src={imageUrl} className="cardImage" />
          <div>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="bottomStyle">
          <div className="dateStyle">
            <p>{date}</p>
            <p>{indentation}</p>
            <p>{readingTime}</p>
            <div className="iconStyle">
              <p>
                <GoThumbsup />
              </p>
              <p>
                <LuMessageCircle />
              </p>
              <p>
                <IoShareSocialOutline />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPostCard;