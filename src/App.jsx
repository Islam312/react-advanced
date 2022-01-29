import React, { useMemo, useState } from 'react';

import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import './styles/App.sass';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select';
import MyInput from './components/UI/input';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Redux',
      body: 'aaaaa',
    },
    {
      id: 2,
      title: 'React',
      body: 'bbbb',
    },
    {
      id: 3,
      title: 'Javascript',
      body: 'cccc',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const [filter, setFilter] = useState({
    sort: '',
    query: '',
  });

  const sortedPost = useMemo(() => {
    console.log('sorted post');
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPost]);

  const sortPosts = (sort) => {
    console.log('sort : ', sort);
    setFilter({ ...filter, sort });
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts([...posts.filter((item) => item.id !== post.id)]);
  };

  return (
    <div className="container">
      {/* <FunctionCounter />
      <ClassCounter /> */}
      <hr />
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        placeholder="Поиск..."
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        value={filter.query}
      />
      <MySelect
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
        defaultOption="Сортировка по"
        value={filter.sort}
        onChange={sortPosts}
      />

      <Posts posts={sortedAndSearchPost} removeItemPost={removePost} />
    </div>
  );
};

export default App;
