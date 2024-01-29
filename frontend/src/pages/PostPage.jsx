import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { UserContext } from "../UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  console.log(id, "id --------------------->")
  useEffect(() => {
    // console.log(params);
    // console.log(id);
    fetch(`http://localhost:8000/post/${id}`).then((resp) => {
      resp.json().then((postInfo) => {
        setPostInfo(postInfo);
        console.log(postInfo, "-------------------------->");
      });
    });
  }, [id]);

  if (!postInfo) {
    return "";
  }
  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <div className="authEdit">
        <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy")}</time>

        <div className="author">by @{postInfo.author.username}</div>

        {userInfo && (userInfo.id === postInfo.author._id )&& (
          <div className="edit-post">
            <Link className="btn" to={`/edit/${postInfo._id}`}>
              Edit
            </Link>
          </div>
        )}
      </div>

      <div className="post-image">
        <img src={`http://localhost:8000/${postInfo.photo}`} alt="" />
      </div>
      <div
        className="content-para"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      />
    </div>
  );
};

export default PostPage;
