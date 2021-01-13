import { stat } from "fs";

const initialState = false;

const reloadReducer = (state = initialState, action)=>{
    if(action.type === "reload"){
        return true;
    }
    return state;
}

export default reloadReducer;