import { NavBar } from "../../Components/NavBar";
import "./blogPage.css";
import Footer from "../../Components/Footer";
import blogFrame from "../../assets/blogFrame.png";
import blogImage from "../../assets/blogImage.png";
import blogImage2 from "../../assets/blogImage2.png";
import blogImage3 from "../../assets/blogImage3.png";
import blogImage4 from "../../assets/blogImage4.png";
import postImage from "../../assets/postImage.png";
import postImage2 from "../../assets/postImage2.png";
import postImage3 from "../../assets/postImage3.png";
import Button from "../../Components/Button";
import PopularPostCard from "../../Components/PopularPostCard";
import KeyWord from "../../Components/Keyword";
import PostPage from "../../Components/Posts";
import React from "react";
import { Pagination } from "antd";

const BlogPage = () => {
  return (
    <div>
      <div className="blogPageWrapper">
        <div>
          <NavBar />
        </div>
        <div className="totalContainer">
          <div className="topAspect">
            <div className="leftImage">
              <img id="blogFrame" src={blogFrame} alt="blogFrame" />
              <div className="topText">
                <h2 className="welcome-text"> Welcome to our Blog</h2>
                <div className="blog-text">
                  <h4>
                    Stay connected with us and read recent blog and news about
                    old <br />
                    and new trends in the digital space
                  </h4>
                </div>
                <div className="button">
                  <Button variant="blogBtn">Learn more</Button>
                </div>
              </div>
            </div>

            <div className="categoryWrapper">
              <ul className="categoryList">
                <li className="categoryLists">
                  <p>All</p>
                </li>
                <li className="categoryLists">Digital Privacy</li>
                <li className="categoryLists">Digital Citizenship</li>
                <li className="categoryLists">Digital Security</li>
                <li className="categoryLists">Social Media Safety</li>
                <li className="categoryLists">Cybersecurity</li>
              </ul>
            </div>
          </div>
          <div className="totalBottom">
            <div>
              <div>
                <KeyWord />
              </div>

              <div className="postSection">
                <div className="namePost">
                  <h3>Popular Posts</h3>
                </div>

                <PostPage
                  imageUrl={postImage}
                  title={
                    "2024 Trends in the digital world: Comprehensive Collection"
                  }
                  description={"Learn More"}
                />

                <PostPage
                  imageUrl={postImage2}
                  title={
                    "Is your data actually secured and private on these sites?"
                  }
                  description={"Learn More"}
                />

                <PostPage
                  imageUrl={postImage3}
                  title={"10 Ways to check your kid's digital activity"}
                  description={"Learn More"}
                />
              </div>
            </div>
            <div className="bottomAspect">
              <div className="bottomPart">
                <PopularPostCard
                  className="postStyle"
                  imageUrl={blogImage}
                  title={
                    "Safety in Bits and Bytes: Tools and Techniques for Digital Security"
                  }
                  description={
                    "In today's digital world a lot of people find it hard to ..."
                  }
                  date={"24th January"}
                  indentation={"|"}
                  readingTime={"4 min read"}
                />
                <PopularPostCard
                  className="postStyle"
                  imageUrl={blogImage2}
                  title={
                    "From Social Media to Gaming: Monitor Your Child's Online interactions"
                  }
                  description={
                    "In today's digital world a lot of people find it hard to ..."
                  }
                  date={"2nd April"}
                  indentation={"|"}
                  readingTime={"7 min read"}
                />
                <PopularPostCard
                  className="postStyle"
                  imageUrl={blogImage3}
                  title={"Strategies for Monitoring and Managing Device Use"}
                  description={
                    "In today's digital world a lot of people find it hard to ..."
                  }
                  date={"7th September"}
                  indentation={"|"}
                  readingTime={"5 min read"}
                />
                <PopularPostCard
                  className="postStyle"
                  imageUrl={blogImage4}
                  title={"5 Practical Ways to Spot and Avoid Phishing Attacks"}
                  description={
                    "In today's digital world a lot of people find it hard to ..."
                  }
                  date={"18th May"}
                  indentation={"|"}
                  readingTime={"5 min read"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paginTotal"> 
      <Pagination defaultCurrent={1} total={50} className="paginIcon" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;