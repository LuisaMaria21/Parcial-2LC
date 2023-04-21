import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from './redux/thunks';
import Posts from './Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1 className='title1'>Posts</h1>
      <h2 className='subtitulo'>Parcial 2 - Luisa Cuero - Desarrollo Web</h2>
      <Posts />
    </div>
  );
}

export default App;
