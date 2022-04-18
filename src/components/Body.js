import React from 'react'
import InspireTabs from './InspireTabs.js';
import Jumbotron from './Jumbotron.js';
function Body() {
  return (
    <div className=" container-fluid">
        <Jumbotron/>
        {/* <div className="body__section__row row">
            <div className="jumbotron__ukraine col mx-5 mb-5 p-5 text-white text-center bg-danger rounded">
                <h1 className="jumbotron__ukraine__title">Help house 100,000 refugees fleeing Ukraine</h1>
                <button type="button" className="btn btn-outline-light text-light">Learn more</button>
            </div>
        </div>
        <div className="jumbotron__flexible row  m-5 p-5">
            <div className=" col text-white text-center rounded ">
                <h1 className="jumbotron__flexible__title">Let your curiosity do the booking</h1>
                <button type="button" className="jumbotron__flexible__button btn btn-light rounded-pill py-3 px-5">I'm flexible</button>
            </div>
        </div> */}
        <div className="discoverExperience">
            <div className="row">
                <div className="discoverExperience__title col m-5">
                    <h1>Discover Airbnb Experiences</h1>
                </div>
            </div>
            <div className="row">
                <div className="todotripJumbotron col ms-md-5 me-md-2 p-5 text-white text-left rounded">
                    <h1 className="todotripJumbotron__title">Things to do on your trip</h1>
                    <button type='button' className="btn text-dark btn-light">Experiences</button> 
                </div>
                <div className="todohomeJumbotron col me-5 ms-2 p-5 text-white text-left rounded">
                    <h1 className="todohomeJumbotron__title">Things to do from home</h1>
                    <button type='button' className="btn text-dark btn-light"> Online Experiences</button>   
                </div>
            </div>
        </div>
        <div className="giftCards">
            <div className="row my-4">
                <div className="col-3 m-5">
                    <h1>Shop Airbnb gift cards</h1>
                    <button type='button' className="btn text-light btn-dark p-2">Learn more</button>
                </div>
                <div className="col m-3">
                    <img src="gift-card.webp" alt="" height="360px"/>
                </div>
            </div>
        </div>
        <InspireTabs />
    </div>
  )
}
export default Body;