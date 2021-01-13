import store from '../redux/store';

class sortingHandler{
    static drag(e){
        var id = (new Date()).getTime();
        this.id = id;
        e.dataTransfer.setData("draggedPostID" , id);
    }

    static sendPostIndex(index,e){
        e.dataTransfer.setData("sentPostIndex", index);
    }

    static dragOver(e){
        e.preventDefault();
    }

    static dragEnter(e){
        e.preventDefault();
        this.className += ' hovered-post';
    }

    static dragLeave(e){
        this.className = this.className.replace(' hovered-post','');
    }

    static drop(e){
        const sentData = e.dataTransfer.getData("draggedPostID");
        const draggedPost = document.getElementById(sentData);
        draggedPost.className = draggedPost.className.replace(' hovered-post','');
        this.className = this.className.replace(' hovered-post','');
    }

    static swapPosts(targetIndex, e){
        const draggedIndex = e.dataTransfer.getData("sentPostIndex");
        if(Math.floor(targetIndex/3) === Math.floor(draggedIndex/3)){
            store.dispatch({
                type: "swapPosts",
                payload: {
                    targetIndex,
                    draggedIndex
                }
            })
        }
    }
}

export default sortingHandler;