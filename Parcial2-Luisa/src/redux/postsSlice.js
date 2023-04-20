import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './thunks';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {posts:[]},
    reducers: {
      setPost:(state,action)=>{
        state.posts = action.payload
      }
    },
    
  });
  
  export const { setPost } = postsSlice.actions;
  export default postsSlice.reducer;


