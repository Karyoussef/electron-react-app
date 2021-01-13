import HNitem from './HNitem';
import Commons from '../Commons';

class Commentitem extends HNitem{
    constructor(props){
        super(props);
    }

    toggleColor(){
        if(this.props.index%2 === 0)
            return "li-dark";
        else
            return "li-light";
        
    }

    componentDidMount(){
        const comment = this.props.comment;
        const decodedText = Commons.htmlDecode(comment.text);
        const color = this.toggleColor();
        const decodedDate  = Commons.getDate(comment.time);
        this.setState({
            author: comment.by,
            content: decodedText,
            time:decodedDate,
            class: color
        });
    }
}

export default Commentitem;