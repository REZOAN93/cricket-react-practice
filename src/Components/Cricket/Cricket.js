import React, { useState } from 'react';
import Player from '../Player/Player';
import playerdata from '../../data.json'
import Cart from '../Cart/Cart';
import './Cricket.css';

const Cricket = () => {
    const firsttwenty = playerdata.slice(0, 21);
    const [players, setplayers] = useState(firsttwenty);
    const [cart, setcart] = useState([]);

    const handleaddplayer = (props) => {
        console.log('Product Added', { props });
        const newcart = [...cart, props];
        setcart(newcart);
    }

    return (
        <div className='cricket_data'>
            <div className='players_container'>
                {players.map(pl => <Player player={pl} key={pl.id} handleaddplayer={handleaddplayer} ></Player>)}
            </div>

            <div className='cart_container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Cricket;