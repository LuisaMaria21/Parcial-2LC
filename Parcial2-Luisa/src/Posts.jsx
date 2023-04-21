import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';

const Posts = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id} className='card-mb-2'>
          <h2 className='title2'>{post.title}</h2>
          <p className='parrafo'>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
