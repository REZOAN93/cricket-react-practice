import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <a href="/home">Home</a>
                <a href="/selected-team">Selected Team</a>
                <a href="/details">Individual Details</a>
                <a href="/story">Story</a>
                <a href="/more">More..</a>
            </nav>
        </div>
    );
};

export default Header;