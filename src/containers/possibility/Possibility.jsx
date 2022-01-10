import React from 'react'
import possibilityImg from '../../assets/possibility.png'

import './possibility.css'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImg} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The Possibilities are beyond your imagination</h1>
                <p>Try it now and discover brand new ways to immerse yourself into limitless possibilities.
                    Apps range from all kinds of devices, choose your device and get started. The possibilities are endless
                    and the range limitless
                </p>
            </div>
        </div>
    )
}

export default Possibility
