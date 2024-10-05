import React from 'react'
import './Photos.css'
import photo1 from '../../assets/gallery-1.png'
import photo2 from '../../assets/gallery-2.png'
import photo3 from '../../assets/gallery-3.png'
import photo4 from '../../assets/gallery-4.png'

const Photos = () => {
    return (
        <div>
            <div className="photos-container">
                <img src={photo1} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo4} alt="" />
            </div>
            <div className="explore-container">
                <button className="explore-button">Explore more</button>
            </div>
        </div>
    )
}

export default Photos
