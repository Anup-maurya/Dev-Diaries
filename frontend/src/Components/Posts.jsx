import React from "react";
import SinglePost from "./SinglePost";

const Posts = ({ post }) => {
  return (
    <>
      <SinglePost {...post} />
    </>
  );
};

export default Posts;
