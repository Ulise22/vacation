import React from "react";
import city from '../images/city.jpg'
import './Cities.css';

const Cities = () => {
    return(
        <div name="citys" className="container">
            <div className="cities__container">
            <div className="cities__texts">
                <h2>Cities</h2>
                <div className="cities__list">
                    <ul>
                        <li className="cities__list__item">Bergamo</li>
                        <li className="cities__list__item">New York</li>
                        <li className="cities__list__item">Madrid</li>
                        <li className="cities__list__item">Barcelona</li>
                        <li className="cities__list__item">Sevilla</li>
                        <li className="cities__list__item">Paris</li>
                        <li className="cities__list__item">Milan</li>
                        <li className="cities__list__item">Roma</li>
                        <li className="cities__list__item">Turin</li>
                        <li className="cities__list__item">Munich</li>
                        <li className="cities__list__item">London</li>
                        <li className="cities__list__item">Birmingham</li>
                    </ul>

                    <ul>
                        <li className="cities__list__item">Miami</li>
                        <li className="cities__list__item">Montevideo</li>
                        <li className="cities__list__item">Rio de Janeiro</li>
                        <li className="cities__list__item">Buenos Aires</li>
                        <li className="cities__list__item">Santiago de Chile</li>
                        <li className="cities__list__item">Moscu</li>
                        <li className="cities__list__item">Tokio</li>
                        <li className="cities__list__item">San Petersburg</li>
                        <li className="cities__list__item">Las Vegas</li>
                        <li className="cities__list__item">Venezia</li>
                        <li className="cities__list__item">Toronto</li>
                        <li className="cities__list__item">Beijin</li>
                    </ul>
                </div>
            </div>
            <div className="cities__img">
                <img src={city} alt="city" />
            </div>    
            </div>
        </div>
    )
}

export default Cities;