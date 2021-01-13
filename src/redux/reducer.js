import postsReducer from '../features/postsSlice';
import clickItemReducer from '../features/clickItemSlice';
import reloadReducer from '../features/reloadSlice';
import loadingReducer from '../features/loadingSlice';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
    posts: postsReducer,
    clickedItem: clickItemReducer,
    isReload: reloadReducer,
    displayLoading:loadingReducer
}) 
export default appReducer;
