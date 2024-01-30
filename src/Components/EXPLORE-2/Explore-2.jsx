import React from 'react';
import './Explore-2.css'
import image1 from '../../assets/Explore-card-1.jpg'
import image2 from '../../assets/Explore-card-2.jpg'
import image3 from '../../assets/Explore-card-3.jpg'
import image4 from '../../assets/Explore-card-4.jpg'
import star from '../../assets/star.png'
import location from '../../assets/location.png'
function Explore_2() {
    return(
        <>
        <div id='Explore-Empty-3'>
            <div id='Explore-container'>
                <div id='Explore-card'>
                    <img src={image1} alt="" />
                <div id='Explore-description'>
                    <p><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></p>
                    <p>Greenyard Cottage</p>
                    <p><img src={location} alt="" />Ooty, TN</p>
                </div>
                </div>
            </div>
            <div id='Explore-container'>
                <div id='Explore-card'>
                    <img src={image2} alt="" />
                <div id='Explore-description'>
                    <p><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></p>
                </div>
                </div>
            </div>
            <div id='Explore-container'>
                <div id='Explore-card'>
                    <img src={image3} alt="" />
                <div id='Explore-description'>
                    <p><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></p>
                </div>
                </div>
            </div>
            <div id='Explore-container'>
                <div id='Explore-card'>
                    <img src={image4} alt="" />
                <div id='Explore-description'>
                    <p><img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" /></p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Explore_2;