import React from 'react';
import MyButton from './UI/button';

const PostItem = ({ post, number, removeItemPost }) => {
  return (
    <div className="dFlex post__body">
      <div>
        <h4 className="post__header">
          {number}. {post.title}
        </h4>
        <span className="post__description">{post.body}</span>
      </div>
      <MyButton onClick={()=>{removeItemPost(post)}}>Delete post</MyButton>
    </div>
  );
};

export default PostItem;
