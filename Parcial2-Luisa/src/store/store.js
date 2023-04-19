import { Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers';

const store = Store(postsReducer, applyMiddleware(thunk));

export default store;
