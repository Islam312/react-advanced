import React from 'react';
import PostItem from './PostItem';
import '../styles/Posts.sass';

const Posts = ({ posts, removeItemPost }) => {
  return (
    <div className="post">
      <h1>Список постов</h1>
      {posts.length !== 0 ? (
        posts.map((post, index) => {
          return (
            <PostItem
              removeItemPost={removeItemPost}
              number={index + 1}
              post={post}
              key={post.id}
            />
          );
        })
      ) : (
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
          Посты не найдены!
        </h2>
      )}
    </div>
  );
};

export default Posts;
