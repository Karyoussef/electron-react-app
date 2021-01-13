import React from 'react';
import Header from './Header';
import Homepage from './Homepage';
import store from '../redux/store';
import Commons from '../Commons';
import Postpage from './Postpage';

class App extends React.Component{
    renderPage(){
        const isHome = store.getState().clickedItem.isHome;
        if(isHome){ 
            return(
                <Homepage/>
            );
        }else{
            return(
                <Postpage/>
            );
        }
    }

    render(){
        return(
            <div>
                <Header/>
                {this.renderPage()}
            </div>
        );
    }
}

export default App;