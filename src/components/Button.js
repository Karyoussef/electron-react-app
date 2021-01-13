import React from 'react';
import store from '../redux/store';
import Commons from '../Commons';
import Homepage from './Homepage';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    
    renderButton(){
        const isHome = store.getState().clickedItem.isHome;
        if(isHome){
            return "Reload";
        }else{
            return "Back";
        }
    }

    handleClick(){
        const isHome = store.getState().clickedItem.isHome;
        if(!isHome){
            store.dispatch({
                type: "goBack"
            })
        }else{
            Commons.loadPosts(0,true);
        }
    }

    render() {
        return (
             <button type="button" className="btn" onClick={()=>this.handleClick()}>
                 {this.renderButton()}
             </button>
        );
    }
}

export default Button;