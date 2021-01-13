import Commons from '../Commons';
import store from '../redux/store';
import HNitem from './HNitem';
import sortingHandler from '../controllers/SortingHandler';

class Postitem extends HNitem{
    constructor(props){
        super(props);
    }

    handlePostClick(){
        store.dispatch({
            type: "postClicked",
            payload: {
                selectedPost : this.props.post
            }
        })
    }

    addListeners(liItem){
        liItem.addEventListener('dragstart', sortingHandler.drag);
        liItem.addEventListener('dragstart', sortingHandler.sendPostIndex.bind(this,this.props.index));
        liItem.addEventListener('dragover', sortingHandler.dragOver);
        liItem.addEventListener('dragenter', sortingHandler.dragEnter);
        liItem.addEventListener('dragleave', sortingHandler.dragLeave);
        liItem.addEventListener('drop',sortingHandler.drop);
        liItem.addEventListener('drop' , sortingHandler.swapPosts.bind(this,this.props.index));
    }

    componentDidMount(){
        const post = this.props.post;
        const listItem = this.liRef;
        this.addListeners(listItem.current);
        if(!post.comments){
            post.comments=0;
        }
        const decodedText = Commons.htmlDecode(post.title);
        const decodedDate = Commons.getDate(post.time);
        const isHome = store.getState().clickedItem.isHome;
        const handler = (isHome)? ()=>this.handlePostClick() : null;
        this.setState({
            author: post.by,
            comments : post.comments,
            date : decodedDate,
            content : decodedText,
            handler,
            class: this.props.color
        })
    }
    
}

export default Postitem;