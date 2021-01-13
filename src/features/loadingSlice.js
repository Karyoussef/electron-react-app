const initialState = true;

const loadingReducer = (state = initialState, action) => {
    if(action.type === "displayLoading"){
        return true;
    }
    if(action.type === "hideLoading"){
        return false;
    }
    return state
}

export default loadingReducer;