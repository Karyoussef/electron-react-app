import React from 'react';

class HNitem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author: null,
            comments: null,
            content: null,
            date: null,
            handler : null,
            class: null
        }
        this.liRef = React.createRef();
    }

    displaynofComments(){
        if(this.state.comments!==null){
            return "comments";       
        }else{
            return ""
        }
    }

    render() {
        return (
             <li ref={this.liRef} draggable="true" className={this.state.class} onClick = {()=>this.state.handler()}>
                <span className="spanAuthor"> By: {this.state.author}</span>
                <span className="spanDate"> {this.state.date}</span>
                <span className="spanComments">{this.state.comments} {this.displaynofComments()}</span>
                {this.state.content}                 
             </li>
        );
    }
}

export default HNitem;