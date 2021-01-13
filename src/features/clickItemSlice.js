const initialState = {
    isHome: true,
    selectedPost: null,
    posY : null
};

const clickItemReducer = (state = initialState , action)=>{
    if(action.type === "postClicked"){
        return {
            ...state,
            isHome: false,
            selectedPost : action.payload.selectedPost,
            posY : window.pageYOffset 
        }
    }
    if(action.type === "goBack"){
        return {
            ...state,
            isHome: true,
            selectedPost: null
        }
    }
    return state;
}

export default clickItemReducer;