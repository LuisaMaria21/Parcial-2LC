import { setPost } from "./postsSlice";


export const fetchPosts = () => {
    return async (dispatch) => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                dispatch(setPost(data));
            })
            .catch((error) => {
                dispatch(fetchPostsFailure(error));
            });
    };
};
