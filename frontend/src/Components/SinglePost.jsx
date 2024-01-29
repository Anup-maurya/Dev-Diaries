import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Format from "date-fns/format";
import { Link } from "react-router-dom";

const SinglePost = ({
  title,
  _id,
  summary,
  photo,
  author,
  content,
  createdAt,
}) => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <div className="left-side">
          <p>
            {" "}
            <img src={`http://localhost:8000/${photo}`} alt="" />
            {/* {author.username} */}
            {""} {Format(new Date(createdAt), "MMM d, yyyy")}
          </p>
        </div>
        <div className="right-side">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p>{summary} </p>
          <Link to={`/post/${_id}`}>
            Read more{" "}
            <span>
              <HiArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
