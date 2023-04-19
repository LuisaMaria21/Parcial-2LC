import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from 'https://jsonplaceholder.typicode.com/posts';



export const usePosts = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return useSelector((state) => state.posts.posts);
};

// Componente que muestra la lista de posts
const Posts = () => {
  const posts = usePosts();

  return (
    <div>
      <h1>Parcial 2</h1>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
