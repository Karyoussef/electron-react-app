import { stat } from 'fs';
import HomepageController from '../controllers/HomepageController';
const initialState = [];

const postsReducer=(state = initialState, action)=>{
    if(action.type === "loadPosts"){
        var newPosts = [];
        if(action.payload.isReload){
            newPosts = action.payload.posts;
        }else{
            newPosts = state.concat(action.payload.posts);
        }
        return newPosts;
    }
    if(action.type === "swapPosts"){
        const newPosts = state.concat();
        const {targetIndex, draggedIndex} = action.payload;
        const temp = newPosts[targetIndex];
        newPosts[targetIndex] = newPosts[draggedIndex];
        newPosts[draggedIndex] = temp;
        return newPosts;
    }
    return state;
}

export default postsReducer;