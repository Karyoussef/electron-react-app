import React from 'react';
import Postitem from './Postitem';
import Commentitem from './Commentitem';
import Commons from '../Commons';
import store from '../redux/store';
import PostpageController from '../controllers/PostpageController';

class Postpage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments:null
        }
    }

    renderComments(){
        const selectedPost = store.getState().clickedItem.selectedPost;
        let i = 0;
        if(this.state.comments){
            const renderedComments = this.state.comments.map((comment) => {
                if(comment.text){
                    i++;
                    return(
                        <Commentitem key = {Commons.genID()} comment={comment}
                        index = {i}/>
                    );    
                }
            });
            return renderedComments;
        }else if(selectedPost.comments !== 0){
            return (
                <h1>LOADING</h1>
            );
        }
    }

    async getComments(){
        const post = store.getState().clickedItem.selectedPost;
        const comments = await PostpageController.getComments(post.kids);
        this.setState({comments})
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.getComments();
    }

    render() {
        return (
            <ul>
                <Postitem post = {store.getState().clickedItem.selectedPost}/>
                {this.renderComments()}
            </ul>
        );
    }
}

export default Postpage;