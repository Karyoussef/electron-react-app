import axios from 'axios';

class PostpageController{

    static async getComments(commentsIds){
        if(commentsIds){
            const comments =  await Promise.all(commentsIds.map( async(commentId) => {
                const comment = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+commentId+'.json?print=pretty');
                comment.data.time = new Date(comment.data.time*1000);
                return comment.data;
            }))       
            return comments;
        }
    }
}

export default PostpageController;