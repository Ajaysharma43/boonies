import React from 'react';
import './Explore.css'
import Camping from '../../assets/house.jpg'
import Tent from '../../assets/Tent.png'
import TreeHouse from '../../assets/Tree House.png'
import Huts from '../../assets/Hut.png'
import Camp from '../../assets/tent.png'
import Aviary from '../../assets/Aviary.png'
import Resort from '../../assets/Ski resort.png'

function Explore() {
    return(
        <>
        <div id="Explore-empty">
        <div>
            <p id='Explore-text-1'>Explore Stays</p>
        </div>
        <div id='Explore-empty-2'>
            <div></div>
            <div id='Explore-images'>
            <img src={Camping} alt="" id='Explore-image-1'/>
            <img src={Tent} alt="" id='Explore-image-2'/>
            <img src={TreeHouse} alt="" id='Explore-image-2'/>
            <img src={Huts} alt="" id='Explore-image-2'/>
            <img src={Camp} alt="" id='Explore-image-2'/>
            <img src={Aviary} alt="" id='Explore-image-2'/>
            <img src={Resort} alt="" id='Explore-image-2'/>
        </div>
            <div></div>
        </div>
        <div id='Explore-Text-2'>
            <p>cottages</p>
            <p>Tent</p>
            <p>Tent</p>
            <p>Huts</p>
            <p>Camp</p>
            <p>Dome</p>
            <p>Resort</p>
        </div>
        
        </div>   
        </>
    )
}

export default Explore;