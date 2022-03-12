import React from "react";
import passport from '../images/passport.png';
import './Hero.css';

const Hero = () => {
    return(
        <div name="home" className="hero__container">
            <div className="hero__texts">
                <h1>The Best Turistic Guide</h1>
                <p>With the Aeorlinea Vacation, you will obtain the best tourist experiences that can be achieved, we are a travel agency that is exclusively in charge of making your vacation trips the best possible, so that you do not have to think about it and you can dedicate yourself to enjoying the wonderful experiences waiting for you.</p>
                <p>Our clients, you already enjoy many varieties of offers that arrive daily, to be able to travel to the best destinations for the best prices, give it an opportunity to have the vacation of your dreams right now.</p>
            </div>

            <div className="hero__image">
                <img src={passport} alt="passport" />
            </div>
        </div>
    )
}

export default Hero;