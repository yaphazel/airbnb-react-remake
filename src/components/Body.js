import React from 'react'
import InspireTabs from './InspireTabs.js';
import Jumbotron from './Jumbotron.js';
function Body() {
  return (
    <div className="bodySection container-fluid">
        <Jumbotron/>
        <div className="bodySection__discover discoverExperience m-3 p-3">
            <div className="bodySection__discover__row row">
                <h1 className="discover__row__title col m-3 m-lg-5">
                    Discover Airbnb Experiences
                </h1>
            </div>
            <div className="bodySection__discover__row row mx-2 mx-md-3 mx-lg-5 mb-1 mb-lg-4">
                <div className="bodySection__row__tripJumbotron col-12 col-sm-6 text-white text-left">
                    <div className="bodySection__tripJumbotron__inner p-5 rounded">
                        <h1 className="bodySection__tripJumbotron__title">Things to do on your trip</h1>
                        <button type='button' className="btn mt-3 py-2 px-4 text-dark btn-light">Experiences</button> 
                    </div>
                </div>
                <div className="bodySection__row__homeJumbotron col-12 col-sm-6 text-white text-left">
                    <div className="bodySection__homeJumbotron__inner p-5 rounded">
                        <h1 className="bodySection__homeJumbotron__title">Things to do from home</h1>
                        <button type='button' className="btn mt-3 py-2 px-4 text-dark btn-light">Online Experiences</button>   
                    </div>
                </div>
            </div>
        </div>
        <div className="bodySection__gift giftCards m-3 p-3">
            <div className="bodySection__gift__row row my-4">
                <div className="gift__row__title col-3 m-5">
                    <h1 className='gift__title__h1'>Shop Airbnb gift cards</h1>
                    <button type='button' className="gift__title__button btn text-light btn-dark p-2 px-4"><strong>Learn more</strong></button>
                </div>
                <div className="gift__row__image col m-3">
                    <img className="gift__image__img" src="gift-card.webp" alt="" height="340px"/>
                </div>
            </div>
        </div>
        <InspireTabs />
    </div>
  )
}
export default Body;