import React from "react";
import Comments from "../Comments/Comments";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import Posts from "./Posts";

const Post = ({ post, likePost }) => {
  // 🔥 Make sure the parent of Post is passing the right props!

  return (
    <div className="post-border">
      <PostHeader key={post.id} username={post.username} thumbnailUrl={post.thumbnailUrl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={post.imageUrl} />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection
        postId={post.id}
        likePost={likePost}
        numberOfLikes={post.likes}
      />
      {/* Comments also wants its props! */}
      <Comments comments={post.comments} />
    </div>
  );
};

export default Post;
