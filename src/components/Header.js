import React from 'react';
import Button from './Button';

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <h1> hacker news app </h1>
                <Button/>
            </div>
        )
    }
}

export default Header;