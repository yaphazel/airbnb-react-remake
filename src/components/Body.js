import React from 'react'
import InspireTabs from './InspireTabs.js';
function Body() {
  return (
    <div class="container-fluid">
        <div class="row">
            <div class="saveukraineJumbotron col m-5 p-5 text-white text-center bg-danger rounded">
                <h1>Help house 100,000 refugees fleeing Ukraine</h1>
                <button type="button" class="btn btn-outline-light text-light">Learn more</button>
            </div>
        </div>
        <div class="row">
            <div class="imflexibleJumbotron col m-5 p-5 text-white text-center rounded ">
                <h1>Let your curiosity do the booking</h1>
                <button type="button" class="btn btn-light rounded-pill p-3">I'm flexible</button>
            </div>
        </div>
        <div class="discoverExperience">
            <div class="row">
                <div class="discoverExperience__title col m-5">
                    <h1>Discover Airbnb Experiences</h1>
                </div>
            </div>
            <div class="row">
                <div class="todotripJumbotron col ms-md-5 me-md-2 p-5 text-white text-left rounded">
                    <h1 class="todotripJumbotron__title">Things to do on your trip</h1>
                    <button type='button' class="btn text-dark btn-light">Experiences</button> 
                </div>
                <div class="todohomeJumbotron col me-5 ms-2 p-5 text-white text-left rounded">
                    <h1 class="todohomeJumbotron__title">Things to do from home</h1>
                    <button type='button' class="btn text-dark btn-light"> Online Experiences</button>   
                </div>
            </div>
        </div>
        <div class="giftCards">
            <div class="row my-4">
                <div class="col-3 m-5">
                    <h1>Shop Airbnb gift cards</h1>
                    <button type='button' class="btn text-light btn-dark p-2">Learn more</button>
                </div>
                <div class="col m-3">
                    <img src="gift-card.webp" alt="" height="360px"/>
                </div>
            </div>
        </div>
        <InspireTabs />
    </div>
  )
}
export default Body;