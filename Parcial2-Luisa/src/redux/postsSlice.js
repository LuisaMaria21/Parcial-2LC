import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './thunks';

const postsSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        return action.payload;
      });
    },
  });
  
  export const { actions } = postsSlice;
  export default postsSlice.reducer;


