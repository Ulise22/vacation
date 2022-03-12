import React from "react";
import passport from '../images/passport.png';
import './Hero.css';

const Hero = () => {
    return(
        <div name="home" className="hero__container">
            <div className="hero__texts">
                <h1>La Mejor Guia Turistica</h1>
                <p>Con la Aeorlinea Vacation, obtendras las mejores experiencias turisticas que se pueden conseguir, somos una agencia de viaje que se encarga exlcusivamente de hacer tus viajes vacaionelaes lo mejor posible, para que vos no tengas que pensar en eso y puedas dedicarte a disfrutar de las maravillosas experiencias que esperan por ti.</p>
                <p>Nuestros clientes, ya disfrutas de muchas variedades de ofertas que llegan a diario, para poder viajar a los mejores destinos por los mejores precios, dale una oportunidad para tenes las vacaciones de tus sueños ahora mismo.</p>
            </div>

            <div className="hero__image">
                <img src={passport} alt="passport" />
            </div>
        </div>
    )
}

export default Hero;