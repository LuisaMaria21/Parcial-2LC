import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/thunks';
import Posts from './Posts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Posts</h1>
      <Posts />
    </div>
  );
}

export default App;
