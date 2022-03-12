import React from "react";
import beach from '../images/beach.jpg'
import './Categories.css';

const Categories = () => {
    return(
        <div name="categories" className="container">
            <div className="categ__container">
            <div className="categ__texts">
                <h2>Categories</h2>
                <div className="categ__list">
                    <ul>
                        <li className="categ__list__item">Restaurants</li>
                        <li className="categ__list__item">Beaches</li>
                        <li className="categ__list__item">Atractions</li>
                        <li className="categ__list__item">Fast food</li>
                        <li className="categ__list__item">Deportive events</li>
                        <li className="categ__list__item">Markets</li>
                        <li className="categ__list__item">Music Shows</li>
                        <li className="categ__list__item">Music</li>
                        <li className="categ__list__item">Vip</li>
                        <li className="categ__list__item">Guided walks</li>
                        <li className="categ__list__item">Private flights</li>
                        <li className="categ__list__item">Food</li>
                    </ul>

                    <ul>
                        <li className="categ__list__item">Drinks</li>
                        <li className="categ__list__item">Hospitals</li>
                        <li className="categ__list__item">Churches</li>
                        <li className="categ__list__item">Cinemas</li>
                        <li className="categ__list__item">Discounts</li>
                        <li className="categ__list__item">Social Media</li>
                        <li className="categ__list__item">Turistics zones</li>
                        <li className="categ__list__item">Cities tours</li>
                        <li className="categ__list__item">Available times</li>
                        <li className="categ__list__item">Shows</li>
                        <li className="categ__list__item">Comedy Stand-up</li>
                        <li className="categ__list__item">Help</li>
                    </ul>
                </div>
            </div>
            <div className="categ__img">
                <img src={beach} alt="beach" />
            </div>    
            </div>
        </div>
    )
}

export default Categories;