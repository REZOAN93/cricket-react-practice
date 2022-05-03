import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import'./Player.css';
const Player = (props) => {
    const{name,salary,image,email,gender}=props.player;
    console.log(props.player);
    return (
        <div className='player'>
             <div className='img-part'>
                <img src={image} alt="" />
            </div>
            <div className='player-details'>
                <h3>Name: {name}</h3>
                <h3>Salary: ${salary}</h3>
                <h3>Email: {email}</h3>
                <h4>Gender: {gender}</h4>
                <button className='main-button' onClick={()=>props.handleaddplayer(props.player)}><FontAwesomeIcon icon={faCircleCheck}/> ADD Player</button>
            </div>
        </div>

    );
};

export default Player;