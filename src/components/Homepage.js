import React from 'react';
import Postitem from './Postitem';
import store from '../redux/store';
import Commons from '../Commons';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }
    
    renderPosts(){
        const posts = store.getState().posts;
        const colors = this.setColors(posts);
        const renderedPosts = posts.map((post,i)=>{
            return(
                <Postitem key={Commons.genID()} post = {post} index={i} color = {colors[i]}/>
            );
        });
        return renderedPosts;
    }

    setColors(posts){
        const newColors = [];
        posts.forEach((currPost,i) =>{
            if(i===0){
                newColors.push("li-light");
            }else if(i%3 === 0){
                if(newColors[i-1] ==="li-light")
                    newColors.push("li-dark")
                else
                    newColors.push("li-light");    
            }else{
                newColors.push(newColors[i-1]);
            }

        });
        return newColors;
    }

    loading(){
        if(this.state.loading){
            return (
                <h1>LOADING</h1>
            );
        }        
    }

    handleScroll = (ev)=>{
        if(
            ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
            && this.state.loading === false
        ){
            Commons.loadPosts(store.getState().posts.length, false);
            this.setState({loading:true});
        }
    }

    componentDidMount(){
        if(store.getState().posts.length===0){
            Commons.loadPosts(0, true);
        }
        window.scrollTo(0,store.getState().clickedItem.posY);
        window.addEventListener("scroll", this.handleScroll);
        if(store.getState().posts.length !== 0){
            this.setState({loading:false});
        }
    }

    componentWillUnmount(){
        window.removeEventListener("scroll",this.handleScroll);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.loading===true){
            this.setState({loading:false});
        }
    }

    render() {
        return (
            <ul>
                {this.renderPosts()}
                {this.loading()}
            </ul>    
        );
    }
}

export default Homepage;