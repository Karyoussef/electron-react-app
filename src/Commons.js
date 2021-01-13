import HomepageController from './controllers/HomepageController';
import store from './redux/store';

class Commons {
    static getDate(date){
        return date.getUTCDate() +'/' + (date.getUTCMonth()+1) + '/' + date.getUTCFullYear();
    }

    static genID(){
        return Math.random().toString(36).substr(2, 9) + new Date().getTime();
    }

    static htmlDecode(str){
        const doc = new DOMParser().parseFromString(str, "text/html");
        const text = doc.documentElement.textContent;
        return text;
    }

    static async loadPosts(start, isReload){
        const loadedPosts = await HomepageController.loadPosts(start);
        store.dispatch({
            type: "loadPosts",
            payload: {
                posts : loadedPosts,
                isReload
            }
        });        
    }
}

export default Commons