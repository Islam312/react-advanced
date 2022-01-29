import React, { useState } from 'react';
import MyButton from './UI/button';
import MyInput from './UI/input';

const PostForm = ({ createPost }) => {
  const [post, setPost] = useState({
    title: '',
    body: '',
  });

  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({
      title: '',
      body: '',
    });
  };

  

  return (
    <form className="form-control">
      <MyInput
        type="text"
        placeholder="Заголовок поста"
        onChange={(e) =>
          setPost((prev) => ({ ...prev, title: e.target.value }))
        }
        value={post.title}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        onChange={(e) => setPost((prev) => ({ ...prev, body: e.target.value }))}
        value={post.body}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};
export default PostForm;
