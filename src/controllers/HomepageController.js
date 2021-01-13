import axios from 'axios';

class HomepageController{
    static async loadPosts(start){
        var end = start+19;
        const postsID = await axios.get(
            'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&'
            +'orderBy=%22$key%22&startAt="'+start+'"&endAt="'+end+'"'
        )
        const posts = await this.getPostsById(Object.values(postsID.data));
        return posts;
    }

    static async getPostsById(postsID){
        const posts =  await Promise.all(postsID.map(async(postID) => {
            const post = await axios.get('https://hacker-news.firebaseio.com/v0/item/'+postID+'.json?print=pretty');
            post.data.time = new Date(post.data.time*1000);
            if(post.data.kids){
                post.data.comments = post.data.kids.length;
            }else{
                post.data.comments = 0;
            }    
            return post.data;    
        }));
        return posts;
    }
}

export default HomepageController;