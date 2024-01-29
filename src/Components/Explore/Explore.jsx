import React from 'react';
import './Explore.css'
import Camping from '../../assets/Camping.png'
function Explore() {
    return(
        <>
        <div id="Explore-empty">
        <div>
            <p>Explore stays</p>
        </div>
        <div id='Explore-empty-2'>
            <div></div>
            <div id='Explore-images'>
            <img src={Camping} alt="" />
            <img src={Camping} alt="" />
            <img src={Camping} alt="" />
            <img src={Camping} alt="" />
            <img src={Camping} alt="" />
            <img src={Camping} alt="" />
            <img src={Camping} alt="" />
        </div>
            <div></div>
        </div>
        
        </div>
        </>
    )
}

export default Explore;